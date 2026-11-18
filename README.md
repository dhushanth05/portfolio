# DEV//SPACE — Dhushanth Srinivasa Portfolio

> A futuristic, interactive personal developer portfolio engineered with **React 19**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Three.js**.

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm install
npm run dev
```
The development server will start at `http://localhost:3000`.

### 2. Build for Production
```bash
npm run build
```
Generates an optimized, chunked production bundle in `dist/`.

---

## 🛠️ Customization & Updating Content

All personal info, skills, experience, project cards, and links are centralized in a single configuration file:

📁 **`src/data/portfolioData.ts`**

### What to update:
1. **Contact & Socials:**
   - Update `email`, `github`, and `linkedin` under `PORTFOLIO_DATA.personal`.
2. **Resume PDF:**
   - Place your official resume PDF in `public/Dhushanth_Srinivasa_Resume.pdf`.
3. **Experience Details:**
   - Update your responsibilities and accomplishments under `PORTFOLIO_DATA.experience`.
4. **Projects:**
   - Fill in your actual project titles, GitHub repositories, and live demo links under `PORTFOLIO_DATA.projects`.

---

## 🌐 Deploy to Vercel (Step-by-Step)

### Option A: Via GitHub (Recommended)
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "feat: complete DEV//SPACE portfolio website"
   ```
2. Push to your GitHub profile:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
4. Import your GitHub repository. Vercel will automatically detect **Vite** as the framework.
5. Click **Deploy**. Your portfolio will be live with free global CDN and HTTPS!

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 🎨 Visual Identity & Architecture
- **Palette:** Deep Midnight (`#030712`, `#060b18`), Electric Cyan (`#00f0ff`), Cyber Violet (`#8b5cf6`).
- **3D Interactive Core:** Interactive Three.js WebGL geometry with mouse tracking and dynamic rotation.
- **Command Palette:** Keyboard-accessible `⌘K` or `Ctrl+K` quick navigation and command interface.
- **Interactive Terminal:** Built-in shell emulator in the About section for interactive profile exploration.
