# Apex Studios Frontend

Premium portfolio website for Apex Studios - featuring elite graphic design and cinematic brand video production services.

## 🎨 Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Smooth scrolling sections (Hero, Services, Portfolio, Pricing, Contact)
- ✅ Dynamic contact form with validation
- ✅ Real-time form submission to backend
- ✅ Success/error messaging
- ✅ Mobile-optimized navigation
- ✅ Professional dark theme with red accents

## 📁 Project Structure

```
apex-frontend/
├── index.html           # Main portfolio page
├── js/
│   └── form-handler.js  # Form submission logic
└── README.md           # This file
```

## 🚀 Getting Started

### Option 1: Local File (No Server Required)

Simply open `index.html` in your browser:

```bash
# On Windows
start index.html

# On Mac
open index.html

# On Linux
xdg-open index.html
```

Or drag and drop `index.html` into your browser.

### Option 2: Local Development Server (Recommended)

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using Live Server (VS Code Extension)
# Click "Go Live" in VS Code
```

Then visit: `http://localhost:8000` (or your server URL)

## 🔌 Backend Integration

The contact form sends data to the backend API endpoint:

**Backend URL**: `http://localhost:5000/api/submit-contact`

### Setup Backend

1. Clone and setup `apex-backend` repository
2. Install dependencies: `npm install`
3. Configure `.env` file with email credentials
4. Start backend server: `npm run dev`

Backend will run on `http://localhost:5000`

### Form Fields Sent to Backend

```javascript
{
  name: string,           // Required
  email: string,          // Required
  phone: string,          // Optional
  company: string,        // Optional
  service: string,        // Required (from dropdown)
  budget: string,         // Optional
  timeline: string,       // Optional
  vision: string          // Required (project description)
}
```

## 📋 Sections

### Hero Section
- Compelling headline and CTA buttons
- Eye-catching gradient background

### Services Section
- Elite Graphic Design
- Professional Brand Video Shoots
- Detailed feature lists

### Portfolio Section
- Case study showcases
- Hover effects and transitions
- Image galleries

### Pricing Section
- Three tier options
- Design Suite ($1,200)
- The Kinetic Brand ($3,500) - Most Popular
- Cinema Only ($2,800)

### Contact Section
- Complete form with validation
- Real-time success/error messages
- Responsive form layout

## 🎯 Customization

### Change Colors
Edit the Tailwind classes in `index.html`:
- Red accent: `text-red-600`, `bg-red-600`, `border-red-600`
- Dark background: `#0a0a0a`, `#121212`

### Update Content
All text is in `index.html` - simply edit:
- Headings and descriptions
- Service details
- Pricing information
- Portfolio case studies

### Add Real Images
Replace placeholder image URLs with your own:
```html
<img src="your-image-url.jpg" alt="description">
```

## 🌐 Deployment

### Deploy to GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Website goes live at `username.github.io/apex-frontend`

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## ⚙️ Troubleshooting

**Issue**: Form not submitting
- Check backend is running on `http://localhost:5000`
- Check browser console for error messages (F12 → Console)
- Make sure `.env` is configured in backend

**Issue**: CORS errors
- Ensure backend has frontend URL in CORS whitelist
- Both frontend and backend must be running

**Issue**: Styling looks different
- Clear browser cache (Ctrl+Shift+Delete)
- Make sure Tailwind CDN is loading (check Network tab)

## 📞 Support

For questions or deployment help, check the backend README or contact the development team.

---

Made with ❤️ by Apex Studios Team
