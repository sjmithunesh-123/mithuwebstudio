# Mithu Web Studio

A world-class premium web design and development agency website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

### Core Features
- ✨ **Modern Premium Design** - Luxury, clean, and professional aesthetics
- 🎨 **Dark Mode Support** - Light and dark theme toggle
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Optimized for speed and SEO
- 🎭 **Smooth Animations** - Framer Motion animations throughout
- 📊 **Conversion Focused** - Built to convert visitors into customers

### Pages
1. **Home** - Hero section with animated statistics and featured services
2. **About** - Founder information, timeline, and company values
3. **Services** - 8+ services with detailed descriptions and features
4. **Portfolio** - Project gallery with filtering and category browsing
5. **Pricing** - 3 pricing tiers with detailed comparison table
6. **Blog** - Blog posts with search and category filtering
7. **Contact** - Contact form, multiple contact methods, and locations

### Premium Components
- **Navigation Bar** - Sticky navigation with mobile menu
- **Footer** - Comprehensive footer with links and social media
- **Loading Screen** - Animated loading screen on app start
- **Back to Top** - Floating button to scroll to top
- **WhatsApp Integration** - Floating WhatsApp chat button
- **Scroll Animations** - Elements animate on scroll
- **Glassmorphism** - Modern glass effect UI elements
- **Gradients** - Beautiful gradient effects throughout

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
- Primary: `#2563EB` (Blue)
- Secondary: `#0F172A` (Dark Blue)
- Accent: `#38BDF8` (Cyan)

### Content
- **Company Name**: Update "Mithu Web Studio" throughout the codebase
- **Phone Number**: Change WhatsApp and phone numbers in components
- **Contact Email**: Update email addresses in footer and contact page
- **Projects**: Add your portfolio projects in `Portfolio.tsx`
- **Blog Posts**: Add blog content in `Blog.tsx`

### Fonts
- **Body**: Inter (sans-serif)
- **Headings**: Space Grotesk (bold)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg, xl)

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Responsive design for mobile SEO
- Fast loading performance
- SEO-friendly URLs
- Accessibility features

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📧 Contact & Support

- Email: hello@mithuwebstudio.com
- WhatsApp: +91 98765 43210
- Location: India

## 📄 License

This project is private and proprietary to Mithu Web Studio.

## 🙏 Credits

Created with ❤️ by Mithunesh
