# Roy Mghames - Legal Services Website

A professional, SEO-optimized website for Roy Mghames, a lawyer providing legal services in Lebanon. Built with Next.js 15, TypeScript, and modern web technologies.

![Website Preview](https://img.shields.io/badge/Status-Ready%20for%20Production-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-15.4.3-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-blue)

## 🌐 Live Website

**Domain**: [legalserviceslb.com](https://legalserviceslb.com) _(Ready for deployment)_

## 📋 Project Overview

Professional website for Roy Mghames Legal Services, featuring:

- **5 Complete Pages**: Home, About, Services, Blog, Contact
- **SEO Optimized**: Meta tags, sitemap, structured data ready
- **Mobile Responsive**: Optimized for all devices
- **WhatsApp Integration**: Instant client communication
- **Blog System**: Legal insights and articles
- **Contact Forms**: Secure client inquiry handling

## 🏗️ Technical Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules (no Tailwind)
- **Fonts**: Google Fonts (Inter, Merriweather)
- **Performance**: Optimized images, SSG, modern formats
- **SEO**: Built-in sitemap, robots.txt, meta optimization

## 🎨 Design System

### Color Palette

- **Primary**: #1A4331 (Dark Green)
- **Secondary**: #F8F6F0 (Off-white background)
- **Accent**: #DAA520 (Gold)
- **Text**: #333333 (Dark grey)

### Typography

- **Headings**: Merriweather (Serif)
- **Body**: Inter (Sans-serif)

## 📁 Project Structure

```
src/
├── app/                    # App Router pages
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── blog/              # Blog system
│   │   ├── page.tsx       # Blog index
│   │   └── [slug]/        # Dynamic blog posts
│   ├── contact/           # Contact page
│   ├── sitemap.ts         # SEO sitemap
│   └── robots.ts          # Search engine directives
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ContactForm.tsx    # Contact form with validation
│   └── WhatsAppWidget.tsx # WhatsApp integration
└── styles/               # Global CSS with design system
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd roy-mghames

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📄 Pages Overview

### 🏠 Home Page (`/`)

- Hero section with compelling headline
- Services overview with icons
- Client testimonials
- Trust indicators and benefits
- Multiple call-to-action sections

### 👨‍💼 About Page (`/about`)

- Professional biography
- Education and credentials
- Mission statement and values
- Professional approach methodology

### ⚖️ Services Page (`/services`)

- **Corporate Law**: Business formation, governance, M&A
- **Real Estate Law**: Property transactions, due diligence
- **Family Law**: Divorce, custody, inheritance
- **Criminal Law**: Defense representation, litigation
- **Civil Litigation**: Commercial disputes, personal injury

### 📝 Blog System (`/blog`)

- Responsive article cards
- SEO-optimized content
- Social sharing integration
- **Featured Articles**:
  - "5 Key Steps to Starting a Business in Lebanon"
  - "Understanding Real Estate Law in Lebanon"
  - "Navigating Divorce Proceedings in Lebanon"

### 📞 Contact Page (`/contact`)

- Validated contact form
- Multiple contact methods
- Business hours and location
- Google Maps integration ready
- FAQ section

## 🎯 SEO Features

### Meta Optimization

- Unique titles and descriptions for all pages
- Open Graph tags for social sharing
- Twitter Card integration
- Keyword optimization for Lebanese legal services

### Technical SEO

- Automated sitemap generation
- Robots.txt configuration
- Structured data ready (LocalBusiness, Attorney)
- Fast loading times with optimized images

### Target Keywords

- "lawyer in Lebanon"
- "legal services Lebanon"
- "Beirut law firm"
- "Lebanese lawyer"
- "Roy Mghames"

## 📱 Features

### 💬 WhatsApp Integration

- Floating widget on all pages
- Pre-filled consultation messages
- Mobile-optimized experience

### 📧 Contact Forms

- Client inquiry form with validation
- Service-specific contact options
- Secure form handling ready
- Success/error state management

### 🎨 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly navigation
- Accessible design principles

## 🔧 Configuration

### Environment Variables

```env
# Add these to your .env.local file
NEXT_PUBLIC_SITE_URL=https://legalserviceslb.com
NEXT_PUBLIC_WHATSAPP_NUMBER=9611234567
```

### Google Maps Integration

To enable Google Maps on the contact page:

1. Get a Google Maps API key
2. Add it to your environment variables
3. Update the map component in `/contact`

### Email Configuration

To enable contact form submissions:

1. Set up email service (Nodemailer configured)
2. Add SMTP credentials to environment variables
3. Deploy API routes for form handling

## 📊 Performance

- **First Load JS**: ~105KB average
- **Static Generation**: All pages pre-rendered
- **Image Optimization**: WebP format support
- **Font Optimization**: Automatic font loading
- **Core Web Vitals**: Optimized for Google ranking

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git
- **Traditional Hosting**: Use `npm run build` + `npm start`

## 📝 Content Management

### Adding Blog Posts

1. Edit `src/app/blog/[slug]/page.tsx`
2. Add new post to `blogPosts` object
3. Create corresponding content
4. Update sitemap if needed

### Updating Contact Information

- Update phone numbers in components
- Modify business hours in contact page
- Update address when available

## 🔍 Analytics Integration

Ready for:

- Google Analytics 4
- Google Search Console
- Facebook Pixel
- LinkedIn Insight Tag

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary software developed for Roy Mghames Legal Services.

---

**Built with ❤️ for professional legal services in Lebanon**

_Ready for production deployment and client acquisition_
