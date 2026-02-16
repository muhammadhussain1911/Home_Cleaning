# Deployment Guide - Healthy Home Services Website

## Quick Start (Under 5 Minutes)

### Option 1: Deploy to Vercel (Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR-USERNAME/healthy-home-services
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import from GitHub
   - Click "Deploy"
   - Done! Your site is live

### Option 2: Deploy to Netlify

1. **Connect GitHub**
   - Go to https://netlify.com
   - Click "New site from Git"
   - Choose GitHub repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Connect and deploy
   - Site is live in minutes

## Post-Deployment Checklist

### 1. Update Domain

- [ ] Point your domain to Vercel/Netlify
- [ ] Update base URL in `lib/seo.js`
- [ ] Update `NEXT_PUBLIC_DOMAIN` in `.env.local`

### 2. SEO Setup

- [ ] Add sitemap URL to Google Search Console
- [ ] Submit robots.txt
- [ ] Set preferred domain (www vs non-www)
- [ ] Enable Search Analytics

### 3. Add Analytics

- [ ] Set up Google Analytics 4
- [ ] Create property
- [ ] Add measurement ID to .env.local
- [ ] Verify tracking fires

### 4. Security

- [ ] Enable HTTPS (automatic with Vercel/Netlify)
- [ ] Set up SSL certificate
- [ ] Configure security headers

### 5. Monitoring

- [ ] Enable uptime monitoring
- [ ] Set up error tracking
- [ ] Configure alerts

## Customization Before Launch

### 1. Company Information

Create `.env.local`:

```env
NEXT_PUBLIC_COMPANY_NAME="Your Company Name"
NEXT_PUBLIC_PHONE="+1-555-555-5555"
NEXT_PUBLIC_EMAIL="your@email.com"
NEXT_PUBLIC_DOMAIN="yourdomain.com"
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
```

### 2. Update All Files

- [ ] Replace all "(888) 555-0199" with your phone
- [ ] Replace all "Healthy Home Services" with your company
- [ ] Replace email addresses
- [ ] Update cities for your service areas
- [ ] Update neighborhood names

### 3. Add Your Content

- [ ] Replace placeholder blog posts
- [ ] Add real testimonials
- [ ] Update service descriptions
- [ ] Add pricing if desired

### 4. Images

- [ ] Add company logo to /public
- [ ] Add hero images
- [ ] Add service images
- [ ] Update Open Graph image

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Open browser to http://localhost:3000

# Or build and test production
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Then update values for your business.

## Database/Backend Integration (Optional)

To add form submission:

1. **Create API route** (`app/api/contact/route.js`):

   ```javascript
   export async function POST(request) {
     const formData = await request.json();

     // Send email via SendGrid
     // Save to database
     // Sync with CRM

     return Response.json({ success: true });
   }
   ```

2. **Update ContactForm.js** to POST to endpoint

3. **Add provider**:
   - SendGrid for emails
   - MongoDB for database
   - Pipedrive/HubSpot for CRM

## Performance Optimization

### Lighthouse Checklist

- [ ] Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 95+
- [ ] SEO: 100

### Test locally:

```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse
# Run audit
```

## Scaling Your Site

### Add More Cities

1. Edit `lib/cities.js`
2. Add city + neighborhoods
3. Dynamic pages auto-generated
4. Redeploy

### Add More Services

1. Edit `app/services/[service]/page.js`
2. Add service to `serviceData` object
3. Update service lists in components
4. Redeploy

### Add Blog Posts

1. Edit `lib/posts.js`
2. Add post object with content
3. Dynamic pages auto-generated
4. Redeploy

## Troubleshooting

### Site not deploying?

- Check build logs on Vercel/Netlify
- Verify all imports are correct
- Run `npm run build` locally to test

### Form not working?

- Check browser console for errors
- Test form validation
- Add console.log to debug

### Performance issues?

- Run Lighthouse audit
- Optimize images further
- Reduce JavaScript
- Enable caching

### SEO not improving?

- Submit sitemap to Google Search Console
- Wait 2-4 weeks for indexing
- Create more content (blog posts)
- Build backlinks

## Maintenance

### Regular Tasks

- [ ] Monitor form submissions
- [ ] Check for broken links
- [ ] Update testimonials
- [ ] Add new blog posts
- [ ] Monitor analytics

### Monthly

- [ ] Check website performance
- [ ] Review Google Analytics
- [ ] Update content if needed
- [ ] Check search rankings

### Quarterly

- [ ] Add 2-4 new blog posts
- [ ] Update services if changed
- [ ] Review and update copy
- [ ] Plan content strategy

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **SEO Guide:** https://developers.google.com/search/docs
- **Vercel Deployment:** https://vercel.com/docs
- **Performance:** https://web.dev

## Emergency Contacts

If something breaks:

1. Check build logs on hosting platform
2. Run `npm run build` locally to debug
3. Check console errors in browser
4. Verify recent changes to code
5. Roll back last deployment if needed

---

**Deployed successfully?** Great! Now focus on:

1. Content marketing (blog posts)
2. Local SEO (Google My Business)
3. Link building
4. Customer reviews

Good luck with your Rank & Rent business! 🚀
