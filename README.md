# E-commerce with shadcn/ui & Next.js

A modern, production-ready e-commerce built with Next.js 16, React 19, Tailwind CSS, and shadcn/ui components. This includes pre-built pages and components for building a complete online store.

## Features

✨ **Modern Stack**
- Next.js 16 with App Router and Turbopack
- React 19 with latest hooks
- TypeScript for type safety
- Tailwind CSS 4 with modern styling
- shadcn/ui components

🛍️ **E-commerce Features**
- Product catalog and product detail pages
- Shopping cart functionality
- Wishlist management
- Product categories
- User authentication (login/register)
- Checkout page
- Responsive design

🎨 **UI & UX**
- Beautiful, customizable components
- Dark mode support with next-themes
- Smooth animations with Motion
- Toast notifications with Sonner
- Professional layout components

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 20.x or higher
- **pnpm** 9.x or higher (or npm/yarn if you prefer)


## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Test_FullStack
```

### 2. Install Dependencies


```bash
npm install
```


## Running the Project

### Development Server


```bash
npm run dev
```

The application will be available at `http://localhost:3000`


## Project Structure

```
├── app/                          # Next.js App Router
│   ├── (site)/                   # Main site routes
│   │   ├── page.tsx             # Home page
│   │   ├── about/               # About page
│   │   ├── contact/             # Contact page
│   │   ├── faq/                 # FAQ page
│   │   ├── shop/                # Shop/Products listing
│   │   │   └── [slug]/          # Product detail page
│   │   └── wishlist/            # Wishlist page
│   ├── checkout/                # Checkout page
│   ├── login/                   # Login page
│   ├── register/                # Register page
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/                  # React components
│   ├── ui/                      # shadcn/ui components
│   ├── shadcn-space/           # Custom layout components
│   │   ├── blocks/             # Feature blocks
│   │   └── animations/         # Reusable animations
│   ├── cart-context.tsx        # Cart state management
│   ├── wishlist-context.tsx    # Wishlist state management
│   └── theme-provider.tsx      # Theme configuration
├── assets/                      # Static assets
│   └── logo/                    # Logo component
├── hooks/                       # Custom React hooks
├── lib/                         # Utility functions
│   ├── data.ts                 # Sample data
│   └── utils.ts                # Helper utilities
├── public/                      # Static files
│   └── assets/                 # Images and media
├── package.json                # Project dependencies
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.mjs             # Next.js configuration
```

## Technology Stack

- **Framework:** Next.js 16.1.7
- **UI Library:** React 19.2.4
- **Styling:** Tailwind CSS 4.2.1
- **Component Library:** shadcn/ui
- **Language:** TypeScript 5.9.3
- **Icons:** Lucide React & Iconify
- **Animations:** Motion
- **Carousel:** Embla Carousel
- **Notifications:** Sonner
- **Theme:** next-themes
- **Linting:** ESLint 9
- **Formatting:** Prettier


