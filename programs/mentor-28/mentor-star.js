/* Interactions for the approved Mentor 28 landing template. */
(() => {
    const dropdownLinks = Array.from(document.querySelectorAll(".mentor-template-header .nav-link-dropdown"));

    dropdownLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            if (!window.matchMedia("(max-width: 1024px)").matches) return;

            const item = link.closest(".nav-item");
            const alreadyOpen = item?.classList.contains("is-open");

            if (!alreadyOpen) {
                event.preventDefault();
                document.querySelectorAll(".mentor-template-header .nav-item.is-open").forEach((openItem) => {
                    if (openItem !== item) openItem.classList.remove("is-open");
                });
                item?.classList.add("is-open");
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (event.target.closest(".mentor-template-header .nav-item")) return;
        document.querySelectorAll(".mentor-template-header .nav-item.is-open").forEach((item) => {
            item.classList.remove("is-open");
        });
    });
})();

(() => {
    const section = document.querySelector(".mentor-modules-stage");

    if (!section) return;

    const tabs = Array.from(section.querySelectorAll('[role="tab"]'));
    const panels = Array.from(section.querySelectorAll("[data-module-panel]"));
    let activeIndex = 0;
    let pointerStart = null;

    const activate = (index, { focus = false } = {}) => {
        activeIndex = (index + tabs.length) % tabs.length;
        section.dataset.activeModule = String(activeIndex + 1);

        tabs.forEach((tab, tabIndex) => {
            const selected = tabIndex === activeIndex;
            tab.setAttribute("aria-selected", String(selected));
            tab.tabIndex = selected ? 0 : -1;
        });

        panels.forEach((panel, panelIndex) => {
            panel.hidden = panelIndex !== activeIndex;
        });

        if (focus) tabs[activeIndex].focus();
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activate(index));
        tab.addEventListener("keydown", (event) => {
            const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft", "Home", "End"];
            if (!keys.includes(event.key)) return;

            event.preventDefault();

            if (event.key === "Home") activate(0, { focus: true });
            else if (event.key === "End") activate(tabs.length - 1, { focus: true });
            else if (event.key === "ArrowDown" || event.key === "ArrowRight") activate(activeIndex + 1, { focus: true });
            else activate(activeIndex - 1, { focus: true });
        });
    });

    section.addEventListener("touchstart", (event) => {
        pointerStart = event.changedTouches[0]?.clientX ?? null;
    }, { passive: true });

    section.addEventListener("touchend", (event) => {
        if (pointerStart === null) return;

        const pointerEnd = event.changedTouches[0]?.clientX ?? pointerStart;
        const distance = pointerEnd - pointerStart;
        pointerStart = null;

        if (Math.abs(distance) < 52) return;
        activate(distance < 0 ? activeIndex + 1 : activeIndex - 1);
    }, { passive: true });

    activate(0);
})();

(() => {
    const questions = Array.from(document.querySelectorAll("[data-participation-question]"));

    if (!questions.length) return;

    const setQuestion = (button, open) => {
        const answer = document.getElementById(button.getAttribute("aria-controls"));
        const icon = button.querySelector("i");

        button.setAttribute("aria-expanded", String(open));
        if (answer) answer.hidden = !open;
        if (icon) icon.textContent = open ? "−" : "+";
    };

    questions.forEach((button) => {
        button.addEventListener("click", () => {
            const willOpen = button.getAttribute("aria-expanded") !== "true";

            questions.forEach((question) => setQuestion(question, false));
            setQuestion(button, willOpen);
        });
    });
})();

(() => {
    const section = document.querySelector(".mentor-participation-block");
    const slider = section?.querySelector(".mentor-participation-block__plans");
    const buttons = Array.from(section?.querySelectorAll("[data-plan-switch]") || []);
    const cards = Array.from(section?.querySelectorAll(".mentor-plan") || []);

    if (!slider || buttons.length !== cards.length || !cards.length) return;

    const setActive = (index) => {
        buttons.forEach((button, buttonIndex) => {
            button.setAttribute("aria-pressed", String(buttonIndex === index));
        });
    };

    const cardPosition = (card) =>
        card.getBoundingClientRect().left -
        slider.getBoundingClientRect().left +
        slider.scrollLeft;

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            setActive(index);
            slider.scrollTo({
                left: cardPosition(cards[index]),
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                    ? "auto"
                    : "smooth",
            });
        });
    });

    let frame = 0;
    slider.addEventListener("scroll", () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
            const current = cards.reduce(
                (closest, card, index) => {
                    const distance = Math.abs(cardPosition(card) - slider.scrollLeft);
                    return distance < closest.distance ? { index, distance } : closest;
                },
                { index: 0, distance: Number.POSITIVE_INFINITY },
            );

            setActive(current.index);
        });
    }, { passive: true });
})();
