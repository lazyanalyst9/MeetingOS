# MeetingOS

MeetingOS is a production-style full-stack AI meeting assistant built for hackathons and demos.

## Stack
- Next.js 14 + TypeScript + Tailwind
- Supabase (auth, db, storage)
- OpenAI (transcription, summary, chat)
- Demo mode fallback when `OPENAI_API_KEY` is missing

## Features
- Authentication pages (login/signup)
- Meeting dashboard with processing/completed statuses
- Audio upload flow with loading states
- AI summary structure (exec summary, decisions, action items, risks, blockers)
- Siri-like meeting chat agent
- Catch Me Up recap mode
- Kanban action-item board
- Follow-up email assistant with tone buttons
- Responsive landing/settings/detail pages

## Setup
1. Install deps:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env.local
   ```
3. Run app:
   ```bash
   npm run dev
   ```

## Supabase setup
- Run SQL from `db/schema.sql`
- Create storage bucket `meeting-audio`
- Configure Row Level Security policies for user ownership

## Deploy to Vercel
- Import repository into Vercel
- Add all environment variables from `.env.example`
- Deploy

## Demo mode
If `OPENAI_API_KEY` is not set, MeetingOS uses realistic sample transcript and summary data so every page remains functional.
