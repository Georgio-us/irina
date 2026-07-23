# Site Structure

## Назначение

Этот документ фиксирует рабочую структуру Website v1.0: sitemap, типы шаблонов, статус страниц и порядок реализации.

Последнее обновление: 23 июля 2026.

Статус документа: актуальная карта сайта и шаблонов. Если этот файл конфликтует со старыми execution-документами, ориентироваться на `SITE_STRUCTURE.md`.

Цель — собирать сайт как систему, а не создавать отдельные страницы хаотично. Внутренние страницы должны выглядеть как продолжение существующей дизайн-системы: те же токены, типографика, кнопки, отступы, карточки и общий визуальный язык.

Публичное название категории — **Zoom-встречи**. Технические URL `/webinars/`, имена файлов и внутренние CSS/JS-идентификаторы сохраняются на текущей итерации, чтобы не ломать существующую маршрутизацию.

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
│   ├── Zoom Meetings
│   ├── Books
│   ├── Meditations
│   └── Programs

├── Detail Template
│   ├── Zoom Meeting
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

- Zoom meeting detail — video-first, cinematic content page;
- blog article — text-first, editorial page;
- science detail — evidence-first, экспертная/исследовательская страница.

Текущий эталон для Zoom meeting detail: `/webinars/inner-state.html`.

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
| `/programs` | Catalog Template / Programs | Ready for review | Создан масштабируемый каталог: спокойный hero, равноправная сетка программ по две карточки в ряду, авторская цитата и переиспользованный ecosystem-блок. |
| `/programs/mentor-28` | Product Template | Ready for final review | Страница существует, мобильный hero упрощен, related-блок заменен на компактный ecosystem-паттерн. |
| `/programs/sell-star` | Product Template v2 | Ready for final review | Текущий эталон reusable product template. |
| `/webinars` | Library Template / Zoom Meetings | Ready for final review | Каталог Zoom-встреч создан; список Zoom-встреч сильный, mobile hero упрощен. |
| `/webinars/inner-state.html` | Detail Template / Zoom Meeting | Ready | Эталон cinematic content page для одного Zoom-встречи. |
| `/webinars/youth-code.html` | Detail Template / Zoom Meeting | Ready | Страница Zoom-встречи на общем Zoom meeting detail шаблоне. |
| `/webinars/self-esteem.html` | Detail Template / Zoom Meeting | Ready | Страница Zoom-встречи на общем Zoom meeting detail шаблоне. |
| `/webinars/relationship-code.html` | Detail Template / Zoom Meeting | Ready | Страница Zoom-встречи на общем Zoom meeting detail шаблоне. |
| `/webinars/choosing-oneself.html` | Detail Template / Zoom Meeting | Ready | Страница Zoom-встречи на общем Zoom meeting detail шаблоне. |
| `/book` | Detail / Product hybrid | Ready for review | Создана страница книги: hero, описание, визуальные смысловые части, интерактивный фрагмент 12–15 с отдельным mobile-слайдером, финальный purchase CTA и переиспользованный ecosystem-блок. Реальные отзывы и purchase-flow отложены до получения контента и этапа пользовательских сценариев. |
| `/meditations` | Catalog Template / Product catalog | Ready for review | Создана витрина из 5 аудиопрактик: одна featured-медитация и четыре карточки. Плеер и purchase-flow намеренно не реализованы до этапа пользовательских сценариев. |
| `/meditations/return-to-self.html` | Detail Template / Meditation | Ready for review | Первый detail-шаблон медитации: hero, описание, три фазы практики, подготовка, возможные ощущения и related-медитации; без плеера и backend-логики. |
| `/meditations/morning-tuning.html` | Detail Template / Meditation | Ready for review | Вторая страница на общем meditation detail-шаблоне с самостоятельным содержанием утренней практики; без плеера и backend-логики. |
| `/meditations/balance-and-clarity.html` | Detail Template / Meditation | Ready for review | Третья detail-страница: практика для снижения информационной перегрузки, возвращения фокуса и ясного следующего шага. |
| `/meditations/stress-release.html` | Detail Template / Meditation | Ready for review | Четвёртая detail-страница: практика телесного расслабления и переключения нервной системы в режим восстановления. |
| `/meditations/deep-sleep.html` | Detail Template / Meditation | Ready for review | Пятая detail-страница: вечерняя практика завершения дня, расслабления тела и естественного перехода ко сну. |
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

1. Ручной desktop/mobile QA текущей сборки, включая новый каталог `/programs`.
2. Backend-логика для форм, заявок и других подтвержденных сценариев.
3. Пользовательские сценарии, CTA/modal flows и предфинальные правки по итогам QA.
4. Финальный аудит ссылок, SEO и launch QA после появления всех активных целевых страниц.
5. Deferred: `/science`, `/about`, `/privacy`, `/terms`, `/404`. Отдельная `/contact` не создается; используется контактный блок главной и будущий единый contact/modal flow.

## Main Page Link Audit

После создания оставшихся базовых страниц нужно пройти главную и заменить временные якоря или заглушки на реальные URL.

Целевые направления:

| UI / CTA | Target | Status |
| --- | --- | --- |
| `Методология` | `/methodology` | Ready |
| `Изучить методологию` | `/methodology` | Ready |
| Header dropdown / `Авторские программы` | `/programs` | Ready |
| `Mentor 28` | `/programs/mentor-28` | Ready |
| `Продавай как звезда` | `/programs/sell-star` | Ready |
| `Смотреть Zoom-встреча` | `/webinars/inner-state.html` или соответствующий slug | Ready |
| `Смотреть все Zoom-встречаы` | `/webinars` | Ready |
| `Книга` | `/book` | Ready |
| `Читать фрагмент` | `/book#book-excerpt` | Ready |
| `Купить книгу` | `/book` или внешний магазин, когда будет готово | Page ready / purchase flow pending |
| `Медитации` | `/meditations` | Ready |
| `Все медитации` | `/meditations` | Ready |
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
