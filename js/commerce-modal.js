(function () {
    const TELEGRAM_URL = 'https://t.me/Irin212121';

    const copy = {
        ru: {
            telegram: {
                kicker: 'ЛИЧНЫЕ СООБЩЕНИЯ',
                title: 'Связаться с Ириной',
                text: 'Откроем личный чат в Telegram, чтобы обсудить ваш запрос и формат участия.',
                action: 'Открыть Telegram'
            },
            meditation: {
                kicker: 'БЕСПЛАТНАЯ МЕДИТАЦИЯ',
                title: 'Получить медитацию',
                text: 'Перейдите в Telegram Ирины, чтобы бесплатно получить выбранную медитацию.',
                action: 'Получить в Telegram'
            },
            stripe: {
                kicker: 'ОНЛАЙН-ОПЛАТА',
                title: 'Оплата через Stripe',
                text: 'Скоро здесь откроется безопасная оплата через Stripe. Этот сценарий уже подготовлен для подключения.',
                action: 'Stripe подключается'
            },
            close: 'Закрыть окно'
        },
        uk: {
            telegram: {
                kicker: 'ОСОБИСТІ ПОВІДОМЛЕННЯ',
                title: "Зв'язатися з Іриною",
                text: 'Відкриємо особистий чат у Telegram, щоб обговорити ваш запит і формат участі.',
                action: 'Відкрити Telegram'
            },
            meditation: {
                kicker: 'БЕЗКОШТОВНА МЕДИТАЦІЯ',
                title: 'Отримати медитацію',
                text: 'Перейдіть у Telegram Ірини, щоб безкоштовно отримати обрану медитацію.',
                action: 'Отримати в Telegram'
            },
            stripe: {
                kicker: 'ОНЛАЙН-ОПЛАТА',
                title: 'Оплата через Stripe',
                text: 'Незабаром тут відкриється безпечна оплата через Stripe. Цей сценарій уже підготовлений до підключення.',
                action: 'Stripe підключається'
            },
            close: 'Закрити вікно'
        }
    };

    const language = () => document.documentElement.lang === 'uk' ? 'uk' : 'ru';

    const modal = document.createElement('div');
    modal.className = 'video-modal commerce-modal';
    modal.id = 'commerceModal';
    modal.setAttribute('aria-hidden', 'true');
    modal.innerHTML = [
        '<div class="video-modal-backdrop" data-commerce-close></div>',
        '<div class="video-modal-card" role="dialog" aria-modal="true" aria-labelledby="commerceModalTitle" style="max-width: 480px;">',
        '  <button class="video-modal-close" type="button" data-commerce-close><i class="fa-solid fa-xmark"></i></button>',
        '  <div class="video-modal-kicker" data-commerce-kicker></div>',
        '  <h3 id="commerceModalTitle" style="margin-bottom: 8px;" data-commerce-title></h3>',
        '  <p style="margin-bottom: 20px;" data-commerce-text></p>',
        '  <a class="btn btn-primary" target="_blank" rel="noopener" data-commerce-telegram style="display: inline-block; text-align: center;"></a>',
        '  <button class="btn btn-secondary" type="button" disabled data-commerce-stripe></button>',
        '</div>'
    ].join('');

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll([
            '#bookingMentorModal',
            '#bookingSellStarModal',
            '#webinarBuyModal',
            '#meditationBuyModal',
            '#bookBuyModal'
        ].join(',')).forEach(legacyModal => legacyModal.remove());

        document.body.appendChild(modal);

        const legacySelectors = {
            telegram: '[data-booking-mentor-open], [data-booking-star-open]',
            meditation: '[data-meditation-buy-open]',
            stripe: '[data-webinar-buy-open], [data-book-buy-open]'
        };

        Object.entries(legacySelectors).forEach(([type, selector]) => {
            document.querySelectorAll(selector).forEach(trigger => {
                trigger.dataset.commerceModal = type;
            });
        });

        const closeButton = modal.querySelector('.video-modal-close');
        const telegramButton = modal.querySelector('[data-commerce-telegram]');
        const stripeButton = modal.querySelector('[data-commerce-stripe]');
        let lastTrigger = null;

        const close = () => {
            modal.classList.remove('is-open');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            lastTrigger?.focus();
        };

        const open = (type, trigger) => {
            const locale = copy[language()];
            const content = locale[type];
            if (!content) return;

            lastTrigger = trigger;
            modal.querySelector('[data-commerce-kicker]').textContent = content.kicker;
            modal.querySelector('[data-commerce-title]').textContent = content.title;
            modal.querySelector('[data-commerce-text]').textContent = content.text;
            closeButton.setAttribute('aria-label', locale.close);

            const isTelegram = type === 'telegram' || type === 'meditation';
            telegramButton.hidden = !isTelegram;
            stripeButton.hidden = isTelegram;

            if (isTelegram) {
                telegramButton.href = trigger.dataset.telegramUrl || TELEGRAM_URL;
                telegramButton.textContent = content.action;
            } else {
                stripeButton.textContent = content.action;
            }

            modal.classList.add('is-open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            closeButton.focus();
        };

        document.addEventListener('click', event => {
            const trigger = event.target.closest('[data-commerce-modal]');
            if (trigger) {
                event.preventDefault();
                event.stopImmediatePropagation();
                open(trigger.dataset.commerceModal, trigger);
            }
            if (event.target.closest('[data-commerce-close]')) close();
        }, true);

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && modal.classList.contains('is-open')) close();
        });
    });
})();
