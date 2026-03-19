# Love, Care, or Harm? – Understanding AI Companions
**AIDM7350 Group Project**

> A digital exploration into the complexities of human-AI relationships, examining the boundaries between intimacy, dependency, and potential harm.

---

## 📖 Project Overview
This project is a modern, responsive Single-Page Application (SPA) designed to present research findings on AI companionship. It guides users through a structured narrative covering factual data, academic reviews, common misconceptions (debunks), and curated resources.

The goal is to provide a balanced perspective on how AI companions are reshaping contemporary digital life.

## ✨ Key Features
- **Immersive Hero Section**: Featuring a "breathing" wave animation and staggered text reveal powered by **Framer Motion**.
- **Seamless Navigation**: Smooth-scrolling anchor navigation connecting four core content modules:
  - **Facts**: Quantitative data and definitions.
  - **Reviews**: Critical analysis from literature.
  - **Debunks**: Addressing myths and misunderstandings.
  - **Links**: A curated library of academic papers, news, and support tools.
- **Modern UI/UX**: Built with **Tailwind CSS v4**, featuring a custom color palette (Olive, Rose, Charcoal, Off-white) and responsive grid layouts.
- **Dynamic Content**: Content is managed via JSON data files for easy updates without touching the UI code.

## 🛠️ Tech Stack
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Heroicons & Custom SVG

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/2578922967-hash/AIDM7350_Group_Project.git
   cd AIDM7350_Group_Project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## 📂 Project Structure
```text
src/
├── components/       # Reusable UI components
│   ├── Hero.jsx      # Landing section with animations
│   ├── LinksSection.jsx # Categorized resource links with custom animations
│   ├── ArticleCard.jsx  # Card component for content previews
│   └── Navbar.jsx    # Sticky navigation with mobile menu
├── data/             # Content data sources
│   ├── links.json    # External resource URLs
│   └── outline.json  # Main content structure
└── App.jsx           # Main application layout
```

## 👥 Contributors (Roles)
- **Richyy**
- **Small7**
- **Big7**
- **LIN**

## 📄 License
This project is created for educational purposes within the **AIDM7350** course. All rights reserved by the project team.
