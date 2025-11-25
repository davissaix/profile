# David Ávila - Portfolio Website

## Overview
This is a personal portfolio website for David Ávila, a full-stack web developer. The project is built with Next.js 13, React, TypeScript, and Tailwind CSS. It showcases David's professional experience, skills, and projects.

## Project Architecture

### Technology Stack
- **Framework**: Next.js 13.5.4 (Hybrid routing - Pages Router + App Router)
- **Language**: TypeScript 5.1.6
- **Styling**: Tailwind CSS 3.3.3
- **Runtime**: Node.js 20

### Project Structure
```
.
├── pages/              # Pages Router (main navigation pages)
│   ├── index.tsx      # Home/About page
│   ├── portfolio.tsx  # Portfolio showcase
│   ├── contact.tsx    # Contact information
│   └── about.tsx      # Additional about content
├── src/
│   └── app/
│       ├── components/ # Shared React components
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       ├── layout.tsx  # Root layout component
│       └── globals.css # Global styles
├── public/            # Static assets (images, SVGs)
└── Configuration files

```

### Routing Strategy
The project uses a hybrid approach:
- **Pages Router**: Main navigation pages (Home, Portfolio, Contact, About)
- **App Router**: Layout components and global configuration
- The layout from `src/app/layout.tsx` is imported into pages for consistent UI

## Recent Changes (November 25, 2025)

### Replit Environment Setup
- Configured Next.js to run on port 5000 bound to 0.0.0.0 for Replit compatibility
- Set up "Next.js Dev Server" workflow for automatic development server management
- Installed all project dependencies
- Configured deployment settings for autoscale deployment with build and start commands

### Configuration Changes
1. **package.json**: Updated dev and start scripts to use `-H 0.0.0.0 -p 5000`
   - This binds the server to all network interfaces on port 5000
   - Required for Replit's proxy to access the application
2. **next.config.js**: Simplified configuration (uses default settings)
   - Server binding to 0.0.0.0:5000 is sufficient for Replit compatibility
3. **Deployment**: Configured autoscale deployment with npm build and start commands

## Development

### Running the Project
The project runs automatically via the configured workflow. To manually start:
```bash
npm run dev
```
The dev server will be available at port 5000.

### Available Scripts
- `npm run dev` - Start development server on 0.0.0.0:5000
- `npm run build` - Build for production
- `npm start` - Start production server on 0.0.0.0:5000
- `npm run lint` - Run ESLint

### Dependencies
All dependencies are managed via npm and listed in package.json. Key dependencies:
- next: ^13.5.4
- react: 18.2.0
- typescript: 5.1.6
- tailwindcss: ^3.3.3

## Deployment
The project is configured for deployment with Next.js production build. The start script is configured to bind to 0.0.0.0:5000 for cloud hosting compatibility.

## User Preferences
None specified yet.

## Notes
- The project uses hybrid routing (Pages + App Router) which is supported in Next.js 13
- Tailwind CSS is configured to scan all relevant directories for class usage
- TypeScript strict mode is enabled for type safety
- The portfolio showcases multilingual capabilities and diverse skill set
