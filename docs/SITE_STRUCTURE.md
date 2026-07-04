# Site Structure

## Назначение

Этот документ фиксирует рабочую структуру Website v1.0: sitemap, типы шаблонов, статус страниц и порядок реализации.

Цель — собирать сайт как систему, а не создавать отдельные страницы хаотично. Внутренние страницы должны выглядеть как продолжение существующей дизайн-системы: те же токены, типографика, кнопки, отступы, карточки и общий визуальный язык.

Сайт рассматривается как публичный маркетинговый сайт. Платформенные функции вроде личного кабинета, оплаты, скачивания MP3, избранного и закрытого доступа пока не являются частью Website v1.0.

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
├── /science
├── /blog
│   └── /blog/[slug]
├── /about
├── /contact
├── /privacy
├── /terms
└── /404
```

## Templates

### 1. Home Template

Используется для:

- `/`

Назначение: главная витрина бренда, быстрый вход в методологию, программы, материалы, результаты и автора.

Статус: есть, точечно дорабатывается.

### 2. Page Template

Используется для:

- `/methodology`
- `/book`
- `/science`
- `/about`
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

Примечание: `/programs/mentor-28` существует, но сейчас воспринимается как Product Template v1. Для дальнейшей унификации ориентироваться на подход Product Template v2 из `/programs/sell-star`.

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
| `/` | Home Template | In progress | Основная главная сверстана и адаптирована, продолжаются точечные правки и линковка. |
| `/methodology` | Page Template | Draft | Рабочая версия есть, но адаптив и визуальная зрелость требуют отдельной доработки. |
| `/programs` | Catalog Template | Missing | Следует создать после фиксации документации и `/webinars`. |
| `/programs/mentor-28` | Product Template v1 | Draft | Есть отдельная страница, но не основной эталон шаблона. |
| `/programs/sell-star` | Product Template v2 | Ready for iteration | Основной кандидат на reusable product template. |
| `/webinars` | Catalog Template | Missing | Следующий приоритет реализации. |
| `/webinars/inner-state.html` | Detail Template / Webinar | Ready for iteration | Текущий эталон cinematic content page. |
| `/book` | Page Template | Missing | Нужна отдельная страница книги. |
| `/meditations` | Catalog Template | Missing | Нужна страница медитаций. |
| `/science` | Page Template | Missing | Нужна научная база как отдельная доверительная страница. |
| `/blog` | Catalog Template | Missing | Нужен каталог материалов. |
| `/blog/[slug]` | Detail Template / Article | Missing | Нужен шаблон статьи. |
| `/about` | Page Template | Missing | Нужна отдельная страница об Ирине. |
| `/contact` | Page Template / Utility | Missing | Нужна страница контактов и запроса. |
| `/privacy` | Legal Template | Missing | Нужна юридическая страница. |
| `/terms` | Legal Template | Missing | Нужна юридическая страница. |
| `/404` | Utility Template | Missing | Нужна страница ошибки. |

## Implementation Order

1. `SITE_STRUCTURE.md`
2. `/webinars`
3. `/programs`
4. `/book`
5. `/meditations`
6. `/science`
7. `/about`
8. `/contact`
9. Проверить все ссылки и кнопки с главной

## Main Page Link Audit

После создания базовых страниц нужно пройти главную и заменить временные якоря или заглушки на реальные URL.

Целевые направления:

| UI / CTA | Target |
| --- | --- |
| `Методология` | `/methodology` |
| `Изучить методологию` | `/methodology` |
| `Мои программы` | `/programs` |
| `Все программы` | `/programs` |
| `Mentor 28` | `/programs/mentor-28` |
| `Продавай как звезда` | `/programs/sell-star` |
| `Смотреть вебинар` | `/webinars/inner-state.html` или соответствующий slug |
| `Смотреть все вебинары` | `/webinars` |
| `Книга` | `/book` |
| `Читать фрагмент` | `/book` или `/contact?topic=book` |
| `Купить книгу` | `/book` или внешний магазин, когда будет готово |
| `Медитации` | `/meditations` |
| `Все медитации` | `/meditations` |
| `Научная база` | `/science` |
| `Блог` | `/blog` |
| `Смотреть все материалы` | `/blog` |
| `Обо мне` | `/about` |
| `Обсудить запрос` | `/contact` |
| `Отправить сообщение` | `/contact` или форма на текущей странице |

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
