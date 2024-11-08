# Airbnb Clone

[![Next.js](https://img.shields.io/badge/Next.js-13.2-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.6-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Prisma](https://img.shields.io/badge/Prisma-5.6-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth](https://img.shields.io/badge/NextAuth-4.24-000000?logo=auth0&logoColor=white)](https://next-auth.js.org/)
[![Zustand](https://img.shields.io/badge/Zustand-4.4-000000?logo=npm&logoColor=white)](https://github.com/pmndrs/zustand)

A modern, full-stack Airbnb clone featuring real-time booking, interactive maps, and authentication. Built with the latest web technologies including Next.js 13 App Router, React Server Components, and MongoDB.

## Features

- 🔐 Authentication with NextAuth (Google, Github, Credentials)
- 🏠 Property listing creation and management
- 🔍 Advanced search with filters (date range, location, guests, etc.)
- 💖 Favorites system
- 📅 Reservation system
- 🗺️ Interactive maps with location selection
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 13
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time updates
- 🌍 World countries data integration

## Tech Stack

- **Framework:** Next.js 13
- **Styling:** Tailwind CSS
- **Database:** MongoDB
- **ORM:** Prisma
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Maps:** Leaflet
- **Forms:** React Hook Form
- **Image Upload:** Cloudinary
- **UI Components:** Custom components
- **Icons:** React Icons
- **Date Handling:** Date-fns
- **Notifications:** React Hot Toast

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm/yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Zeyu-Chen/Airbnb-Clone.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
```env
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

5. Setup Prisma:
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server:
```bash
npm run dev
```

## Environment Variables

The following environment variables are required:

- `DATABASE_URL`: MongoDB connection string
- `NEXTAUTH_SECRET`: NextAuth secret key
- `GITHUB_ID`: GitHub OAuth client ID
- `GITHUB_SECRET`: GitHub OAuth client secret
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name