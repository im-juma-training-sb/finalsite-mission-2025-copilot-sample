# Finalsite 2025 - Company Goals & Mission

A modern web application showcasing Finalsite's strategic goals, mission, and vision for 2025. Built with the latest Next.js, TypeScript, and Tailwind CSS technologies.

## Features

- 🎯 **2025 Strategic Goals** - Interactive roadmap and quarterly milestones
- 🚀 **Company Mission** - Clear presentation of our core values and purpose
- 🌟 **Vision Statement** - Forward-looking aspirations and objectives
- 📊 **Impact Metrics** - Real-time statistics and achievements
- 🌙 **Dark/Light Mode** - Seamless theme switching
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Smooth Animations** - Powered by Framer Motion
- 🎨 **Modern UI** - Clean, professional design with Tailwind CSS

## Tech Stack

- **Next.js 15** - App Router, TypeScript, and Server Components
- **Tailwind CSS** - Utility-first CSS framework with custom theming
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **Inter Font** - Modern, readable typography

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind CSS
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Main page with all sections
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   │   ├── button.tsx # Custom button component
│   │   └── theme-toggle.tsx # Dark/light mode toggle
│   ├── header.tsx     # Navigation header
│   ├── hero-section.tsx    # Landing hero section
│   ├── mission-section.tsx # Mission statement
│   ├── goals-section.tsx   # 2025 strategic goals
│   ├── vision-section.tsx  # Company vision
│   ├── impact-section.tsx  # Impact metrics
│   └── footer.tsx     # Site footer
└── lib/               # Utilities
    ├── theme-provider.tsx # Theme context provider
    └── utils.ts       # Utility functions
```

## Key Components

- **Header**: Sticky navigation with mobile menu and theme toggle
- **Hero Section**: Animated landing area with call-to-action
- **Mission Section**: Core values with icon representations
- **Goals Section**: 2025 roadmap with quarterly timeline
- **Vision Section**: Future aspirations and objectives
- **Impact Section**: Statistics and achievements
- **Footer**: Contact information and links

## Development

- **Build for production:** `npm run build`
- **Start production server:** `npm start`
- **Lint code:** `npm run lint`
- **Type checking:** `npx tsc --noEmit`

## Deployment

The application is optimized for deployment on Vercel, Netlify, or any modern hosting platform that supports Next.js.

For Vercel deployment:
1. Connect your repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with zero configuration

## Contributing

1. Follow TypeScript best practices
2. Use Tailwind CSS for styling
3. Maintain responsive design principles
4. Test dark/light mode compatibility
5. Ensure accessibility standards

## License

Built for Finalsite - Internal Use Only
