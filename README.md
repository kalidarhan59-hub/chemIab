# ChemLab

Многоязычный учебный портал по химии (қазақша / русский / English): таблица Менделеева, молекулы, тренажёр, балансировщик и ИИ-чат Gemini.

## Локальный запуск

Требуется Node.js 22.12+ (рекомендуется 24).

```sh
npm ci
```

Скопируйте `.env.example` в `.env`, добавьте свой ключ в `GEMINI_API_KEY`, затем:

```sh
npm run dev
```

Откройте http://localhost:3000.

## Серверный запуск

```sh
npm ci
npm run build
npm start
```

Сервер обслуживает сайт и `/api/chat` на одном порту. Настройки: `PORT` (3000), `GEMINI_API_KEY`, `GEMINI_MODEL` (gemini-3.8-flash). Секрет задаётся в окружении хостинга или локальном `.env`. Не используйте префикс `VITE_` для ключа.

В репозитории есть Dockerfile для хостинга с поддержкой Docker. Добавьте `GEMINI_API_KEY` в секретные переменные хостинга. GitHub хранит исходники; GitHub Pages не запускает этот Node.js API. Без серверного ключа страницы работают, а чат сообщает, что ИИ не настроен.

`GET /api/health` показывает состояние сервера и наличие настройки ключа, но не проверяет квоту Gemini. Запросы к Gemini имеют таймаут 45 секунд. Чат ограничен 30 запросами в минуту на процесс; для нескольких экземпляров нужен общий лимитер. Лимиты и оплату API контролируйте в Google AI Studio.

Ключ, ранее встроенный в загруженный архив, удалён. Если он был опубликован где-либо, отзовите его и создайте новый.

## Проверка

```sh
npm run build
npm test
```

## Публикация на Vercel

Импортируйте https://github.com/kalidarhan59-hub/chemIab в https://vercel.com/new .

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm ci`
- Node.js: 24.x
- Environment Variables: `GEMINI_API_KEY` — ваш ключ (Production); `GEMINI_MODEL` — `gemini-3.8-flash`.

Нажмите Deploy. Ключ вводится только в настройках Vercel, не в GitHub. Для изменения ключа: Project → Settings → Environment Variables, затем Redeploy. Для публичного доступа проверьте Settings → Deployment Protection.

После публикации откройте `/api/health`: `aiConfigured: true` означает, что ключ задан, но не гарантирует его действительность или доступную квоту. Для полной проверки отправьте сообщение в чат.
