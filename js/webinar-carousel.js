(function () {
    const webinars = [
        { slug: "inner-state", title: "Сила внутреннего состояния", image: "webinar_main.png", duration: "1:48:00", participants: "2 450 участников", date: "17 мая 2024" },
        { slug: "youth-code", title: "Код молодости", image: "webinar_1.png", duration: "58:24", participants: "1 820 участников", date: "12 мая 2024" },
        { slug: "self-esteem", title: "Самооценка и вера в себя", image: "webinar_2.png", duration: "1:05:18", participants: "2 310 участников", date: "3 мая 2024" },
        { slug: "relationship-code", title: "Код отношений", image: "webinar_3.png", duration: "47:36", participants: "1 950 участников", date: "21 апреля 2024" },
        { slug: "choosing-oneself", title: "Выбор себя", image: "webinar_4.png", duration: "1:03:42", participants: "1 760 участников", date: "10 апреля 2024" },
        { slug: "money-protocols", title: "Денежные протоколы", image: "webinar_money.png", duration: "Zoom-встреча", participants: "Практический формат", date: "" },
        { slug: "event-formation", title: "Формирование событий", image: "webinar_change.png", duration: "Zoom-встреча", participants: "Практический формат", date: "" },
        { slug: "trend-management", title: "Управление тенденциями", image: "webinar_influence.png", duration: "Zoom-встреча", participants: "Практический формат", date: "" },
        { slug: "quantum-psychology", title: "Квантовая психология", image: "webinar_edge.png", duration: "Zoom-встреча", participants: "Практический формат", date: "" },
        { slug: "quantum-breakthrough", title: "Квантовый прорыв", image: "webinar_main.png", duration: "Zoom-встреча", participants: "Практический формат", date: "" }
    ];

    function currentSlug() {
        const page = document.body.dataset.webinarPage;
        return page || location.pathname.split("/").pop().replace(/\.html$/, "");
    }

    function card(webinar) {
        const meta = webinar.date
            ? `<span><i class="fa-solid fa-user-group"></i> ${webinar.participants}</span><span><i class="fa-regular fa-calendar"></i> ${webinar.date}</span>`
            : `<span><i class="fa-solid fa-video"></i> ${webinar.participants}</span>`;
        return `<article class="webinar-card"><a href="./${webinar.slug}.html" aria-label="${webinar.title}"><img src="../images/${webinar.image}" alt="${webinar.title}"><span class="webinar-card-duration">${webinar.duration}</span><span class="webinar-card-title">${webinar.title}</span></a><div class="webinar-card-meta-row"><div>${meta}</div><a href="./${webinar.slug}.html" class="webinar-card-more-link">Подробнее <i class="fa-solid fa-arrow-right"></i></a></div></article>`;
    }

    function init() {
        const section = document.querySelector(".content-related");
        if (!section || section.dataset.carouselReady) return;
        const shelf = section.querySelector(".content-webinar-shelf");
        if (!shelf) return;
        const available = webinars.filter(webinar => webinar.slug !== currentSlug());
        section.dataset.carouselReady = "true";
        shelf.innerHTML = available.map(card).join("");
        shelf.setAttribute("role", "list");
        const viewport = document.createElement("div");
        viewport.className = "content-webinar-carousel";
        shelf.parentNode.insertBefore(viewport, shelf);
        viewport.appendChild(shelf);
        const [previous, next] = section.querySelectorAll(".content-related-arrows button");
        if (!previous || !next) return;
        previous.parentElement.removeAttribute("aria-hidden");
        previous.removeAttribute("disabled");
        next.removeAttribute("disabled");
        previous.setAttribute("aria-label", "Предыдущие Zoom-встречи");
        next.setAttribute("aria-label", "Следующие Zoom-встречи");
        const step = direction => {
            const first = shelf.querySelector(".webinar-card");
            const gap = parseFloat(getComputedStyle(shelf).gap) || 0;
            const amount = (first?.getBoundingClientRect().width || 300) + gap;
            viewport.scrollBy({ left: direction * amount, behavior: "smooth" });
        };
        previous.addEventListener("click", () => step(-1));
        next.addEventListener("click", () => step(1));
    }

    window.initWebinarCarousel = init;
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", init) : init();
})();
