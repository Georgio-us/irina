(function () {
    const TELEGRAM_REVIEWS_URL = 'https://t.me/irina_uzhelovskaya';

    const reviews = [
        {
            id: 'yuliia-ozcan',
            name: 'Yuliia Özcan',
            initials: 'YÖ',
            product: 'sell-star',
            excerpt: 'Сьогодні всі хотіли у мене купувати тури і купували. І дійсно треба сили щоб це все винести, опрацювати. Тепер моя мета - високі чеки.',
            text: 'Я спочатку пройшла  продавай як зірка, а тепер я тут.\n\nПрацюю гідом.\n\nСьогодні всі хотіли у мене купувати тури і купували. І дійсно треба сили щоб це все винести, опрацювати.\n\nТепер моя мета - високі чеки, а то поламається кровать.\n\nВсе це працює.\n\nІра ,все як обіцяли!!!\n\nЗа 2 години до модуля, подзвонив зайка з окровавленою мордочкою , і так плакав…\n\nІра , як ви вчасно!!'
        },
        {
            id: 'polina-nazarenko',
            name: 'Polina Nazarenko',
            initials: 'PN',
            product: 'mentor-28',
            excerpt: 'На практиці застосовуєш отримані технології і вже відчуваєш, як змінюєшся сам і це змінює життя. А це ж ще тільки початок.',
            text: 'Дивовижний курс❤️\n\nТалановитий ментор Ірина, завдяки якій доходчиво сприймається концентрат матеріалу. На практиці застосовуєш отримані технології і вже відчуваєш, як змінюєшся сам і це змінює життя. А це ж ще тільки початок😍\n\nВся програма курсу - це вау! Дякую, що я тут, дякую за можливість створити своє прекрасне життя!!!\n\nОсобисто у мене виникли деякі ідеї щодо моєї справи, бо я відчуваю впевненість, дозволяю собі сміливість, тут же роблю дії,  і ось вже з людиною, з якою ще навіть не зустрічалися, плануємо цікавезний майстер клас. А це ж запускає і рекламу, і сарафанне радіо, і веде до мене нових клієнтів, і зростають мої прибутки!\n\nЯ дуже рада, що стаю власником свого життя і можу отримувати все, чого хочу, легко і з задоволенням!\n\nДякую, Ментор 28! Дякую, Ірино! Дякую, супер команда курсу!'
        },
        {
            id: 'oksana-zoom',
            name: 'Оксана',
            initials: 'О',
            product: 'zoom',
            excerpt: 'Тепер все стало на свої місця. Тепер є розуміння цих інструментів, а то я була, як сліпе кошеня.',
            text: 'Який неймовірний вебінар про тенденції🔥🔥\n\nДеякі речі з того, що Іра говорила, я робила, але це все підсвідомо, не розуміючи, як то працює. Тепер все стало на свої місця. Тепер є розуміння цих інструментів, а то я була, як сліпе кошеня. Дякую, Ірина🥰🥰'
        },
        {
            id: 'olena-mentor',
            name: 'Олена',
            initials: 'О',
            product: 'mentor-28',
            excerpt: 'Написала щоденник героя, почитала і усвідомила наскільки це потужна програма!!! Просто виконала поставлені завдання.',
            text: 'Доброго ранку, дякую щиро- щиро, за таку можливість бути тут на Ментор28. Написала щоденник героя, почитала і усвідомила наскільки це потужна програма!!! Просто виконала поставлені завдання, виконала всі, так як рекомендовано ( фільми , книги, конспекти) . Відмітила результати!!! Так може бути? Ірина Ви геній!!! Дякую !!!'
        },
        {
            id: 'oksana-shandrovska',
            name: 'Oksana Shandrovska',
            initials: 'OS',
            product: 'mentor-28',
            excerpt: 'Після Ментор мені все стає зрозуміло і все розставляється по місцях. Після Ментор я нарешті стану самостійною.',
            text: 'Я зараз проходжу програму Ментор 28 в Ірини і я вже розумію, що це моє останнє навчання - після Ментор мені все стає зрозуміло і все розставляється по місцях. Таке враження, що всі мої попередні навчання готували мене саме до Ментор - це як випускний екзамен і далі попереду тільки щасливе життя.\n\nДуже рада, що довірилася Ірині. У неї не просто знання, а справді величезний досвід за плечима. Після Ментор я нарешті стану самостійною і не потрібно буде шукати ще якогось супер наставника - я сама стану собі наставником. Дякую за цю можливість❤️'
        },
        {
            id: 'olena-tsyabakova',
            name: 'Олена Цибакова',
            initials: 'ОЦ',
            product: 'mentor-28',
            excerpt: 'Зараз переслуховую модулі ментор 28 і бачу, що програми працюють. Переглядаю модулі і все більше нового відкриваю для себе.',
            text: 'Дівчата, всім привіт! Хочу поділитися подіями які зі мною стаються. Зараз переслуховую модулі ментор 28 і бачу, що програми працюють. В мене мінус 3 кг по вазі. І була ситуація, за 20 хвилин до поганої події я уіхала. Зі мною не стається нічого поганого, біда обходить мене стороною.\n\nПереглядаю модулі і все більше нового відкриваю для себе. @Irin212121 ДЯКУЮ ВАМ ЗА ВАШУ ПРАЦЮ'
        },
        {
            id: 'natalia-berezovska',
            name: 'Наталья Березовская',
            initials: 'НБ',
            product: 'sell-star',
            excerpt: 'Ірина в своєму курсі дає таку потужну концентрацію енергії і інструментів, технології і ключів.',
            text: 'Відгук про курс «Продавай як зірка»\n\nЯ ніколи не любила продавати, сама для себе завжди повторювала, що продажі, це не для мене, бо я людина творча, люблю співати і малювати☺️\n\nАле, я завжди хотіла бути вільною і подорожувати. Мріяла здійснити кругосвітню мандрівку 😍\n\nІ в певний момент, зрозуміла, що мені для цього потрібен ресурс, а хочу мати таку можливість, для цього потрібно багато заробляти і мати час.\n\nКоли ти приймаєш рішення змінити своє життя, простір дає тобі цю можливість, і важливо, не упустити її, впадаючи в сумніви і страхи.\n\nІрина в своєму курсі дає таку потужну концентрацію енергії і інструментів, технології і ключів, що з нею, кожен, хто прийняв рішення змінити своє життя - зможе це зробити.\n\nБезмежно вдячна за все ❤️ і рекомендую від щирого серця 🤗'
        },
        {
            id: 'nadezhda-matiko',
            name: 'Надежда Матико',
            initials: 'НМ',
            product: 'mentor-28',
            excerpt: 'Один з найкращих досвідів і рішень у моєму житті, це пройти шлях на Ментор 28. Я почала розуміти себе та інших людей.',
            text: 'Один з найкращих досвідів і рішень у моєму житті, це пройти шлях на Ментор 28.\n\nЯ довірилась собі і своєму поклику піти сюди і я дуже вдячна, вам Іра, @Irin212121 за цю можливість, що ви створили таку програму... Ви так просто і сильно доносите складні речі, ці всі практики доповнюють одна одну і змінюють сприйняття самого себе, світу, відношення до батьків, грошей і свого шляху героя. Я дуже, дуже вам вдячна.\n\nОкрема вдячність за Ключі та голубий океан... Це мега цінна інформація з якою ви щедро ділитесь.  Моє життя дійсно вже не буде таким як раніше, я почала розуміти себе та інших людей і в мене є сильна віра, що я можу все змінити!'
        },
        {
            id: 'iryna-channel',
            name: 'Ирина',
            initials: 'И',
            product: 'brand',
            excerpt: 'Канал чудовий,я  по декілька раз прослуховуюта усвідомлюю про своє життя багато різного.',
            text: 'Іра ,я дуже радію,що натрапила на вас ,насправді не памятаю звідки ви взялись в моєму телеграмі)))\n\nЯ з тих людей ,які завжди задумубться,чому так ,а не інакше ,щось трапляється,чи чому люди поступаютьтак ,а не інакше.\n\nКанал чудовий,я  по декілька раз прослуховуюта усвідомлюю про своє життя багато різного.\n\nДякую та обнімаю міцно🥰'
        },
        {
            id: 'daria-session',
            name: 'Дарья',
            initials: 'Д',
            product: 'personal',
            excerpt: 'Ваша мудрість, тонке відчуття, знання та щедрість на них - то просто Любов. Скільки я в собі побачила…',
            text: 'Ірина, дуже вдячна Вам за сесію❤️\n\nВи неймовірність яка справдилась! Ваша мудрість, тонке відчуття, знання та щедрість на них - то просто Любов❤️❤️❤️ до речі, саме слово «люююбляча» Ви вимовляєте якось так чарівно🥰🥰🥰 я і в медитації від нього танула і на сесії Ви як вимовили його, так відразу так тепло на душі🤗\n\nДуже корисно передивитись запис сесії - Боже, у Вас просто океан терпіння😅 дякую Вам за це окремо!!!\n\nСкільки я в собі побачила…і тим цікавіше буде бачити свій прогрес!\n\nДякую дякую дякую❤️'
        }
    ];

    const copy = {
        ru: {
            eyebrow: 'Отзывы участниц',
            defaultTitle: 'Опыт, которым делятся участницы',
            defaultDescription: 'Живые истории о программах, встречах и личной работе с Ириной.',
            all: 'Все',
            read: 'Читать полностью',
            telegram: 'Читать все отзывы в Telegram',
            previous: 'Предыдущий отзыв',
            next: 'Следующий отзыв',
            close: 'Закрыть отзыв',
            dialog: 'Полный отзыв',
            empty: 'Отзывы для этого направления скоро появятся.',
            products: {
                'mentor-28': 'Mentor 28',
                'sell-star': 'Продавай як Зірка',
                zoom: 'Zoom-встречи',
                brand: 'Об Ирине',
                personal: 'Личная работа'
            }
        },
        uk: {
            eyebrow: 'Відгуки учасниць',
            defaultTitle: 'Досвід, яким діляться учасниці',
            defaultDescription: 'Живі історії про програми, зустрічі та особисту роботу з Іриною.',
            all: 'Усі',
            read: 'Читати повністю',
            telegram: 'Читати всі відгуки в Telegram',
            previous: 'Попередній відгук',
            next: 'Наступний відгук',
            close: 'Закрити відгук',
            dialog: 'Повний відгук',
            empty: 'Відгуки для цього напряму незабаром з’являться.',
            products: {
                'mentor-28': 'Mentor 28',
                'sell-star': 'Продавай як Зірка',
                zoom: 'Zoom-зустрічі',
                brand: 'Про Ірину',
                personal: 'Особиста робота'
            }
        }
    };

    const escapeHtml = (value) => String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    const getLanguage = () => (window.i18n && window.i18n.lang === 'uk') ? 'uk' : 'ru';

    const createModal = (language) => {
        let modal = document.querySelector('[data-testimonial-modal]');
        if (modal) return modal;

        const labels = copy[language];
        modal = document.createElement('div');
        modal.className = 'testimonial-modal';
        modal.setAttribute('data-testimonial-modal', '');
        modal.setAttribute('aria-hidden', 'true');
        modal.innerHTML = `
            <div class="testimonial-modal__backdrop" data-testimonial-close></div>
            <div class="testimonial-modal__dialog" role="dialog" aria-modal="true" aria-label="${escapeHtml(labels.dialog)}">
                <button class="testimonial-modal__close" type="button" data-testimonial-close aria-label="${escapeHtml(labels.close)}">
                    <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
                <div class="testimonial-modal__author">
                    <span class="testimonial-avatar" data-testimonial-modal-initials></span>
                    <div>
                        <strong data-testimonial-modal-name></strong>
                        <span data-testimonial-modal-product></span>
                    </div>
                </div>
                <div class="testimonial-modal__quote" data-testimonial-modal-text></div>
            </div>`;
        document.body.appendChild(modal);
        return modal;
    };

    const initComponent = (root) => {
        const language = getLanguage();
        const labels = copy[language];
        const initialFilter = root.dataset.filter || 'all';
        const showFilters = root.dataset.filters === 'true';
        const limit = Number.parseInt(root.dataset.limit || String(reviews.length), 10);
        const heading = (language === 'uk' ? root.dataset.headingUk : root.dataset.heading) || labels.defaultTitle;
        const description = (language === 'uk' ? root.dataset.descriptionUk : root.dataset.description) || labels.defaultDescription;
        const showHeading = root.dataset.showHeading !== 'false';
        const configuredProducts = (root.dataset.filterOptions || 'mentor-28,sell-star,zoom')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);

        let activeFilter = initialFilter;
        let activeIndex = 0;
        let visibleReviews = [];
        let lastFocusedElement = null;

        root.innerHTML = `
            ${showHeading ? `
                <div class="reviews-component__head">
                    <div class="reviews-component__eyebrow">${escapeHtml(labels.eyebrow)}</div>
                    <h2>${escapeHtml(heading)}</h2>
                    <p>${escapeHtml(description)}</p>
                </div>` : ''}
            ${showFilters ? `
                <div class="reviews-component__filters" role="group" aria-label="${escapeHtml(labels.eyebrow)}">
                    <button type="button" class="is-active" data-review-filter="all">${escapeHtml(labels.all)}</button>
                    ${configuredProducts.map((product) => `
                        <button type="button" data-review-filter="${escapeHtml(product)}">${escapeHtml(labels.products[product] || product)}</button>
                    `).join('')}
                </div>` : ''}
            <div class="reviews-component__viewport">
                <div class="reviews-component__track" data-reviews-track></div>
            </div>
            <div class="reviews-component__controls">
                <div class="reviews-component__arrows">
                    <button type="button" data-review-prev aria-label="${escapeHtml(labels.previous)}">
                        <i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i>
                    </button>
                    <button type="button" data-review-next aria-label="${escapeHtml(labels.next)}">
                        <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="reviews-component__position" aria-live="polite">
                    <span data-review-current>01</span>
                    <span>/</span>
                    <span data-review-total>01</span>
                </div>
                <div class="reviews-component__progress" aria-hidden="true">
                    <span data-review-progress></span>
                </div>
            </div>
            <div class="reviews-component__footer">
                <a href="${TELEGRAM_REVIEWS_URL}" target="_blank" rel="noopener">
                    <i class="fa-brands fa-telegram" aria-hidden="true"></i>
                    ${escapeHtml(labels.telegram)}
                </a>
            </div>`;

        const track = root.querySelector('[data-reviews-track]');
        const prev = root.querySelector('[data-review-prev]');
        const next = root.querySelector('[data-review-next]');
        const current = root.querySelector('[data-review-current]');
        const total = root.querySelector('[data-review-total]');
        const progress = root.querySelector('[data-review-progress]');
        const viewport = root.querySelector('.reviews-component__viewport');

        const getVisibleCount = () => {
            if (window.matchMedia('(max-width: 700px)').matches) return 1;
            if (window.matchMedia('(max-width: 1100px)').matches) return 2;
            return 3;
        };

        const getMaxIndex = () => Math.max(visibleReviews.length - getVisibleCount(), 0);

        const updatePosition = () => {
            const maxIndex = getMaxIndex();
            activeIndex = Math.min(activeIndex, maxIndex);
            const visibleCount = Math.max(Math.min(getVisibleCount(), visibleReviews.length), 1);
            root.classList.toggle('is-fully-visible', visibleReviews.length <= getVisibleCount());
            const cardWidth = visibleCount === 1
                ? '100%'
                : `calc((100% - (var(--reviews-gap) * ${visibleCount - 1})) / ${visibleCount})`;
            root.style.setProperty('--review-card-width', cardWidth);
            const firstCard = track.querySelector('.review-card');
            const gap = Number.parseFloat(window.getComputedStyle(track).gap) || 0;
            const measuredCardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;
            track.style.transform = `translateX(-${activeIndex * (measuredCardWidth + gap)}px)`;
            current.textContent = String(Math.min(activeIndex + 1, visibleReviews.length || 1)).padStart(2, '0');
            total.textContent = String(Math.max(visibleReviews.length, 1)).padStart(2, '0');
            progress.style.width = `${visibleReviews.length ? Math.min(((activeIndex + visibleCount) / visibleReviews.length) * 100, 100) : 100}%`;
            prev.disabled = activeIndex === 0;
            next.disabled = activeIndex === maxIndex;
        };

        const openReview = (reviewId, trigger) => {
            const review = reviews.find((item) => item.id === reviewId);
            if (!review) return;

            const modal = createModal(language);
            modal.querySelector('[data-testimonial-modal-initials]').textContent = review.initials;
            modal.querySelector('[data-testimonial-modal-name]').textContent = review.name;
            modal.querySelector('[data-testimonial-modal-product]').textContent = labels.products[review.product] || review.product;
            modal.querySelector('[data-testimonial-modal-text]').innerHTML = review.text
                .split(/\n{2,}/)
                .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
                .join('');
            lastFocusedElement = trigger;
            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('testimonial-modal-open');
            modal.querySelector('.testimonial-modal__close').focus();
        };

        const closeModal = () => {
            const modal = document.querySelector('[data-testimonial-modal]');
            if (!modal || !modal.classList.contains('is-open')) return;
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('testimonial-modal-open');
            if (lastFocusedElement) lastFocusedElement.focus();
        };

        const render = () => {
            const filtered = activeFilter === 'all'
                ? reviews
                : reviews.filter((review) => review.product === activeFilter);
            visibleReviews = filtered.slice(0, Number.isFinite(limit) ? limit : reviews.length);
            activeIndex = 0;

            if (!visibleReviews.length) {
                track.innerHTML = `<p class="reviews-component__empty">${escapeHtml(labels.empty)}</p>`;
            } else {
                track.innerHTML = visibleReviews.map((review) => `
                    <article class="review-card">
                        <div class="review-card__top">
                            <span class="testimonial-avatar" aria-hidden="true">${escapeHtml(review.initials)}</span>
                            <span class="review-card__product">${escapeHtml(labels.products[review.product] || review.product)}</span>
                        </div>
                        <blockquote>«${escapeHtml(review.excerpt)}»</blockquote>
                        <div class="review-card__bottom">
                            <strong>${escapeHtml(review.name)}</strong>
                            <button type="button" data-review-open="${escapeHtml(review.id)}">
                                ${escapeHtml(labels.read)}
                                <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i>
                            </button>
                        </div>
                    </article>
                `).join('');
            }

            root.querySelectorAll('[data-review-open]').forEach((button) => {
                button.addEventListener('click', () => openReview(button.dataset.reviewOpen, button));
            });
            updatePosition();
        };

        root.querySelectorAll('[data-review-filter]').forEach((button) => {
            button.addEventListener('click', () => {
                activeFilter = button.dataset.reviewFilter;
                root.querySelectorAll('[data-review-filter]').forEach((filterButton) => {
                    filterButton.classList.toggle('is-active', filterButton === button);
                });
                render();
            });
        });

        prev.addEventListener('click', () => {
            activeIndex = Math.max(activeIndex - 1, 0);
            updatePosition();
        });
        next.addEventListener('click', () => {
            activeIndex = Math.min(activeIndex + 1, getMaxIndex());
            updatePosition();
        });

        let pointerStartX = 0;
        let pointerStartY = 0;
        viewport.addEventListener('pointerdown', (event) => {
            pointerStartX = event.clientX;
            pointerStartY = event.clientY;
        });
        viewport.addEventListener('pointerup', (event) => {
            const deltaX = event.clientX - pointerStartX;
            const deltaY = event.clientY - pointerStartY;
            if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY)) return;
            activeIndex = Math.min(Math.max(activeIndex + (deltaX < 0 ? 1 : -1), 0), getMaxIndex());
            updatePosition();
        });

        window.addEventListener('resize', updatePosition);
        document.addEventListener('click', (event) => {
            if (event.target.closest('[data-testimonial-close]')) closeModal();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeModal();
        });

        render();
    };

    const initTestimonials = () => {
        document.querySelectorAll('[data-testimonials]').forEach(initComponent);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTestimonials);
    } else {
        initTestimonials();
    }
})();
