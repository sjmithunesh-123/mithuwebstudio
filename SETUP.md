<!-- Mithu Web Studio - Premium Web Design Agency Website
A world-class website built with React, Tailwind CSS, and Framer Motion
-->

# Mithu Web Studio - Premium Web Design Agency

Welcome to the Mithu Web Studio website project. This is a comprehensive guide to help you understand and customize the website.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
mithu-web-studio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── BackToTop.tsx    # Back to top button
│   │   ├── WhatsAppButton.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── ScrollReveal.tsx # Scroll animations
│   ├── hooks/               # Custom React hooks
│   │   └── useCustomHooks.ts
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Blog.tsx
│   │   └── Contact.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static files
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## Key Features

### Animations & Interactions
- Smooth scroll animations with Framer Motion
- Staggered container animations
- Hover effects on cards and buttons
- Float and glow animations
- Page transition effects

### Responsive Design
- Mobile-first approach
- Tailored for all screen sizes
- Hamburger menu for mobile
- Optimized images and layouts

### Dark Mode
- Toggle between light and dark themes
- Preferences saved to localStorage
- System preference detection
- Smooth transitions

### Performance
- Optimized bundle size
- Code splitting with React Router
- Fast image loading
- Lighthouse optimized

## Customization Guide

### Change Company Information
1. **Navbar** - `src/components/Navbar.tsx`
   - Company logo
   - Navigation links

2. **Footer** - `src/components/Footer.tsx`
   - Company name and description
   - Contact information
   - Social media links

3. **Contact Page** - `src/pages/Contact.tsx`
   - Email, phone, WhatsApp
   - Location information

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2563EB',    // Main brand color
  secondary: '#0F172A',  // Dark background
  accent: '#38BDF8',     // Highlight color
}
```

### Add New Pages
1. Create file in `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Navbar.tsx`

### Update Portfolio Projects
Edit `src/pages/Portfolio.tsx`:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'Category',
    image: 'image-url',
    technologies: ['React', 'Tailwind'],
    link: 'https://example.com',
  },
  // Add more projects...
];
```

### Add Blog Posts
Edit `src/pages/Blog.tsx`:
```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Article Title',
    excerpt: 'Article summary...',
    category: 'Category',
    author: 'Author Name',
    date: 'Jan 01, 2024',
    image: 'image-url',
    readTime: '5 min read',
  },
  // Add more posts...
];
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Auto-deploy on push

### Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish dir: `dist`

### Docker
```bash
docker build -t mithu-web-studio .
docker run -p 3000:3000 mithu-web-studio
```

## Performance Tips

1. **Images**: Use optimized images (WebP format)
2. **Fonts**: Already using system fonts + Google Fonts
3. **Animations**: Use `will-change` CSS for heavy animations
4. **Lazy Loading**: Use native lazy loading for images
5. **Code Splitting**: Vite handles this automatically

## SEO Optimization

- Meta tags in `index.html`
- Semantic HTML structure
- Mobile-friendly design
- Fast page load time
- Accessibility features (ARIA labels)

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- --port 3001
```

### Styling issues
```bash
npm install -D tailwindcss autoprefixer postcss
```

### Module not found
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support & Contact

- **Email**: hello@mithuwebstudio.com
- **WhatsApp**: +91 98765 43210
- **Website**: mithuwebstudio.com

## License

© 2024 Mithu Web Studio. All rights reserved.
