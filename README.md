# Fainted Studio - Video Editing Portfolio

Premium dark-themed portfolio website for video editor Matthew, built with Next.js, React, and Tailwind CSS.

**Live at:** [fainted.studio](https://fainted.studio)  
**Contact:** [matthew@fainted.studio](mailto:matthew@fainted.studio)

## Features

✨ **Hero Section** - Captivating headline with VSL video player and dual CTA buttons  
🎬 **Work Gallery** - 3-column responsive grid with category filtering (All, Long Form, Short Form)  
⚙️ **Creative Process** - 4-step journey with detailed descriptions  
❓ **FAQ Section** - Interactive expandable Q&A with smooth animations  
📧 **Contact Form** - Fully-featured form with project type selector  
📱 **Responsive Design** - Mobile-first approach with smooth navigation  
🎨 **Dark Theme** - Modern aesthetic with pink accent (#FF3D81)

## Color Palette

- **Background:** #0E0E12 (Deep Dark)
- **Primary Text:** #E6E6E6 (Light Gray)
- **Secondary Text:** #8A8A8A (Medium Gray)
- **Accent:** #FF3D81 (Pink/Magenta)

## Tech Stack

- **Framework:** Next.js 16
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Inter (Google Fonts)
- **Deployment:** Vercel

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/filipgrbin/fainted.git
cd fainted
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### 3. Run Development Server
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production
```bash
npm run build
npm run start
```

## Project Structure

```
fainted/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and design tokens
│   ├── page.tsx            # Main page component
│   └── favicon.ico
├── components/
│   ├── navigation.tsx      # Header with smooth scroll navigation
│   ├── hero.tsx            # Hero section with VSL video
│   ├── work.tsx            # Work gallery with filtering
│   ├── process.tsx         # 4-step creative process
│   ├── faq.tsx             # Interactive FAQ section
│   ├── contact.tsx         # Contact form and social links
│   └── footer.tsx          # Footer with links
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Customization Guide

### Edit Content

**Hero Section** (`components/hero.tsx`)
- Update headline text
- Modify subtext description
- Replace video URL
- Adjust CTA button text

**Work Gallery** (`components/work.tsx`)
- Add project data with titles and categories
- Replace placeholder videos with actual work
- Update grid layout if needed

**Process Steps** (`components/process.tsx`)
- Modify 4-step process titles and descriptions
- Add or remove steps as needed

**FAQ** (`components/faq.tsx`)
- Add/remove questions and answers
- Update contact email

**Contact Form** (`components/contact.tsx`)
- Integrate email service (Resend, SendGrid, Mailgun)
- Update form fields as needed
- Add social media links

### Modify Styling

**Global Colors** (`app/globals.css`)
```css
:root {
  --bg: 0 0% 5.5%;           /* Change background */
  --foreground: 0 0% 90%;    /* Change text color */
  --secondary: 0 0% 53.5%;   /* Change secondary text */
  --accent: 344 100% 58%;    /* Change accent color */
}
```

**Tailwind Configuration** (`tailwind.config.ts`)
- Extend theme colors, typography, spacing
- Add custom utilities

## Video Integration

To add your VSL (Video Sales Letter) video:

1. Upload video to your hosting (Vercel Blob, AWS S3, Vimeo, YouTube, etc.)
2. Update the `src` in `hero.tsx`:
```tsx
<source src="https://your-video-url.mp4" type="video/mp4" />
```

## Form Integration

To make the contact form functional, integrate with an email service:

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

**Option 2: SendGrid**
```bash
npm install @sendgrid/mail
```

**Option 3: Mailgun**
```bash
npm install mailgun.js
```

Add an API route in `app/api/contact/route.ts` to handle form submissions.

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"

Your site will be live at `fainted.vercel.app`

### Configure Custom Domain

In Vercel Dashboard:
1. Go to Settings → Domains
2. Add `fainted.studio`
3. Update DNS records as instructed

## Performance Optimization

- ✅ Next.js 16 with Turbopack (default bundler)
- ✅ React Compiler support available
- ✅ Automatic image optimization
- ✅ Font optimization with next/font
- ✅ CSS-in-JS with Tailwind

## SEO

The site includes:
- Proper meta tags and descriptions
- Semantic HTML
- Open Graph tags
- Mobile viewport configuration
- Structured content

## TODO

- [ ] Add actual video portfolio links
- [ ] Integrate email service for contact form
- [ ] Add testimonials section with carousel
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Optimize video files
- [ ] Add social media link integration
- [ ] Set up 404 page
- [ ] Add blog/case studies section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Fainted Studio. All rights reserved.

---

Built with [v0](https://v0.dev) by Vercel
