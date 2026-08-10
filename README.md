# 82 Day Medium Challenge

A mobile-first, offline-capable personal discipline tracker built with Next.js, React, TypeScript, Tailwind CSS, and local browser storage. No account or backend is required.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Data is saved under `medium82:data:v1` in `localStorage` and survives refreshes/browser restarts on the same device.

## Test and build

```bash
npm test
npm run build
npm start
```

## Deploy

Import this repository into Vercel and accept the detected Next.js defaults, or run `vercel`. The generated PWA service worker and manifest are included in the production build. HTTPS is required for installability and notifications outside localhost.

## Install

- **iPhone:** Open the deployed app in Safari, tap **Share**, then **Add to Home Screen**.
- **Android:** Open in Chrome, open the menu, then choose **Install App** or **Add to Home Screen**.

Browser notifications and background scheduling vary by OS. The current app requests permission and stores customizable reminder times; reliable server push can later be connected through Firebase Cloud Messaging. Core tracking remains available offline after the first production visit.

## Structure

```text
app/          Next.js shell, metadata, and global styles
components/   Reusable onboarding, tracking, navigation, and view components
lib/          Local-date utilities, challenge calculations, defaults, and tests
public/       PWA manifest and maskable app icon
types/        Persisted domain model
```
