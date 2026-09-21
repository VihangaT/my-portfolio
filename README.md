# Vihanga Liyanage - Developer Portfolio

A modern, responsive developer portfolio showcasing experience as a **Tech Lead**, **AI Agent & Platform Architect**, **Full Stack Engineer (Java, Vue, React)**, and **SRE/DevOps Specialist**.

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js (v16+)
- npm (v7+)

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Local Development Server
You can now run either of the following commands:

```bash
npm run dev
```
*or*
```bash
npm start
```

The application will open automatically at **`http://localhost:3000`**.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This compiles the static assets into the `build/` directory ready for deployment.

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended for GitHub repos)

1. **Install `gh-pages` package**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add homepage to `package.json`**:
   ```json
   "homepage": "https://VihangaT.github.io/my-portfolio",
   ```

3. **Add deploy scripts to `package.json`**:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

---

### Option 2: Vercel (Fastest & Zero Configuration)

1. Sign in to [Vercel](https://vercel.com/).
2. Import your GitHub repository `VihangaT/my-portfolio`.
3. Vercel automatically detects React CRA. Click **Deploy**.

---

### Option 3: Netlify

1. Sign in to [Netlify](https://www.netlify.com/).
2. Click **New Site from Git** and select your repository `VihangaT/my-portfolio`.
3. Set build command to `npm run build` and publish directory to `build`.
4. Click **Deploy Site**.

---

### Option 4: Static Hosting with `serve` (Local or VM Test)

To test the production build locally:

```bash
npx serve -s build
```

---

## 🛠️ Tech Stack

- **Frontend**: React 17, JavaScript (ES6+), Sass / SCSS
- **Typography & Animations**: ityped, Custom Keyframe Animations
- **Icons**: Material-UI Icons
- **Design System**: Dark Mode Slate palette, Glassmorphism, Responsive CSS Flexbox & Grid
