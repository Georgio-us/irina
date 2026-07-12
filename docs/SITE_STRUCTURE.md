# Site Structure

## Назначение

Этот документ фиксирует рабочую структуру Website v1.0: sitemap, типы шаблонов, статус страниц и порядок реализации.

Последнее обновление: 12 июля 2026.

Статус документа: актуальная карта сайта и шаблонов. Если этот файл конфликтует со старыми execution-документами, ориентироваться на `SITE_STRUCTURE.md`.

Цель — собирать сайт как систему, а не создавать отдельные страницы хаотично. Внутренние страницы должны выглядеть как продолжение существующей дизайн-системы: те же токены, типографика, кнопки, отступы, карточки и общий визуальный язык.

Сайт рассматривается как публичный маркетинговый сайт. Платформенные функции вроде личного кабинета, оплаты, скачивания MP3, избранного и закрытого доступа пока не являются частью Website v1.0.

## Site Entity Tree

Это рабочее дерево сущностей и шаблонов. Его задача — помочь сверять, какие страницы уже попадают в шаблон, какие требуют отдельного шаблона, а какие являются уникальными страницами.

```text
├── Home

├── Product Template
│   ├── Mentor 28
│   ├── Sell Star
│   └── ...

├── Library Template
│   ├── Webinars
│   ├── Books
│   ├── Meditations
│   └── Programs

├── Detail Template
│   ├── Webinar
│   ├── Book
│   ├── Meditation

└── Knowledge Template
    ├── Methodology
    ├── Science
    ├── Blog
    └── Articles
```

Рабочее разделение:

- `Home` — уникальная главная витрина бренда.
- `Product Template` — продающие страницы конкретных программ.
- `Library Template` — каталоги/витрины материалов и продуктов.
- `Detail Template` — страницы одного просматриваемого/изучаемого материала.
- `Knowledge Template` — экспертные страницы и статьи, где главный сценарий — понять, прочитать, поверить и продолжить изучение.

## Sitemap

```text
/
├── /methodology
├── /programs
│   ├── /programs/mentor-28
│   └── /programs/sell-star
├── /webinars
│   └── /webinars/[slug]
├── /book
├── /meditations
├── /science (deferred)
├── /blog
│   └── /blog/[slug]
├── /about (deferred)
├── /contact
├── /privacy
├── /terms
└── /404 (deferred)
```

## Templates

### 1. Home Template

Используется для:

- `/`

Назначение: главная витрина бренда, быстрый вход в методологию, программы, материалы, результаты и автора.

Статус: есть, финальная desktop/mobile ревизия впереди.

### 2. Page Template

Используется для:

- `/methodology`
- `/book`
- `/science` — deferred, потому что роль научной базы сейчас закрывает `/methodology`.
- `/about` — deferred, потому что блок `Обо мне` остается на главной.
- `/contact`

Назначение: экспертные, информационные и utility-страницы. Они не должны выглядеть как отдельные новые лендинги с нуля.

Примечание: `/book` может со временем стать hybrid product/page template, но для Website v1.0 допустимо вести ее как Page Template с сильным продуктовым блоком.

### 3. Product Template

Используется для:

- `/programs/mentor-28`
- `/programs/sell-star`
- будущих программ

Назначение: продающая страница продукта в стиле premium product page.

Текущий эталон: `/programs/sell-star`.

Примечание: `/programs/sell-star` остается главным эталоном Product Template v2. `/programs/mentor-28` уже подтянут к общему продуктовому подходу, но финальную контентную ревизию стоит делать отдельно.

### 4. Catalog Template

Используется для:

- `/programs`
- `/webinars`
- `/meditations`
- `/blog`

Назначение: страницы-каталоги с карточками, фильтрами или табами и переходами внутрь.

Каталог не должен быть перегруженным лендингом. Его задача — быстро показать структуру материалов и направить пользователя на detail/product page.

### 5. Detail Template

Используется для:

- `/webinars/[slug]`
- `/blog/[slug]`
- в будущем `/science/[slug]`

Назначение: страница одного материала.

Варианты:

- webinar detail — video-first, cinematic content page;
- blog article — text-first, editorial page;
- science detail — evidence-first, экспертная/исследовательская страница.

Текущий эталон для webinar detail: `/webinars/inner-state.html`.

### 6. Legal Template

Используется для:

- `/privacy`
- `/terms`

Назначение: простая текстовая страница с юридическим контентом. Без маркетинговой перегрузки.

## Current Page Status

| URL | Template | Status | Notes |
| --- | --- | --- | --- |
| `/` | Home Template | Ready for final review | Главная собрана, адаптирована и связана с текущими рабочими страницами; нужна финальная desktop/mobile оценка. |
| `/methodology` | Knowledge Template / Methodology | Ready | Новая методология утверждена как официальная `methodology.html`; мобильная волна закрыта. |
| `/programs` | Library Template / Programs | Missing | Нужен каталог авторских программ. |
| `/programs/mentor-28` | Product Template | Ready for final review | Страница существует, мобильный hero упрощен, related-блок заменен на компактный ecosystem-паттерн. |
| `/programs/sell-star` | Product Template v2 | Ready for final review | Текущий эталон reusable product template. |
| `/webinars` | Library Template / Webinars | Ready for final review | Каталог вебинаров создан; список вебинаров сильный, mobile hero упрощен. |
| `/webinars/inner-state.html` | Detail Template / Webinar | Ready | Эталон cinematic content page для одного вебинара. |
| `/webinars/youth-code.html` | Detail Template / Webinar | Ready | Страница вебинара на общем webinar detail шаблоне. |
| `/webinars/self-esteem.html` | Detail Template / Webinar | Ready | Страница вебинара на общем webinar detail шаблоне. |
| `/webinars/relationship-code.html` | Detail Template / Webinar | Ready | Страница вебинара на общем webinar detail шаблоне. |
| `/webinars/choosing-oneself.html` | Detail Template / Webinar | Ready | Страница вебинара на общем webinar detail шаблоне. |
| `/book` | Page Template | Missing | Нужна отдельная страница книги. |
| `/meditations` | Catalog Template | Missing | Нужна страница медитаций. |
| `/science` | Knowledge Template / Science | Deferred | Пока не создаем: роль научной базы закрывает `/methodology`; отдельные научные темы могут стать статьями блога. |
| `/blog` | Catalog Template | Ready for final review | Каталог материалов создан: 7 материалов, фильтры блога и научной базы. |
| `/blog/[slug]` | Knowledge Template / Article | Ready for final review | Созданы 7 статей на общем Knowledge Article шаблоне; нужны ручной QA, финальная типографика и реальные ссылки на источники. |
| `/about` | Page Template | Deferred | Пока не создаем: блок `Обо мне` остается на главной. |
| `/contact` | Page Template / Utility | Missing | Нужна страница контактов и запроса. |
| `/privacy` | Legal Template | Deferred | Не входит в текущую предполировочную волну. |
| `/terms` | Legal Template | Deferred | Не входит в текущую предполировочную волну. |
| `/404` | Utility Template | Deferred | Вернуться ближе к финальной полировке. |

## Implementation Order

### Уже закрыто

1. `SITE_STRUCTURE.md` создан.
2. `/methodology` пересобрана и утверждена как рабочая версия.
3. `/programs/mentor-28` создана.
4. `/programs/sell-star` создана и используется как Product Template v2.
5. `/webinars` создан.
6. `/webinars/[slug]` создан на пяти страницах.
7. `/blog` создан как каталог материалов.
8. Созданы 7 статей на Knowledge Article шаблоне, включая 3 материала научной базы.

### Следующий порядок

1. Ручной desktop/mobile QA текущей сборки.
2. Недостающие страницы: `/programs`, `/book`, `/meditations`, `/contact` или единый contact flow.
3. Backend-логика для форм, заявок и других подтвержденных сценариев.
4. Пользовательские сценарии, CTA/modal flows и предфинальные правки по итогам QA.
5. Финальный аудит ссылок, SEO и launch QA после появления всех активных целевых страниц.
6. Deferred: `/science`, `/about`, `/privacy`, `/terms`, `/404`.

## Main Page Link Audit

После создания оставшихся базовых страниц нужно пройти главную и заменить временные якоря или заглушки на реальные URL.

Целевые направления:

| UI / CTA | Target | Status |
| --- | --- | --- |
| `Методология` | `/methodology` | Ready |
| `Изучить методологию` | `/methodology` | Ready |
| `Мои программы` | `/programs` | Missing target |
| `Все программы` | `/programs` | Missing target |
| `Mentor 28` | `/programs/mentor-28` | Ready |
| `Продавай как звезда` | `/programs/sell-star` | Ready |
| `Смотреть вебинар` | `/webinars/inner-state.html` или соответствующий slug | Ready |
| `Смотреть все вебинары` | `/webinars` | Ready |
| `Книга` | `/book` | Missing target |
| `Читать фрагмент` | `/book` или `/contact?topic=book` | Missing target |
| `Купить книгу` | `/book` или внешний магазин, когда будет готово | Missing target |
| `Медитации` | `/meditations` | Missing target |
| `Все медитации` | `/meditations` | Missing target |
| `Научная база` | `/methodology` или статьи `/blog/[slug]` | Deferred standalone page |
| `Блог` | `/blog` | Ready |
| `Смотреть все материалы` | `/blog` | Ready |
| `Обо мне` | якорь на блок главной или будущий `/about` | Deferred standalone page |
| `Обсудить запрос` | `/contact` или modal/contact flow | Missing target / needs decision |
| `Отправить сообщение` | `/contact`, modal/contact flow или форма на текущей странице | Needs decision |

## Design Rules

- Не создавать уникальный дизайн для каждой страницы.
- Не дублировать главную страницу внутри внутренних страниц.
- Использовать существующие CSS tokens, цвета, типографику, кнопки, отступы и карточки.
- Новые классы называть универсально, по роли шаблона: `product-*`, `content-*`, `catalog-*`, `page-*`, `article-*`.
- Product pages должны продавать продукт.
- Content detail pages должны раскрывать один материал.
- Catalog pages должны помогать выбрать и перейти глубже.
- Page templates должны объяснять, усиливать доверие или решать utility-задачу.

## Deferred Platform Features

Эти действия не реализуются как настоящая платформа в Website v1.0:

- скачать MP3;
- добавить в избранное;
- личный кабинет;
- оплата внутри сайта;
- закрытый доступ к материалам;
- прогресс прохождения;
- админпанель материалов.

Если такие CTA нужны визуально, они должны вести на `/contact`, внешний сервис или быть явно переименованы в действие уровня сайта.
