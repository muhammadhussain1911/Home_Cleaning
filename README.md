# Healthy Home Services - Rank & Rent Website

Professional house cleaning services lead-generation website built with Next.js, Tailwind CSS, and optimized for SEO.

## 📋 Project Overview

This is a complete, production-ready **Rank & Rent** lead-generation website for the house cleaning niche. Designed to rank locally, generate phone calls, and capture form leads across multiple US cities.

**Target Market:** USA (English, US pricing, US-style UI)  
**Primary Keywords:** House cleaning, home cleaning, deep cleaning, professional cleaning services  
**Goal:** Local rankings + phone leads + form submissions

## 🚀 Features

### ✅ Complete Website Structure

- **8 Main Routes + Dynamic Pages**
  - Home (/)
  - Services Hub (/services) + 5 service pages
  - Locations Hub (/locations) + 12 dynamic city pages
  - Blog (/blog) + 8 blog posts
  - About, Contact
  - Privacy Policy, Terms of Service
  - 404 Not Found page

### ✅ SEO-First Architecture

- **Next.js Metadata API** for unique title/description on every page
- **JSON-LD Structured Data:**
  - Organization schema (global)
  - LocalBusiness schema (city pages)
  - Service schema (service pages)
  - FAQPage schema (FAQ sections)
  - BreadcrumbList schema (all pages)
  - Article schema (blog posts)
  - Breadcrumb navigation on all pages

### ✅ Production Features

- Dynamic breadcrumbs and navigation
- Form validation (client-side)
- Responsive design (mobile-first)
- Image optimization with next/image
- Accessibility (WCAG contrast, keyboard nav)
- Performance optimized
- 24/7 phone CTA

### ✅ Reusable Components

- `<Navbar />` - Sticky navigation with mobile menu
- `<SiteHeader />` - Hero section with dynamic title/subtitle/CTA
- `<Footer />` - Footer with links and contact
- `<CTASection />` - Call-to-action section
- `<FAQ />` - Accordion with FAQ
- `<ServiceAreaGrid />` - City showcase grid
- `<Testimonials />` - Social proof section
- `<ContactForm />` - Lead capture form with validation
- `<JsonLd />` - Safe JSON-LD injection
- `<Breadcrumbs />` - Breadcrumb navigation

### ✅ Content Included

- 12 major US cities with local business info
- Neighborhoods for each city
- 8 SEO blog posts about cleaning topics
- Trust badges (licensed, insured, background-checked, eco-friendly)
- Sample testimonials and ratings
- Service descriptions and features
- FAQ sections

## 📁 Folder Structure

```
rank-and-rent/
├── app/
│   ├── layout.js                    # Root layout
│   ├── page.js                      # Home page
│   ├── globals.css                  # Global styles
│   ├── sitemap.js                   # Dynamic SEO sitemap
│   ├── not-found.js                 # 404 page
│   ├── services/
│   │   ├── page.js                  # Services hub
│   │   └── [service]/page.js        # Dynamic service pages
│   ├── locations/
│   │   ├── page.js                  # Locations hub
│   │   └── [city]/page.js           # Dynamic city pages
│   ├── blog/
│   │   ├── page.js                  # Blog hub
│   │   └── [slug]/page.js           # Dynamic blog posts
│   ├── about/page.js                # About page
│   ├── contact/page.js              # Contact page
│   ├── privacy-policy/page.js       # Privacy policy
│   └── terms/page.js                # Terms of service
├── components/
│   ├── Navbar.js
│   ├── SiteHeader.js
│   ├── Footer.js
│   ├── CTASection.js
│   ├── FAQ.js
│   ├── ServiceAreaGrid.js
│   ├── Testimonials.js
│   ├── ContactForm.js
│   ├── JsonLd.js
│   └── Breadcrumbs.js
├── lib/
│   ├── seo.js                       # SEO helpers and schema generators
│   ├── cities.js                    # City seed data (12 cities)
│   └── posts.js                     # Blog post seed data (8 posts)
├── public/
│   └── robots.txt                   # SEO robots.txt
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json
└── .gitignore
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** JavaScript ES6 (No TypeScript)
- **Styling:** Tailwind CSS 3
- **Form Handling:** React hooks (client-side validation)
- **SEO:** Next.js Metadata API, JSON-LD
- **Image Optimization:** next/image

## 📦 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎯 Key SEO Features

### On-Page SEO

- ✅ One H1 per page (unique, keyword-focused)
- ✅ Clean H2/H3 hierarchy
- ✅ Meta titles (55-60 chars)
- ✅ Meta descriptions (150-160 chars)
- ✅ Canonical URLs
- ✅ Open Graph & Twitter tags
- ✅ Internal linking (home → services → cities → contact)
- ✅ Breadcrumb navigation + structured data

### Technical SEO

- ✅ Dynamic XML sitemap (all pages auto-included)
- ✅ robots.txt configured
- ✅ Mobile-responsive design
- ✅ Fast load times (image optimization)
- ✅ Semantic HTML
- ✅ Accessibility standards (WCAG)
- ✅ Proper link structure (no orphan pages)

### Structured Data (JSON-LD)

- Organization schema (all pages)
- LocalBusiness schema (city pages)
- Service schema (service pages)
- FAQPage schema (FAQ sections)
- BreadcrumbList (all pages)
- Article schema (blog posts)

## 💥 Quick Customization

### Change Company Name/Phone

1. Update in `app/layout.js` (global metadata)
2. Update all components using `Navbar.js`, `Footer.js`, `SiteHeader.js`
3. Update `lib/seo.js` Organization schema
4. Replace phone `(888) 555-0199` with your number

### Add/Remove Cities

1. Edit `lib/cities.js` - add/remove city objects
2. Add neighborhood data in `neighborhoods` object
3. Dynamic city pages auto-generate from this list

### Add/Remove Blog Posts

1. Edit `lib/posts.js` - add new post objects
2. Include: slug, title, excerpt, date, image, category, content
3. Dynamic blog pages auto-generate

### Add/Remove Services

1. Edit `app/services/[service]/page.js` - update `serviceData` object
2. Update service list in `app/page.js` and `app/services/page.js`
3. Update home page featured services section

### Change Colors

1. Edit `tailwind.config.js` - modify color theme
2. Primary (dark): `#1f2937`
3. Secondary (green): `#10b981`
4. Accent (amber): `#f59e0b`

## 📊 SEO Seed Data Included

### 12 Major US Cities

- New York, NY
- Los Angeles, CA
- Chicago, IL
- Houston, TX
- Phoenix, AZ
- Philadelphia, PA
- San Antonio, TX
- San Diego, CA
- Dallas, TX
- San Jose, CA
- Austin, TX
- Jacksonville, FL

### 8 Blog Posts

1. The Ultimate Deep Cleaning Guide
2. Complete Move-Out Cleaning Checklist
3. Eco-Friendly Cleaning Solutions
4. How to Keep Your Home Clean with Pets
5. Spring Cleaning Tips
6. Office Cleaning Best Practices
7. Airbnb Cleaning Standards
8. How Often Should You Clean Your House?

### 5 Main Services

1. House Cleaning
2. Deep Cleaning
3. Move-In/Move-Out Cleaning
4. Office Cleaning
5. Airbnb Cleaning

## 🔍 Content Keywords (Natural Usage)

**Primary:**

- house cleaning services
- professional home cleaning
- deep cleaning
- move-out cleaning
- maid services

**Conversational:**

- cleaning services near me (contextual)
- licensed and insured cleaners
- eco-friendly cleaning
- same-day cleaning available
- background-checked cleaners

## 📱 Mobile Optimization

- ✅ Fully responsive (mobile-first design)
- ✅ Touch-friendly buttons and navigation
- ✅ Mobile hamburger menu
- ✅ Fast on mobile networks
- ✅ Sticky header for easy navigation

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Color contrast (WCAG AA)
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Alt text on images
- ✅ ARIA labels where needed

## 🚀 Deployment

### 🎯 cPanel CI/CD (Recommended for Rank & Rent)

**Automatic deployment from GitHub to cPanel via FTP!**

This project includes a complete CI/CD pipeline that automatically deploys your site to cPanel whenever you push code to GitHub.

**Quick Start:**
1. 📖 Read **[DEPLOY_TO_CPANEL.md](DEPLOY_TO_CPANEL.md)** - Complete deployment guide
2. 🔐 Setup **[GITHUB_SECRETS_SETUP.md](GITHUB_SECRETS_SETUP.md)** - Configure FTP credentials
3. 💻 Use **[GIT_COMMANDS.md](GIT_COMMANDS.md)** - Git command reference
4. ✅ Follow **[DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)** - Step-by-step checklist

**Benefits:**
- ✅ Push code → Auto-deploy (no cPanel login needed)
- ✅ 2-3 minute deployment time
- ✅ Static HTML export (no Node.js required on server)
- ✅ Clean URLs with auto-generated `.htaccess`
- ✅ Perfect for rank & rent business model

**Workflow:**
```bash
git add .
git commit -m "Updated content"
git push  # ← Automatically deploys to cPanel!
```

### Vercel / Netlify (Alternative)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting

**Important:** Update domain in SEO files before deployment:

- `lib/seo.js` - Change canonical URLs
- `app/layout.js` - Update OpenGraph URLs
- `app/sitemap.js` - Update base URL

## 📝 Form Submission

The contact form uses client-side validation only (no backend processing). To add backend processing:

1. Create an API route: `app/api/contact/route.js`
2. Update `ContactForm.js` to POST to this endpoint
3. Connect to email service (SendGrid, Mailgun, etc.)

Example:

```javascript
export async function POST(request) {
  const data = await request.json();
  // Process form data, send email, etc.
  return Response.json({ success: true });
}
```

## 📞 Support & Customization

The website includes:

- ✅ All code commented
- ✅ Clean, readable structure
- ✅ ES6+ JavaScript patterns
- ✅ Reusable components
- ✅ Easy to modify and extend

## 🎨 Design Features

- Modern, clean aesthetics
- Gradient backgrounds
- Card-based layouts
- Trust badges and social proof
- Clear call-to-action buttons
- White space and readability
- Professional color scheme

## 📈 SEO Checklist Pre-Launch

- [ ] Replace all placeholder phone numbers
- [ ] Update company name/branding
- [ ] Add real images/logos
- [ ] Update cities for your service areas
- [ ] Customize blog posts with local keywords
- [ ] Set up Google Search Console
- [ ] Set up Google Analytics
- [ ] Submit sitemap to Google
- [ ] Configure email notifications
- [ ] Test form submissions
- [ ] Mobile test on real devices
- [ ] Lighthouse audit (aim for 90+)
- [ ] Test all internal links
- [ ] Verify breadcrumbs work
- [ ] Check mobile menu functionality

## ⚡ Performance Tips

1. **Images:** Always use next/image for optimization
2. **Fonts:** Currently using system fonts (already optimized)
3. **JS:** Keep external libraries minimal
4. **CSS:** Tailwind CSS is tree-shaken in production
5. **Caching:** Leverage Next.js caching for static pages

## 🐛 Known Considerations

- Contact form is mock (no backend)
- Images use placeholder URLs from Unsplash
- Phone/email are placeholders (update before launch)
- No payment processing (scope of this project)
- No user authentication (not required for lead gen)

## 📜 License

Free to use and modify for your rank & rent business.

---

**Ready to launch?** This website is production-ready. Just customize the phone number, company name, and your service areas!
#   H o m e _ C l e a n i n g  
 