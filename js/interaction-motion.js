/*
 * A small, dependency-free motion layer shared by the site.
 * Motion is intentionally subtle: it supports reading, rather than competing
 * with it, and users who prefer reduced motion are left with the static layout.
 */
(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const canAnimate = () => !reduceMotion.matches;

    const revealSelector = [
        'main > section', '.page-wrapper > section',
        '.methodology-section', '.step-selector', '.courses', '.about',
        '.testimonials', '.blog-section', '.contact-section',
        '.webinar-card', '.program-card', '.feature-card', '.blog-card',
        '.selector-row', '.meditation-card', '.article-section'
    ].join(', ');

    const prepareReveals = () => {
        const items = [...document.querySelectorAll(revealSelector)]
            .filter((element, index, all) => !all.some(other => other !== element && other.contains(element)));

        items.forEach((element, index) => {
            if (element.closest('.mobile-fullscreen-menu, [role="dialog"]')) return;
            element.dataset.reveal = '';
            element.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 55}ms`);
        });

        if (!canAnimate() || !('IntersectionObserver' in window)) {
            items.forEach(element => element.classList.add('is-revealed'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -5%' });

        items.forEach(element => observer.observe(element));
    };

    const initNavigation = () => {
        document.addEventListener('click', event => {
            const link = event.target.closest('a[href]');
            if (!link || !canAnimate() || event.defaultPrevented || event.button !== 0 ||
                event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
                link.target || link.hasAttribute('download')) return;

            const url = new URL(link.href, window.location.href);
            const isSamePageAnchor = url.origin === location.origin && url.pathname === location.pathname && url.hash;
            const isInternalPage = url.origin === location.origin && url.pathname !== location.pathname && !url.hash;
            if (!isInternalPage || link.closest('[data-no-page-transition]')) return;

            event.preventDefault();
            document.documentElement.classList.add('is-leaving-page');
            window.setTimeout(() => { window.location.href = url.href; }, 150);
        });
    };

    const init = () => {
        document.documentElement.classList.add('motion-ready');
        prepareReveals();
        initNavigation();
    };

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init, { once: true })
        : init();
})();
