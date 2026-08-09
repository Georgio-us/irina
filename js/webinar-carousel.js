(function () {
    const webinars = [
        { slug: "inner-state", title: "Сила внутреннего состояния", image: "webinar_main.png", duration: "1:48:00", participants: "2 450 участников" },
        { slug: "youth-code", title: "Код молодости", image: "webinar_1.png", duration: "58:24", participants: "1 820 участников" },
        { slug: "self-esteem", title: "Самооценка и вера в себя", image: "webinar_2.png", duration: "1:05:18", participants: "2 310 участников" },
        { slug: "relationship-code", title: "Код отношений", image: "webinar_3.png", duration: "47:36", participants: "1 950 участников" },
        { slug: "choosing-oneself", title: "Выбор себя", image: "webinar_4.png", duration: "1:03:42", participants: "1 760 участников" },
        { slug: "money-protocols", title: "Денежные протоколы", image: "webinar_money.png", duration: "Zoom-встреча", participants: "Практический формат" },
        { slug: "event-formation", title: "Формирование событий", image: "webinar_change.png", duration: "Zoom-встреча", participants: "Практический формат" },
        { slug: "trend-management", title: "Управление тенденциями", image: "webinar_influence.png", duration: "Zoom-встреча", participants: "Практический формат" },
        { slug: "quantum-psychology", title: "Квантовая психология", image: "webinar_edge.png", duration: "Zoom-встреча", participants: "Практический формат" },
        { slug: "quantum-breakthrough", title: "Квантовый прорыв", image: "webinar_main.png", duration: "Zoom-встреча", participants: "Практический формат" }
    ];

    function currentSlug() {
        const page = document.body.dataset.webinarPage;
        return page || location.pathname.split("/").pop().replace(/\.html$/, "");
    }

    function card(webinar) {
        const meta = `<span><i class="fa-solid fa-user-group"></i> ${webinar.participants}</span>`;
        return `<article class="webinar-card"><a href="./${webinar.slug}.html" aria-label="${webinar.title}"><img src="../images/${webinar.image}" alt="${webinar.title}"><span class="webinar-card-duration">${webinar.duration}</span><span class="webinar-card-title">${webinar.title}</span></a><div class="webinar-card-meta-row"><div>${meta}</div><a href="./${webinar.slug}.html" class="webinar-card-more-link">Подробнее <i class="fa-solid fa-arrow-right"></i></a></div></article>`;
    }

    function init() {
        const section = document.querySelector(".content-related");
        if (!section || section.dataset.carouselReady) return;
        const shelf = section.querySelector(".content-webinar-shelf");
        if (!shelf) return;
        const available = webinars.filter(webinar => webinar.slug !== currentSlug());
        section.dataset.carouselReady = "true";
        let startIndex = 0;
        const cardsPerView = 4;
        const render = () => {
            shelf.innerHTML = Array.from({ length: cardsPerView }, (_, offset) => available[(startIndex + offset) % available.length])
                .map(card)
                .join("");
        };
        render();
        const [previous, next] = section.querySelectorAll(".content-related-arrows button");
        if (!previous || !next) return;
        previous.parentElement.removeAttribute("aria-hidden");
        previous.removeAttribute("disabled");
        next.removeAttribute("disabled");
        previous.setAttribute("aria-label", "Предыдущие Zoom-встречи");
        next.setAttribute("aria-label", "Следующие Zoom-встречи");
        const step = direction => {
            startIndex = (startIndex + direction * cardsPerView + available.length) % available.length;
            render();
        };
        previous.addEventListener("click", () => step(-1));
        next.addEventListener("click", () => step(1));
    }

    window.initWebinarCarousel = init;
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
