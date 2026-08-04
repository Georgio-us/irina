/**
 * Emotional Intelligence Quiz System (Hero V2 Theme)
 * Modular design: Questionnaire -> 16 Questions -> Psychological Profile Result
 */

(function () {
    'use strict';

    // 16 Quiz Questions with 3 options mapped to profile types:
    // A: rational, B: empathetic, C: perfectionist / balance
    const quizQuestions = [
        {
            id: 1,
            question: "Как вы обычно реагируете на неожиданные трудности или форс-мажоры?",
            options: [
                { text: "Спокойно анализирую ситуацию и ищу рациональный план действий.", profile: "rational" },
                { text: "Эмоционально включаюсь, но стараюсь сразу поддержать себя и окружающих.", profile: "empathetic" },
                { text: "Стремлюсь всё сразу исправить идеально, испытывая сильное внутреннее напряжение.", profile: "perfectionist" }
            ]
        },
        {
            id: 2,
            question: "Что происходит, когда вы сталкиваетесь с критикой в свой адрес?",
            options: [
                { text: "Разбираю аргументы по фактам, отделяя эмоции от сути.", profile: "rational" },
                { text: "Прислушиваюсь к чувствам собеседника и ищу конструктивный компромисс.", profile: "empathetic" },
                { text: "Болезненно переживаю и долго анализирую, где я допустил(а) ошибку.", profile: "perfectionist" }
            ]
        },
        {
            id: 3,
            question: "Как вы восстанавливаете энергию после тяжелого дня?",
            options: [
                { text: "Структурирую мысли, читаю или занимаюсь тихим планированием.", profile: "rational" },
                { text: "Общаюсь с близкими людьми или выражаю эмоции через медитацию и творчество.", profile: "empathetic" },
                { text: "Анализирую итоги дня и пытаюсь завершить все невыполненные задачи.", profile: "perfectionist" }
            ]
        },
        {
            id: 4,
            question: "Насколько легко вам отпустить ситуацию, которую вы не можете контролировать?",
            options: [
                { text: "Сравнительно легко, если понимаю объективную бессмысленность контроля.", profile: "rational" },
                { text: "Быстро переключаюсь на поддержку близких и принятие своих чувств.", profile: "empathetic" },
                { text: "Крайне сложно, неконтролируемые вещи вызывают сильный тревожный фон.", profile: "balance" }
            ]
        },
        {
            id: 5,
            question: "Как вы принимаете ключевые решения в жизни и работе?",
            options: [
                { text: "Опираюсь на логический расчёт, данные и взвешивание рисков.", profile: "rational" },
                { text: "Слушаю интуицию, внутреннее состояние и ценности людей рядом.", profile: "empathetic" },
                { text: "Долго взвешиваю все «за» и «против», стремясь к идеальному выбору.", profile: "perfectionist" }
            ]
        },
        {
            id: 6,
            question: "Что для вас наиболее важно при коммуникации в команде или семье?",
            options: [
                { text: "Чёткость договоренностей и понятные правила взаимодействия.", profile: "rational" },
                { text: "Искренность, эмпатия и взаимное эмоциональное доверие.", profile: "empathetic" },
                { text: "Безупречный результат и выполнение стандартов всеми участниками.", profile: "perfectionist" }
            ]
        },
        {
            id: 7,
            question: "Как вы проявляете эмоции в момент сильного стресса?",
            options: [
                { text: "Сдерживаю проявления и ухожу в холодную логику.", profile: "rational" },
                { text: "Открыто проживаю чувства, но стараюсь не нанести вред окружающим.", profile: "empathetic" },
                { text: "Направляю эмоциональную энергию на немедленное исправление дефектов.", profile: "perfectionist" }
            ]
        },
        {
            id: 8,
            question: "Какое чувство чаще всего сопровождает вас при выходе на новый уровень развития?",
            options: [
                { text: "Познавательный интерес и желание изучить новую структуру.", profile: "rational" },
                { text: "Вдохновение и желание разделить успех с окружением.", profile: "empathetic" },
                { text: "Опасение не соответствовать собственным высоким стандартам.", profile: "balance" }
            ]
        },
        {
            id: 9,
            question: "Как вы относитесь к собственным ошибкам и промахам?",
            options: [
                { text: "Воспринимаю их как ценные данные для корректировки гипотезы.", profile: "rational" },
                { text: "Отношусь с самосостраданием и извлекаю уроки для личностного роста.", profile: "empathetic" },
                { text: "Корю себя за неидеальность и долго переживаю неудачу.", profile: "perfectionist" }
            ]
        },
        {
            id: 10,
            question: "Как вы понимаете эмоциональное состояние других людей?",
            options: [
                { text: "Считываю вербальные маркеры и аргументацию.", profile: "rational" },
                { text: "Мгновенно чувствую настроение человека на интуитивном уровне.", profile: "empathetic" },
                { text: "Оцениваю действия человека и их соответствие ожиданиям.", profile: "perfectionist" }
            ]
        },
        {
            id: 11,
            question: "Что вы делаете, когда ощущаете эмоциональное выгорание?",
            options: [
                { text: "Систематизирую график и убираю лишние активности.", profile: "rational" },
                { text: "Занимаюсь телесными практиками и возвращаю ресурс через состояние.", profile: "empathetic" },
                { text: "Пытаюсь работать ещё усерднее, чтобы преодолеть спад.", profile: "balance" }
            ]
        },
        {
            id: 12,
            question: "Насколько для вас важна оценка вашей работы со стороны?",
            options: [
                { text: "Опираюсь преимущественно на собственную объективную метрику.", profile: "rational" },
                { text: "Важен эмоциональный отклик и признание ценности моей помощи.", profile: "empathetic" },
                { text: "Высоко ценю признание, но внутренняя планка всегда выше внешней.", profile: "perfectionist" }
            ]
        },
        {
            id: 13,
            question: "Как вы ставите перед собой долгосрочные цели?",
            options: [
                { text: "Разбиваю на чёткие последовательные этапы и дедлайны.", profile: "rational" },
                { text: "Формулирую видение через желанное внутреннее состояние и смысл.", profile: "empathetic" },
                { text: "Фиксирую максимальные ориентиры, недопускающие компромиссов.", profile: "perfectionist" }
            ]
        },
        {
            id: 14,
            question: "Что происходит, когда вы сталкиваетесь с неопределенностью?",
            options: [
                { text: "Собираю максимум информации для снижения неопределенности.", profile: "rational" },
                { text: "Доверяюсь жизненному потоку и настраиваю внутреннюю гармонию.", profile: "empathetic" },
                { text: "Испытываю сильный дискомфорт и пытаюсь ускорить прояснение.", profile: "balance" }
            ]
        },
        {
            id: 15,
            question: "Как вы решаете возникшие конфликты?",
            options: [
                { text: "Ищу рациональный компромисс на основе выгоды обеих сторон.", profile: "rational" },
                { text: "Стремлюсь понять истинные переживания человека и залечить обиду.", profile: "empathetic" },
                { text: "Жёстко отстаиваю правила справедливости и правильный порядок.", profile: "perfectionist" }
            ]
        },
        {
            id: 16,
            question: "Что для вас является наивысшим показателем успеха?",
            options: [
                { text: "Понимание законов жизни и эффективное решение сложных задач.", profile: "rational" },
                { text: "Глубокий контакт с собой, гармония в отношениях и счастье близких.", profile: "empathetic" },
                { text: "Безупречная реализация своего потенциала и высоких стандартов.", profile: "perfectionist" }
            ]
        }
    ];

    // 4 Psychological Profiles definitions
    const profileDefinitions = {
        rational: {
            title: "Рациональный исследователь",
            badge: "ПСИХОЛОГИЧЕСКИЙ ПРОФИЛЬ",
            description: "Вы обладаете сильным аналитическим умом, способностью системно мыслить и сохранять хладнокровие даже в нестандартных ситуациях. Ваша главная точка роста — научиться соединять логику с глубоким контактом с телом и эмоциями для раскрытия максимального потенциала.",
            programs: [
                {
                    title: "Mentor 28",
                    category: "АВТОРСКИЕ ПРОГРАММЫ",
                    desc: "Системная трансформация мышления и эмоционального интеллекта.",
                    link: "programs/mentor-28/"
                },
                {
                    title: "Научная методология",
                    category: "НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ",
                    desc: "Исследования нейропластичности и когнитивных технологий.",
                    link: "methodology.html"
                }
            ]
        },
        empathetic: {
            title: "Эмпатичный лидер",
            badge: "ПСИХОЛОГИЧЕСКИЙ ПРОФИЛЬ",
            description: "Вы тонко чувствуете людей, обладаете развитой интуицией и умеете искренне вдохновлять окружение. Ваша ключевая задача — научиться сохранять личные границы, не выгорать эмоционально и удерживать устойчивость внутреннего состояния при масштабных целях.",
            programs: [
                {
                    title: "Сила внутреннего состояния",
                    category: "ZOOM-ВСТРЕЧИ",
                    desc: "Управление эмоциональным состоянием и энергией.",
                    link: "webinars/inner-state.html"
                },
                {
                    title: "Продавай как звезда",
                    category: "ПРОГРАММА ПРОДАЖ",
                    desc: "Продажи через состояние, самоценность и личный бренд.",
                    link: "programs/star/"
                }
            ]
        },
        perfectionist: {
            title: "Перфекционист",
            badge: "ПСИХОЛОГИЧЕСКИЙ ПРОФИЛЬ",
            description: "Вы стремитесь к безупречности и задаёте высочайшие стандарты во всём. Однако гиперконтроль и внутренний критик часто приводят к переутомлению. Ваша главная трансформация — отпустить контроль, обрести лёгкость и доверие к себе.",
            programs: [
                {
                    title: "Mentor 28",
                    category: "АВТОРСКИЕ ПРОГРАММЫ",
                    desc: "Глубокая перезагрузка и освобождение от выгорания.",
                    link: "programs/mentor-28/"
                },
                {
                    title: "Возвращение к себе",
                    category: "МЕДИТАЦИИ",
                    desc: "Медитативные практики глубокого расслабления и сонастройки.",
                    link: "meditations/return-to-self.html"
                }
            ]
        },
        balance: {
            title: "В поиске баланса",
            badge: "ПСИХОЛОГИЧЕСКИЙ ПРОФИЛЬ",
            description: "Вы находитесь на важном этапе переосмысления жизненных ориентиров и поиска гармонии между внутренним миром и внешними достижениями. Это идеальный момент для регулярных практик и освоения методик работы с мышлением.",
            programs: [
                {
                    title: "Книга «У мене все вийде»",
                    category: "КНИГА + 28 ДНЕЙ",
                    desc: "Книга-бестселлер и 28 дней сопровождения Ирины.",
                    link: "book/"
                },
                {
                    title: "Сила внутреннего состояния",
                    category: "ZOOM-ВСТРЕЧИ",
                    desc: "Практическая работа с эмоциональным ресурсом.",
                    link: "webinars/inner-state.html"
                }
            ]
        }
    };

    // Quiz State
    let quizState = {
        currentStep: 'questionnaire', // 'questionnaire' | 'quiz' | 'result'
        currentQuestionIndex: 0,
        userData: {
            gender: '',
            age: '',
            occupation: '',
            hasChildren: ''
        },
        answers: {} // questionIndex -> profile
    };

    // DOM Elements Cache
    let modalEl, overlayEl, closeBtn;

    function initQuiz() {
        modalEl = document.getElementById('eq-test-modal');
        if (!modalEl) return;

        overlayEl = modalEl.querySelector('.eq-modal-overlay');
        closeBtn = modalEl.querySelector('.eq-modal-close');

        // Event listeners for triggers
        document.addEventListener('click', function (e) {
            const trigger = e.target.closest('[data-eq-modal-open]') || e.target.closest('.eq-test-btn');
            if (trigger) {
                e.preventDefault();
                openModal();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (overlayEl) {
            overlayEl.addEventListener('click', function (e) {
                if (e.target === overlayEl) {
                    closeModal();
                }
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && isModalOpen()) {
                closeModal();
            }
        });

        bindQuestionnaireEvents();
        bindQuizEvents();
    }

    function isModalOpen() {
        return modalEl && modalEl.classList.contains('is-active');
    }

    function openModal() {
        if (!modalEl) return;
        resetQuizState();
        modalEl.classList.add('is-active');
        document.body.style.overflow = 'hidden';
        renderStep('questionnaire');
    }

    function closeModal() {
        if (!modalEl) return;
        modalEl.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    function resetQuizState() {
        quizState = {
            currentStep: 'questionnaire',
            currentQuestionIndex: 0,
            userData: {
                gender: 'Женский',
                age: '25-35',
                occupation: 'Эксперт / Специалист',
                hasChildren: 'Нет',
                country: 'Украина'
            },
            answers: {}
        };
    }

    // Step Rendering
    function renderStep(step) {
        quizState.currentStep = step;

        const screenQuestionnaire = document.getElementById('eq-screen-questionnaire');
        const screenQuiz = document.getElementById('eq-screen-quiz');
        const screenResult = document.getElementById('eq-screen-result');

        if (screenQuestionnaire) screenQuestionnaire.style.display = step === 'questionnaire' ? 'block' : 'none';
        if (screenQuiz) screenQuiz.style.display = step === 'quiz' ? 'block' : 'none';
        if (screenResult) screenResult.style.display = step === 'result' ? 'block' : 'none';

        // Update Step Pills Indicator
        const pillQuestionnaire = document.getElementById('eq-pill-questionnaire');
        const pillQuiz = document.getElementById('eq-pill-quiz');
        const pillResult = document.getElementById('eq-pill-result');

        if (pillQuestionnaire) pillQuestionnaire.className = step === 'questionnaire' ? 'eq-pill is-active' : 'eq-pill is-done';
        if (pillQuiz) pillQuiz.className = step === 'quiz' ? 'eq-pill is-active' : (step === 'result' ? 'eq-pill is-done' : 'eq-pill');
        if (pillResult) pillResult.className = step === 'result' ? 'eq-pill is-active' : 'eq-pill';

        if (step === 'quiz') {
            renderQuestion(quizState.currentQuestionIndex);
        } else if (step === 'result') {
            renderResult();
        }
    }

    // Questionnaire Events
    function bindQuestionnaireEvents() {
        const form = document.getElementById('eq-questionnaire-form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const genderEl = form.querySelector('[name="eq_gender"]:checked');
            const ageEl = form.querySelector('[name="eq_age"]');
            const occupationEl = form.querySelector('[name="eq_occupation"]');
            const childrenEl = form.querySelector('[name="eq_children"]:checked');

            quizState.userData.gender = genderEl ? genderEl.value : 'Женский';
            quizState.userData.age = ageEl ? ageEl.value : '25-35';
            quizState.userData.occupation = occupationEl ? occupationEl.value : 'Эксперт';
            quizState.userData.hasChildren = childrenEl ? childrenEl.value : 'Нет';

            renderStep('quiz');
        });
    }

    // Question Rendering
    function renderQuestion(index) {
        const questionObj = quizQuestions[index];
        if (!questionObj) return;

        const progressText = document.getElementById('eq-progress-text');
        const progressBarFill = document.getElementById('eq-progress-bar-fill');
        const questionTitle = document.getElementById('eq-question-title');
        const optionsContainer = document.getElementById('eq-options-container');
        const btnPrev = document.getElementById('eq-btn-prev');
        const btnNext = document.getElementById('eq-btn-next');

        if (progressText) progressText.textContent = `ВОПРОС ${index + 1} ИЗ ${quizQuestions.length}`;

        const progressPct = ((index + 1) / quizQuestions.length) * 100;
        if (progressBarFill) progressBarFill.style.width = `${progressPct}%`;

        if (questionTitle) questionTitle.textContent = questionObj.question;

        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            questionObj.options.forEach((opt, optIdx) => {
                const optCard = document.createElement('div');
                optCard.className = 'eq-option-card';
                if (quizState.answers[index] === opt.profile) {
                    optCard.classList.add('is-selected');
                }

                optCard.innerHTML = `
                    <div class="option-radio-circle"></div>
                    <span class="option-text">${opt.text}</span>
                `;

                optCard.addEventListener('click', function () {
                    optionsContainer.querySelectorAll('.eq-option-card').forEach(c => c.classList.remove('is-selected'));
                    optCard.classList.add('is-selected');
                    quizState.answers[index] = opt.profile;
                    if (btnNext) btnNext.disabled = false;
                });

                optionsContainer.appendChild(optCard);
            });
        }

        // Navigation button states
        if (btnPrev) {
            btnPrev.disabled = index === 0;
        }

        if (btnNext) {
            btnNext.disabled = !quizState.answers[index];
            const nextLabel = btnNext.querySelector('.btn-label');
            if (nextLabel) {
                nextLabel.textContent = (index === quizQuestions.length - 1) ? 'Завершить тест' : 'Далее';
            }
        }
    }

    function bindQuizEvents() {
        const btnPrev = document.getElementById('eq-btn-prev');
        const btnNext = document.getElementById('eq-btn-next');

        if (btnPrev) {
            btnPrev.addEventListener('click', function () {
                if (quizState.currentQuestionIndex > 0) {
                    quizState.currentQuestionIndex--;
                    renderQuestion(quizState.currentQuestionIndex);
                }
            });
        }

        if (btnNext) {
            btnNext.addEventListener('click', function () {
                if (!quizState.answers[quizState.currentQuestionIndex]) return;

                if (quizState.currentQuestionIndex < quizQuestions.length - 1) {
                    quizState.currentQuestionIndex++;
                    renderQuestion(quizState.currentQuestionIndex);
                } else {
                    renderStep('result');
                }
            });
        }
    }

    // Result Calculation & Rendering
    function calculateProfile() {
        const counts = {
            rational: 0,
            empathetic: 0,
            perfectionist: 0,
            balance: 0
        };

        Object.values(quizState.answers).forEach(p => {
            if (counts[p] !== undefined) {
                counts[p]++;
            }
        });

        let topProfile = 'rational';
        let maxCount = -1;

        Object.keys(counts).forEach(key => {
            if (counts[key] > maxCount) {
                maxCount = counts[key];
                topProfile = key;
            }
        });

        return profileDefinitions[topProfile] || profileDefinitions.rational;
    }

    function renderResult() {
        const profile = calculateProfile();

        const profileBadge = document.getElementById('eq-result-badge');
        const profileTitle = document.getElementById('eq-result-title');
        const profileDesc = document.getElementById('eq-result-desc');
        const userSummary = document.getElementById('eq-result-user-summary');
        const programsGrid = document.getElementById('eq-result-programs-grid');
        const btnConsult = document.getElementById('eq-btn-consult');
        const btnViewPrograms = document.getElementById('eq-btn-view-programs');
        const btnRetake = document.getElementById('eq-btn-retake');

        if (profileBadge) profileBadge.textContent = profile.badge;
        if (profileTitle) profileTitle.textContent = profile.title;
        if (profileDesc) profileDesc.textContent = profile.description;

        if (userSummary) {
            const ud = quizState.userData;
            userSummary.textContent = `Анкета: ${ud.gender || '—'}, ${ud.age || '—'} лет, ${ud.occupation || '—'}`;
        }

        if (programsGrid) {
            programsGrid.innerHTML = '';
            profile.programs.forEach(prog => {
                const card = document.createElement('div');
                card.className = 'eq-recommended-card';
                card.innerHTML = `
                    <div class="card-meta-tag">${prog.category}</div>
                    <h4 class="card-title">${prog.title}</h4>
                    <p class="card-desc">${prog.desc}</p>
                    <a href="${prog.link}" class="card-action-link">
                        <span>ПОДРОБНЕЕ</span>
                        <i class="fa-solid fa-arrow-right-long"></i>
                    </a>
                `;
                programsGrid.appendChild(card);
            });
        }

        if (btnConsult) {
            btnConsult.onclick = function () {
                closeModal();
                // Trigger consultation Telegram modal or commercial action
                const commerceTrigger = document.querySelector('[data-commerce-modal="telegram"]');
                if (commerceTrigger) {
                    commerceTrigger.click();
                } else {
                    window.location.href = 'https://t.me/ IrinaUghelovskaya';
                }
            };
        }

        if (btnViewPrograms) {
            btnViewPrograms.onclick = function () {
                closeModal();
                const coursesEl = document.getElementById('courses') || document.getElementById('step-selector');
                if (coursesEl) {
                    coursesEl.scrollIntoView({ behavior: 'smooth' });
                }
            };
        }

        if (btnRetake) {
            btnRetake.onclick = function () {
                resetQuizState();
                renderStep('questionnaire');
            };
        }
    }

    // Expose API
    window.openEqTestModal = openModal;
    window.closeEqTestModal = closeModal;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuiz);
    } else {
        initQuiz();
    }
})();
