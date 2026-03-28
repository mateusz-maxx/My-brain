# My Digital Garden 🌱

A personal website for sharing thoughts, opinions, and lessons. Built with React + Vite.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open http://localhost:5173 in your browser
```

## Editing Your Content

All your content lives in one file: **`src/DigitalGarden.jsx`**

Look for the `NOTES` object near the top of the file. Each note looks like this:

```js
advice: {
  id: "advice",
  title: "Advice",
  icon: "◇",
  section: "advice",
  content: `# Advice & Opinions

Your markdown content here...

Link to other notes with [[noteId]] syntax.`,
  connections: ["welcome", "books", "wharton", "work"],
},
```

To edit content: change the `content` string.  
To add a new page: add a new entry to the `NOTES` object.  
To link between pages: use `[[noteId]]` in your content.  
To update connections: edit the `connections` array (used for backlinks + graph).

## Deploy to Vercel (Free)

### Option A: Via GitHub (Recommended)

1. Create a GitHub repo and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/my-garden.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click "Add New Project" → Import your repo

4. Click "Deploy" — that's it!

5. Every time you push changes to GitHub, Vercel auto-deploys.

### Option B: Direct Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Custom Domain

In your Vercel dashboard:
1. Go to your project → Settings → Domains
2. Add your custom domain (e.g., `brain.yourname.com`)
3. Update your DNS records as instructed

## Project Structure

```
my-garden/
├── index.html              # HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── .gitignore
├── README.md
└── src/
    ├── main.jsx            # React entry point
    ├── index.css           # Global CSS reset
    ├── App.jsx             # App wrapper
    └── DigitalGarden.jsx   # ⭐ All your content & UI lives here
```

## Features

- 🌗 Dark / Light mode
- 🔗 Wiki-style `[[links]]` between notes
- ↩️ Backlinks (see which notes link to the current one)
- 🕸️ Interactive graph view
- ⏮️ Browser-style back/forward navigation
- 📱 Mobile responsive
- ⚡ Fast — static site, no server needed
