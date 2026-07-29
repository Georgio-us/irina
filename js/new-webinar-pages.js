(function () {
    const bi = (ru, uk) => ({ ru, uk });

    const pages = {
        "event-formation": {
            slug: "event-formation",
            title: bi("Формирование событий", "Формування подій"),
            documentTitle: bi(
                "Формирование событий — Zoom-встреча Ирины Ужеловской",
                "Формування подій — Zoom-зустріч Ірини Ужеловської"
            ),
            titleLines: [
                bi("Формирование", "Формування"),
                bi("событий", "подій")
            ],
            image: "../images/IMG_7515.PNG",
            description: bi(
                "Практическая Zoom-встреча о том, как внимание, внутреннее состояние и ежедневные решения складываются в события и повторяющиеся жизненные сценарии.",
                "Практична Zoom-зустріч про те, як увага, внутрішній стан і щоденні рішення складаються в події та повторювані життєві сценарії."
            ),
            introTitle: bi(
                "События начинаются раньше, чем становится виден результат",
                "Події починаються раніше, ніж стає видимим результат"
            ),
            intro: [
                bi(
                    "Привычная реальность формируется не одним большим решением, а последовательностью состояний, выборов и действий, которые мы повторяем каждый день.",
                    "Звична реальність формується не одним великим рішенням, а послідовністю станів, виборів і дій, які ми повторюємо щодня."
                ),
                bi(
                    "На встрече рассматриваем исходную точку, повторяющиеся сценарии и траекторию, по которой можно двигаться к другому результату.",
                    "На зустрічі розглядаємо вихідну точку, повторювані сценарії та траєкторію, якою можна рухатися до іншого результату."
                )
            ],
            quote: bi(
                "Чтобы изменить событие, важно увидеть решения и состояние, из которых оно формируется.",
                "Щоб змінити подію, важливо побачити рішення та стан, з яких вона формується."
            ),
            timeline: [
                [bi("Точка А", "Точка А"), bi("Что уже формирует вашу текущую реальность", "Що вже формує вашу поточну реальність")],
                [bi("Внимание и состояние", "Увага та стан"), bi("Как внутренний фокус влияет на решения", "Як внутрішній фокус впливає на рішення")],
                [bi("Повторяющиеся сценарии", "Повторювані сценарії"), bi("Почему похожие выборы приводят к похожим результатам", "Чому схожі вибори приводять до схожих результатів")],
                [bi("Решение и действие", "Рішення та дія"), bi("Где начинается изменение привычной траектории", "Де починається зміна звичної траєкторії")],
                [bi("Новый вектор", "Новий вектор"), bi("Как собрать понятное направление дальнейших действий", "Як зібрати зрозумілий напрям подальших дій")]
            ],
            results: [
                bi("Замечаете, что в жизни повторяются похожие ситуации", "Помічаєте, що в житті повторюються схожі ситуації"),
                bi("Многое понимаете, но изменения не закрепляются", "Багато що розумієте, але зміни не закріплюються"),
                bi("Часто действуете из автоматической реакции", "Часто дієте з автоматичної реакції"),
                bi("Теряете направление среди множества целей", "Втрачаєте напрям серед безлічі цілей"),
                bi("Хотите увидеть связь между состоянием и результатом", "Хочете побачити зв’язок між станом і результатом"),
                bi("Готовы выстроить собственную траекторию изменений", "Готові вибудувати власну траєкторію змін")
            ]
        },
        "trend-management": {
            slug: "trend-management",
            title: bi("Управление тенденциями", "Управління тенденціями"),
            documentTitle: bi(
                "Управление тенденциями — Zoom-встреча Ирины Ужеловской",
                "Управління тенденціями — Zoom-зустріч Ірини Ужеловської"
            ),
            titleLines: [
                bi("Управление", "Управління"),
                bi("тенденциями", "тенденціями")
            ],
            image: "../images/IMG_7515.PNG",
            description: bi(
                "Практическая Zoom-встреча о внутренних и поведенческих тенденциях, которые постепенно определяют направление решений, действий и будущих результатов.",
                "Практична Zoom-зустріч про внутрішні та поведінкові тенденції, які поступово визначають напрям рішень, дій і майбутніх результатів."
            ),
            introTitle: bi(
                "Направление жизни создаётся тем, что повторяется",
                "Напрям життя створюється тим, що повторюється"
            ),
            intro: [
                bi(
                    "Тенденция — это не единичное действие, а устойчивый вектор, который ежедневно усиливается привычными решениями.",
                    "Тенденція — це не одинична дія, а стійкий вектор, який щодня посилюється звичними рішеннями."
                ),
                bi(
                    "На встрече разбираем, как распознать текущий вектор, заметить внутреннее сопротивление и поддерживать новое направление без резких рывков.",
                    "На зустрічі розбираємо, як розпізнати поточний вектор, помітити внутрішній опір і підтримувати новий напрям без різких ривків."
                )
            ],
            quote: bi(
                "Устойчивая перемена начинается не с рывка, а с направления, которое вы выбираете снова и снова.",
                "Стійка зміна починається не з ривка, а з напряму, який ви обираєте знову і знову."
            ),
            timeline: [
                [bi("Текущий вектор", "Поточний вектор"), bi("Куда ведут повторяющиеся решения и действия", "Куди ведуть повторювані рішення та дії")],
                [bi("Сигналы тенденции", "Сигнали тенденції"), bi("Как замечать направление до появления результата", "Як помічати напрям до появи результату")],
                [bi("Внутреннее сопротивление", "Внутрішній опір"), bi("Почему новое действие встречает саботаж", "Чому нова дія зустрічає саботаж")],
                [bi("Маленькие действия", "Маленькі дії"), bi("Как поддерживать движение без перегрузки", "Як підтримувати рух без перевантаження")],
                [bi("Закрепление", "Закріплення"), bi("Что превращает выбранный вектор в новую систему", "Що перетворює обраний вектор на нову систему")]
            ],
            results: [
                bi("Начинаете с рывка, а затем возвращаетесь назад", "Починаєте з ривка, а потім повертаєтеся назад"),
                bi("Не замечаете, куда ведут ежедневные решения", "Не помічаєте, куди ведуть щоденні рішення"),
                bi("Сталкиваетесь с прокрастинацией и самосаботажем", "Стикаєтеся з прокрастинацією та самосаботажем"),
                bi("Ждёте идеального состояния для действия", "Чекаєте ідеального стану для дії"),
                bi("Хотите двигаться стабильно, а не через давление", "Хочете рухатися стабільно, а не через тиск"),
                bi("Готовы создать устойчивую систему маленьких шагов", "Готові створити стійку систему маленьких кроків")
            ]
        },
        "quantum-psychology": {
            slug: "quantum-psychology",
            title: bi("Квантовая психология", "Квантова психологія"),
            documentTitle: bi(
                "Квантовая психология — Zoom-встреча Ирины Ужеловской",
                "Квантова психологія — Zoom-зустріч Ірини Ужеловської"
            ),
            titleLines: [
                bi("Квантовая", "Квантова"),
                bi("психология", "психологія")
            ],
            image: "../images/IMG_7515.PNG",
            description: bi(
                "Zoom-встреча о восприятии, внимании и внутренних моделях, через которые человек интерпретирует происходящее и выбирает способ действовать.",
                "Zoom-зустріч про сприйняття, увагу та внутрішні моделі, через які людина інтерпретує те, що відбувається, і обирає спосіб діяти."
            ),
            introTitle: bi(
                "Мы реагируем не только на события, но и на их внутреннюю интерпретацию",
                "Ми реагуємо не лише на події, а й на їхню внутрішню інтерпретацію"
            ),
            intro: [
                bi(
                    "Один и тот же факт может запускать разные эмоции и решения в зависимости от внимания, ожиданий и привычной картины мира.",
                    "Один і той самий факт може запускати різні емоції та рішення залежно від уваги, очікувань і звичної картини світу."
                ),
                bi(
                    "На встрече исследуем позицию наблюдателя, автоматические модели восприятия и возможность выбирать более осознанную реакцию.",
                    "На зустрічі досліджуємо позицію спостерігача, автоматичні моделі сприйняття та можливість обирати більш усвідомлену реакцію."
                )
            ],
            quote: bi(
                "Когда меняется способ видеть ситуацию, появляется пространство для другого решения.",
                "Коли змінюється спосіб бачити ситуацію, з’являється простір для іншого рішення."
            ),
            timeline: [
                [bi("Восприятие", "Сприйняття"), bi("Как формируется личная картина происходящего", "Як формується особиста картина того, що відбувається")],
                [bi("Фокус внимания", "Фокус уваги"), bi("Что мы замечаем и что остаётся за пределами взгляда", "Що ми помічаємо і що залишається поза межами погляду")],
                [bi("Внутренние модели", "Внутрішні моделі"), bi("Как ожидания влияют на эмоции и выбор", "Як очікування впливають на емоції та вибір")],
                [bi("Позиция наблюдателя", "Позиція спостерігача"), bi("Как создать дистанцию между импульсом и реакцией", "Як створити дистанцію між імпульсом і реакцією")],
                [bi("Осознанный выбор", "Усвідомлений вибір"), bi("Переход от автоматической реакции к новому действию", "Перехід від автоматичної реакції до нової дії")]
            ],
            results: [
                bi("Слишком быстро вовлекаетесь в эмоциональную реакцию", "Надто швидко залучаєтеся в емоційну реакцію"),
                bi("Воспринимаете привычную интерпретацию как единственно возможную", "Сприймаєте звичну інтерпретацію як єдино можливу"),
                bi("Хотите лучше понимать механизм собственных решений", "Хочете краще розуміти механізм власних рішень"),
                bi("Замечаете влияние ожиданий на своё состояние", "Помічаєте вплив очікувань на свій стан"),
                bi("Ищете более осознанный способ взаимодействия с событиями", "Шукаєте більш усвідомлений спосіб взаємодії з подіями"),
                bi("Хотите расширить количество доступных вариантов действия", "Хочете розширити кількість доступних варіантів дії")
            ]
        },
        "quantum-breakthrough": {
            slug: "quantum-breakthrough",
            title: bi("Квантовый прорыв", "Квантовий прорив"),
            documentTitle: bi(
                "Квантовый прорыв — Zoom-встреча Ирины Ужеловской",
                "Квантовий прорив — Zoom-зустріч Ірини Ужеловської"
            ),
            titleLines: [
                bi("Квантовый", "Квантовий"),
                bi("прорыв", "прорив")
            ],
            image: "../images/IMG_7515.PNG",
            description: bi(
                "Практическая Zoom-встреча о переходе от привычного сценария к новой внутренней позиции, решениям и действиям, которые поддерживают реальные изменения.",
                "Практична Zoom-зустріч про перехід від звичного сценарію до нової внутрішньої позиції, рішень і дій, які підтримують реальні зміни."
            ),
            introTitle: bi(
                "Прорыв начинается в точке, где прежний способ действовать перестаёт быть единственным",
                "Прорив починається в точці, де колишній спосіб діяти перестає бути єдиним"
            ),
            intro: [
                bi(
                    "Большое изменение редко становится результатом одного эмоционального импульса. Ему нужна новая позиция, из которой человек принимает следующие решения.",
                    "Велика зміна рідко стає результатом одного емоційного імпульсу. Їй потрібна нова позиція, з якої людина ухвалює наступні рішення."
                ),
                bi(
                    "На встрече рассматриваем точку выбора, переход к новому образу себя и действия, которые помогают закрепить изменение в реальной жизни.",
                    "На зустрічі розглядаємо точку вибору, перехід до нового образу себе та дії, які допомагають закріпити зміну в реальному житті."
                )
            ],
            quote: bi(
                "Прорыв — это не обещание мгновенного результата, а разрешение перестать повторять прежний выбор.",
                "Прорив — це не обіцянка миттєвого результату, а дозвіл перестати повторювати колишній вибір."
            ),
            timeline: [
                [bi("Прежний сценарий", "Колишній сценарій"), bi("Что удерживает внутри знакомой траектории", "Що утримує всередині знайомої траєкторії")],
                [bi("Точка выбора", "Точка вибору"), bi("Где появляется возможность поступить иначе", "Де з’являється можливість вчинити інакше")],
                [bi("Новое «Я»", "Нове «Я»"), bi("Какая внутренняя позиция поддерживает изменение", "Яка внутрішня позиція підтримує зміну")],
                [bi("Решительное действие", "Рішуча дія"), bi("Как перенести внутренний выбор в реальность", "Як перенести внутрішній вибір у реальність")],
                [bi("Интеграция", "Інтеграція"), bi("Что помогает не вернуться к прежнему сценарию", "Що допомагає не повернутися до колишнього сценарію")]
            ],
            results: [
                bi("Чувствуете, что готовы выйти из прежнего сценария", "Відчуваєте, що готові вийти з колишнього сценарію"),
                bi("Откладываете важное решение, ожидая полной уверенности", "Відкладаєте важливе рішення, очікуючи повної впевненості"),
                bi("Хотите перейти от понимания к конкретному действию", "Хочете перейти від розуміння до конкретної дії"),
                bi("Возвращаетесь к знакомой роли после первых изменений", "Повертаєтеся до знайомої ролі після перших змін"),
                bi("Ищете внутреннюю позицию для следующего этапа", "Шукаєте внутрішню позицію для наступного етапу"),
                bi("Готовы закреплять новое решениями в реальной жизни", "Готові закріплювати нове рішеннями в реальному житті")
            ]
        }
    };

    const page = pages[document.body.dataset.webinarPage];
    if (!page) return;

    const localTranslations = {};
    const t = value => {
        if (!value || typeof value !== "object") return value || "";
        localTranslations[value.ru] = value.uk;
        return value.ru;
    };

    const timelineHtml = page.timeline.map((item, index) => `
        <li>
            <time>${String(index + 1).padStart(2, "0")}</time>
            <div>
                <h3>${t(item[0])}</h3>
                <p>${t(item[1])}</p>
            </div>
        </li>
    `).join("");

    const resultsHtml = page.results.map((item, index) => `
        <article>
            <span>${String(index + 1).padStart(2, "0")}</span>
            <h3>${t(item)}</h3>
        </article>
    `).join("");

    const title = t(page.title);
    const documentTitle = t(page.documentTitle);
    const previewAria = t(bi(
        `Предварительный просмотр Zoom-встречи «${page.title.ru}»`,
        `Попередній перегляд Zoom-зустрічі «${page.title.uk}»`
    ));
    const imageAlt = t(bi(
        `Zoom-встреча «${page.title.ru}»`,
        `Zoom-зустріч «${page.title.uk}»`
    ));
    const playAria = t(bi(
        `Смотреть фрагмент Zoom-встречи «${page.title.ru}»`,
        `Дивитися фрагмент Zoom-зустрічі «${page.title.uk}»`
    ));
    const previewText = t(bi(
        `Здесь будет размещено видео-превью Zoom-встречи «${page.title.ru}».`,
        `Тут буде розміщено відеопрев’ю Zoom-зустрічі «${page.title.uk}».`
    ));
    const buyTitle = t(bi(
        `Купить Zoom-встречу «${page.title.ru}»`,
        `Купити Zoom-зустріч «${page.title.uk}»`
    ));

    document.title = documentTitle;
    document.body.insertAdjacentHTML("afterbegin", `
        <div class="page-wrapper content-page webinar-page">
            <header class="header">
                <a href="../index.html#hero" class="logo" aria-label="Ирина Ужеловская">
                    <img src="../images/logotype.svg" alt="Ирина Ужеловская">
                </a>
                <input type="checkbox" id="nav-toggle" class="nav-toggle" style="display:none;">
                <nav class="nav">
                    <a href="../index.html#methodology" class="nav-link">О ТЕБЕ</a>
                    <a href="../methodology.html" class="nav-link">МЕТОДОЛОГИЯ</a>
                    <div class="nav-item has-dropdown">
                        <a href="../programs/" class="nav-link nav-link-dropdown active" aria-haspopup="true">ПРОГРАММЫ</a>
                        <div class="nav-dropdown">
                            <a href="../programs/">Авторские программы</a>
                            <a href="../programs/mentor-28/">Mentor 28</a>
                            <a href="../programs/sell-star/">Продавай как звезда</a>
                            <a href="./index.html">Zoom-встречи</a>
                            <a href="../book/">Книга</a>
                            <a href="../meditations/">Медитации</a>
                        </div>
                    </div>
                    <a href="../index.html#testimonials" class="nav-link">РЕЗУЛЬТАТЫ</a>
                    <a href="../index.html#blog" class="nav-link">БЛОГ</a>
                    <a href="../index.html#about" class="nav-link">ОБО МНЕ</a>
                    <div class="lang-switcher">
                        <button class="lang-btn" data-lang="ru" onclick="i18n.setLanguage('ru')">RU</button>
                        <span class="lang-separator">/</span>
                        <button class="lang-btn" data-lang="uk" onclick="i18n.setLanguage('uk')">UA</button>
                    </div>
                </nav>
                <label for="nav-toggle" class="nav-toggle-label"><span></span></label>
                <label for="nav-toggle" class="nav-overlay" aria-hidden="true"></label>
            </header>

            <main>
                <section class="content-hero content-dark-panel">
                    <nav class="breadcrumb breadcrumb-dark-bg content-breadcrumb" aria-label="Навигация">
                        <a href="../index.html#hero">Главная</a><span>/</span>
                        <a href="./index.html">Zoom-встречи</a><span>/</span><span>${title}</span>
                    </nav>
                    <div class="content-hero-grid">
                        <article class="video-preview" aria-label="${previewAria}">
                            <img src="${page.image}" alt="${imageAlt}">
                            <button class="video-preview-play" type="button" data-webinar-video-open aria-label="${playAria}">
                                <i class="fa-solid fa-play"></i>
                            </button>
                            <div class="video-preview-caption">
                                <span>Предварительный просмотр</span><strong>Скоро</strong>
                            </div>
                        </article>
                        <div class="content-hero-copy">
                            <div class="content-kicker">Zoom-встреча</div>
                            <h1>${page.titleLines.map(line => t(line)).join("<br>")}</h1>
                            <p>${t(page.description)}</p>
                            <div class="content-meta">
                                <span><i class="fa-solid fa-video"></i> Запись Zoom-встречи</span>
                                <span><i class="fa-solid fa-list-check"></i> Практический формат</span>
                            </div>
                            <div class="content-actions">
                                <button class="btn btn-primary" type="button" data-webinar-buy-open>Купить Zoom-встречу</button>
                                <button class="btn btn-secondary" type="button" data-scroll-intro>Подробнее <i class="fa-solid fa-arrow-down-long"></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content-intro">
                    <div class="content-intro-copy">
                        <div class="content-kicker">О Zoom-встрече</div>
                        <h2>${t(page.introTitle)}</h2>
                        ${page.intro.map(paragraph => `<p>${t(paragraph)}</p>`).join("")}
                    </div>
                    <blockquote class="content-quote-card">
                        <span>“</span><p>${t(page.quote)}</p><cite>— Ирина Ужеловская</cite>
                    </blockquote>
                </section>

                <section class="content-timeline content-dark-panel">
                    <div class="content-section-side">
                        <div class="content-kicker">Структура Zoom-встречи</div>
                        <h2>О чем<br>мы поговорим</h2>
                        <button class="btn btn-secondary" type="button" data-webinar-program-open>
                            <i class="fa-solid fa-comment-dots"></i> Задать вопрос
                        </button>
                    </div>
                    <ol class="content-timeline-list">${timelineHtml}</ol>
                </section>

                <section class="content-results">
                    <div class="content-results-head">
                        <div class="content-kicker">Для кого эта Zoom-встреча</div>
                        <h2>Эта Zoom-встреча для вас, если вы</h2>
                    </div>
                    <div class="content-results-grid">${resultsHtml}</div>
                </section>

                <section class="content-related content-dark-panel">
                    <div class="content-related-head">
                        <div><div class="content-kicker">Другие Zoom-встречи</div><h2>Продолжить изучение</h2></div>
                        <div class="content-related-arrows" aria-hidden="true">
                            <button type="button"><i class="fa-solid fa-arrow-left"></i></button>
                            <button type="button"><i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="content-webinar-shelf">
                        ${relatedCard("youth-code.html", "../images/IMG_7516.PNG", "Код молодости", "58:24", "1 820 участников")}
                        ${relatedCard("self-esteem.html", "../images/IMG_7505.PNG", "Самооценка и вера в себя", "1:05:18", "2 310 участников")}
                        ${relatedCard("relationship-code.html", "../images/IMG_7506.PNG", "Код отношений", "47:36", "1 950 участников")}
                        ${relatedCard("choosing-oneself.html", "../images/IMG_7507.PNG", "Выбор себя", "1:03:42", "1 760 участников")}
                    </div>
                </section>
            </main>

            ${footerHtml()}
        </div>

        ${modalHtml("webinarVideoModal", "data-webinar-video-close", "ПРЕВЬЮ ZOOM-ВСТРЕЧИ",
            "Видео-превью Zoom-встречи", previewText,
            '<button class="btn btn-primary" type="button" data-webinar-video-close>Понятно</button>')}
        ${formModalHtml(page.slug, "webinarProgramModal", "data-webinar-program-close",
            "О ZOOM-ВСТРЕЧЕ", "Уточнить детали Zoom-встречи",
            "Если у вас остались вопросы о формате Zoom-встречи, оставьте email — команда свяжется с вами и уточнит детали.", false)}
        ${formModalHtml(page.slug, "webinarBuyModal", "data-webinar-buy-close",
            "ОФОРМЛЕНИЕ ЗАКАЗА", buyTitle,
            "Оставьте ваши контакты, чтобы получить доступ к Zoom-встрече.", true)}
    `);

    if (window.translations && window.translations.uk) {
        Object.assign(window.translations.uk, localTranslations);
    }

    initInteractions();

    function relatedCard(href, image, cardTitle, duration, participants) {
        return `
            <article class="webinar-card">
                <a href="./${href}" aria-label="${cardTitle}">
                    <img src="${image}" alt="${cardTitle}">
                    <span class="webinar-card-duration">${duration}</span>
                    <span class="webinar-card-title">${cardTitle}</span>
                </a>
                <div class="webinar-card-meta-row" style="display:flex;justify-content:space-between;align-items:center;width:100%;">
                    <span><i class="fa-solid fa-user-group"></i> ${participants}</span>
                    <a href="./${href}" class="webinar-card-more-link" style="color:var(--color-accent-ui);font-size:11px;font-weight:800;text-transform:uppercase;text-decoration:none;">Подробнее <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </article>
        `;
    }

    function footerHtml() {
        return `
            <footer class="content-footer-v2">
                <div class="content-footer-brand">
                    <img src="../images/logotype.svg" alt="Ирина Ужеловская">
                    <p>психолог · ментор · автор психотехнологий формирования событий</p>
                    <div class="content-footer-socials">
                        <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://t.me" target="_blank" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
                        <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                <nav class="content-footer-column" aria-label="Навигация">
                    <h3>Навигация</h3>
                    <a href="../index.html#hero">Главная</a><a href="../methodology.html">Методология</a>
                    <a href="../programs/">Программы</a><a href="./index.html">Zoom-встречи</a>
                    <a href="../book/">Книга</a><a href="../meditations/">Медитации</a>
                    <a href="../index.html#blog">Материалы</a><a href="../index.html#blog">Блог</a>
                    <a href="../index.html#about">Обо мне</a>
                </nav>
                <nav class="content-footer-column" aria-label="Программы">
                    <h3>Программы</h3>
                    <a href="../programs/mentor-28/">Mentor 28</a>
                    <a href="../programs/sell-star/">Продавай как звезда</a>
                    <a href="../index.html#courses">Библиотека знаний</a>
                    <a href="../index.html#about-club">LUX CLUB</a>
                </nav>
                <div class="content-footer-column">
                    <h3>Контакты</h3>
                    <span>Instagram</span><a href="https://instagram.com/irina_uzhelovskaya" target="_blank">@irina_uzhelovskaya</a>
                    <span>Telegram</span><a href="https://t.me/irina_uzhelovskaya" target="_blank">@irina_uzhelovskaya</a>
                    <span>Email</span><a href="mailto:hello@irina-uzhelovskaya.com">hello@irina-uzhelovskaya.com</a>
                </div>
                <div class="content-footer-bottom">
                    <span>© 2026 Ирина Ужеловская. Все права защищены</span>
                    <div><a href="#">Политика конфиденциальности</a><a href="#">Пользовательское соглашение</a></div>
                </div>
            </footer>
        `;
    }

    function modalHtml(id, closeAttr, kicker, heading, text, actions) {
        return `
            <div class="video-modal" id="${id}" aria-hidden="true">
                <div class="video-modal-backdrop" ${closeAttr}></div>
                <div class="video-modal-card" role="dialog" aria-modal="true" aria-labelledby="${id}Title">
                    <button class="video-modal-close" type="button" ${closeAttr} aria-label="Закрыть окно"><i class="fa-solid fa-xmark"></i></button>
                    <div class="video-modal-kicker">${kicker}</div>
                    <h3 id="${id}Title">${heading}</h3>
                    <p>${text}</p>
                    <div class="video-modal-actions">${actions}</div>
                </div>
            </div>
        `;
    }

    function formModalHtml(slug, id, closeAttr, kicker, heading, text, isBuy) {
        const fields = isBuy ? `
            ${inputField(`${slug}-buy-name`, "text", "Имя", "Ваше имя")}
            ${inputField(`${slug}-buy-email`, "email", "Email", "Ваш email")}
            ${inputField(`${slug}-buy-telegram`, "text", "Telegram / Телефон", "@username или номер телефона")}
        ` : inputField(`${slug}-question-email`, "email", "Ваш Email", "example@email.com");
        return `
            <div class="video-modal" id="${id}" aria-hidden="true">
                <div class="video-modal-backdrop" ${closeAttr}></div>
                <div class="video-modal-card" role="dialog" aria-modal="true" aria-labelledby="${id}Title" style="max-width:480px;">
                    <button class="video-modal-close" type="button" ${closeAttr} aria-label="Закрыть окно"><i class="fa-solid fa-xmark"></i></button>
                    <div class="video-modal-kicker">${kicker}</div>
                    <h3 id="${id}Title" style="margin-bottom:8px;">${heading}</h3>
                    <p style="margin-bottom:20px;">${text}</p>
                    <form class="contact-form" action="#" method="POST" data-demo-form>
                        ${fields}
                        <button type="submit" class="btn-submit" style="width:100%;padding:14px;background:var(--color-accent-ui);color:#fff;border:0;border-radius:8px;font-weight:600;cursor:pointer;">
                            ${isBuy ? "ОТПРАВИТЬ ЗАЯВКУ" : "ОТПРАВИТЬ ЗАПРОС"}
                        </button>
                    </form>
                </div>
            </div>
        `;
    }

    function inputField(id, type, label, placeholder) {
        return `
            <div class="form-group" style="margin-bottom:12px;text-align:left;">
                <label for="${id}" style="display:block;margin-bottom:6px;font-size:12px;font-weight:600;">${label}</label>
                <input type="${type}" id="${id}" required placeholder="${placeholder}" style="width:100%;padding:12px;border:1px solid rgba(0,0,0,.1);border-radius:8px;">
            </div>
        `;
    }

    function initInteractions() {
        document.querySelector("[data-scroll-intro]")?.addEventListener("click", () => {
            document.querySelector(".content-intro")?.scrollIntoView({ behavior: "smooth" });
        });

        document.querySelectorAll(".header .nav-link-dropdown").forEach(link => {
            link.addEventListener("click", event => {
                event.preventDefault();
                link.closest(".nav-item")?.classList.toggle("is-open");
            });
        });
        document.addEventListener("click", event => {
            if (!event.target.closest(".header .nav-item")) {
                document.querySelectorAll(".header .nav-item.is-open").forEach(item => item.classList.remove("is-open"));
            }
        });

        const setupModal = (modalId, openAttr, closeAttr) => {
            const modal = document.getElementById(modalId);
            if (!modal) return;
            const openModal = () => {
                modal.classList.add("is-open");
                modal.setAttribute("aria-hidden", "false");
                document.body.style.overflow = "hidden";
            };
            const closeModal = () => {
                modal.classList.remove("is-open");
                modal.setAttribute("aria-hidden", "true");
                document.body.style.overflow = "";
            };
            document.querySelectorAll(`[${openAttr}]`).forEach(button => button.addEventListener("click", openModal));
            modal.querySelectorAll(`[${closeAttr}]`).forEach(button => button.addEventListener("click", closeModal));
            document.addEventListener("keydown", event => {
                if (event.key === "Escape" && modal.classList.contains("is-open")) closeModal();
            });
        };

        setupModal("webinarVideoModal", "data-webinar-video-open", "data-webinar-video-close");
        setupModal("webinarProgramModal", "data-webinar-program-open", "data-webinar-program-close");
        setupModal("webinarBuyModal", "data-webinar-buy-open", "data-webinar-buy-close");

        document.querySelectorAll("[data-demo-form]").forEach(form => {
            form.addEventListener("submit", event => {
                event.preventDefault();
                form.closest(".video-modal")?.classList.remove("is-open");
                document.body.style.overflow = "";
            });
        });
    }
})();
