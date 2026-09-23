# Journal

A small interactive journal built with React and Vite. The project explores page-turning interactions and state-driven UI, with the goal of creating a digital journal that feels closer to a physical notebook than a conventional web page.

## ✨ Features

- Two-page journal layout
- Previous/next page navigation
- Animated page turning with CSS 3D transforms
- Journal entries stored separately from the UI
- Animation state managed with React hooks
- Responsive component-based structure

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **JavaScript (ES Modules)**
- **CSS 3D transforms**
- **ESLint**

## 📁 Project Structure

```text
journal/
├── src/
│   ├── components/
│   │   ├── FlippingPage.jsx
│   │   └── JournalPage.jsx
│   ├── data/
│   │   └── journalEntries.js
│   └── App.jsx
├── public/
├── package.json
└── vite.config.js
```

## 🚀 Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

To create a production build:

```bash
npm run build
```

To run the linter:

```bash
npm run lint
```

## 🧠 What I'm Exploring

This project is mainly a frontend experiment. The most interesting part is the page-turn interaction: the visible page content, animation state, and navigation state need to stay synchronized while a CSS transition is running.

The current implementation uses `requestAnimationFrame` to ensure the browser paints the initial page state before starting the rotation, and `onTransitionEnd` to commit the page change only after the animation finishes.

## 🔭 Possible Next Steps

- Add animated backward page turns
- Improve mobile/responsive behavior
- Add richer journal entry layouts
- Add persistence for real journal entries
- Refactor inline styles into reusable styling
- Add tests for navigation and page-turn state

## 📌 Status

This is an active personal frontend project and a place to experiment with React state, component structure, and interactive UI behavior.
