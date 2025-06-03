# Fametonic - Modern Glassy UI Web App

Fametonic is a modern, responsive web UI project built with Next.js 13 App Router, Tailwind CSS, and DaisyUI. It features a sleek glassmorphism-inspired design, mobile-friendly layout, and futuristic UI components. This project demonstrates practical usage of server/client component architecture, responsive design, and reusable component-based development.

## Live Demo

[https://fametonic-xl4k.vercel.app/](https://fametonic-xl4k.vercel.app/)

## Video Walkthrough

[https://www.youtube.com/watch?v=Q8JVYTPngso](https://www.youtube.com/watch?v=Q8JVYTPngso)

## Features

- Modern glassy UI with dark mode aesthetics
- Responsive navbar with mobile hamburger menu
- Clean layout using Next.js App Router
- Server-side components and client-side interactions
- Tailwind CSS for styling
- Modular folder structure for scalability

## Tech Stack

| Tech              | Description                               |
| ----------------- | ----------------------------------------- |
| Next.js 13+       | React framework with App Router           |
| Tailwind CSS      | Utility-first CSS framework               |
| React             | Frontend UI library                       |
| TypeScript        | Static typing                             |
| Responsive Design | Mobile-first UI with Tailwind breakpoints |

## Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout with fonts and global structure
│   ├── page.tsx             # Landing page or main content
│   ├── fonts.ts             # Font configuration
├── components/
│   ├── Navbar.tsx           # Server component wrapper
│   ├── NavbarClient.tsx     # Mobile menu and interactive navbar
│   ├── TopGradientBar.tsx   # Gradient header bar
│   ├── HeroCard.tsx         # Hero section with bg image and content
│   ├── FeatureList.tsx      # Listing the features
├── public/
│   ├── logo.png             # Logo image
│   ├── mobile.svg           # Mobile hero background
├── styles/
│   └── globals.css          # Global CSS (includes Tailwind base, components, utilities)
└── tailwind.config.ts       # Tailwind and DaisyUI config
```

## Installation & Development

1. Clone the repository

```
git clone https://github.com/AR-Raju/fametonic.git
cd fametonic
```

2. Install dependencies

```
npm install
# or
yarn
```

3. Run the development server

```
npm run dev
# or
yarn dev
```

4. Open in browser

```
http://localhost:3000
```

## Build for Production

```
npm run build
npm start
```

Deploy to platforms like Vercel, Netlify, or Render.

## Dependencies

```
{
  "next": "13+",
  "react": "18+",
  "tailwindcss": "^3.0.0",
  "daisyui": "^4.0.0",
  "lucide-react": "^0.270.0"
}
```

## Fonts Used

- Figtree
- Urbanist

These are imported and configured in fonts.ts and applied in layout.tsx.

## Learnings

- Efficient usage of Next.js App Router and server/client components
- Applying glassmorphism with Tailwind CSS
- Creating responsive, accessible UI with DaisyUI
- Leveraging modular design for maintainability

## Author

Your Name — https://github.com/AR-Raju

