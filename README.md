# Airbnb Clone

A full-stack Airbnb clone built with Next.js 13, React, Tailwind CSS, Prisma, MongoDB and NextAuth.

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
