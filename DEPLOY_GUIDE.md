# 🚀 ANUKUL Client Presentation & Vercel Deployment Guide

All **5 Homepage Design Concepts** are now linked and presented through an interactive, high-end **Client Review Portal** featuring smooth **hover-to-scroll mockups**, **device previews**, **dual-concept comparison**, and a **floating presentation bar** on every page.

---

## 🌟 What Was Built

1. **`index.html` (Master Client Presentation Hub)**
   - **Hover-to-Scroll Effect**: Hovering over any design mockup automatically and smoothly scrolls down through the entire page from top to bottom (like an agency reel). Moving the mouse out smoothly glides back up.
   - **Speed Multipliers**: Client can toggle between `Slow (0.7x)`, `Normal (1.0x)`, and `Fast (1.6x)` scroll speeds.
   - **Mode Switcher**: Toggle between `Auto-Glide Mode` (hands-free hover scrolling) and `Cursor-Track Mode` (scrubbing down the page with cursor movement).
   - **Responsive Device Hub**: Click any card or "Device Hub" to test the design inside Desktop (`1440px`), Laptop (`1024px`), Tablet (`768px`), or Mobile (`390px iPhone`) frames.
   - **Dual Concept Side-by-Side Comparison**: Compare any two concepts (e.g., Concept 1 vs. Concept 5) side-by-side with synchronized scrolling.
   - **Layout Grid Toggles**: Switch between 3 Cards, 2 Large Cards, or Single Focus view.

2. **`presentation-bar.js` (Floating Client Bar on All 5 Pages)**
   - Included in `home1.html`, `home2.html`, `home3.html`, `home4.html`, and `home5.html`.
   - Adds a floating glassmorphic pill bar at the bottom:
     - `[ ⊞ Overview ]` → returns to the showcase hub (`index.html`).
     - `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` → switches instantly between concepts with active glow.
     - `[ Next → ]` → jump to the next design.
     - `—` minimize button to hide the bar for unobstructed screenshots.
   - **Top Reading Progress Bar**: Real-time gradient progress line at the very top of each page.
   - **Back to Top Button**: Floating circular button appears on scroll.

3. **`vercel.json`**
   - Configured with `cleanUrls: true`, `X-Frame-Options: SAMEORIGIN` (enables seamless iframe mockups on your domain), and caching headers.

---

## ⚡ How to Deploy to Vercel (3 Quick Ways)

### Method 1: Instant 60-Second Deploy via Vercel CLI (Recommended)

1. Open PowerShell or Terminal in this folder (`c:\Users\0610s\Music\Anshul\anuhome`).
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the 3 prompts:
   - *Set up and deploy?* Press **Y** and Enter.
   - *Which scope?* Select your Vercel account.
   - *Link to existing project?* Type **N** (or press Enter).
   - *What's your project's name?* Type `anukul-clinic-designs` (or any name).
   - *In which directory is your code located?* Press Enter (`./`).
   - *Want to modify settings?* Type **N** (press Enter).
4. Within 30 seconds, Vercel will output your live URL:
   ```
   https://anukul-clinic-designs.vercel.app
   ```
5. For production URL, run:
   ```bash
   npx vercel --prod
   ```

---

### Method 2: Via GitHub & Vercel Dashboard

1. In this folder, initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Anukul Clinic 5 Homepage Designs with Hover Scrolling"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/anukul-clinic.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [vercel.com/new](https://vercel.com/new), select your GitHub repository, and click **Deploy**.

---

### Method 3: Drag & Drop via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New...** -> **Project**.
3. Drag and drop this folder (`anuhome`) directly into the Vercel dashboard.
4. Click **Deploy**.

---

## 📋 File Architecture

```text
anuhome/
├── index.html            # Master Client Presentation Showcase (Root page on Vercel)
├── home1.html            # Concept 1: Architectural Grid & Vedic Biology
├── home2.html            # Concept 2: Centered Majestic Sanctuary
├── home3.html            # Concept 3: Minimalist Monastic Balance
├── home4.html            # Concept 4: Modern Architectural Monograph & Overlap
├── home5.html            # Concept 5: Luxury Nocturnal Gold & Deep Emerald
├── presentation-bar.js   # Shared client floating switcher, progress bar & back-to-top
├── vercel.json           # Vercel static routing & security headers
└── DEPLOY_GUIDE.md       # This guide
```

---

## 🎯 Presentation Tips for Your Client

- **Primary Link to Send**: Send the root URL (`https://your-project.vercel.app/`). It opens the showcase portal with all 5 mockups.
- **Auto-Scroll Demo**: Tell the client: *"Simply hover your mouse over any of the 5 cards to watch the page auto-scroll down smoothly!"*
- **Device Simulator**: Show them the **Device Hub** button to demonstrate how their website looks on iPhone, iPad, and MacBook screens.
- **Side-by-Side Comparison**: Open the **Compare** modal if they want to contrast the Light Parchment design against the Dark Luxury design.
