
# 🌐 Universal Proposal Generator

A modern and customizable proposal generator built using **React.js**, **Tailwind CSS**, and **Lucide Icons** — designed to create instant, beautiful, professional proposals for your clients in Hindi-English format.

![App Screenshot](https://raw.githubusercontent.com/niteshpawar97/proposal-generator/refs/heads/master/public/screenshort.png)

---

## 🚀 Features

- 📄 **Instant Proposal HTML Download** – Click a button and save ready-to-send proposals.
- 🌍 **Supports Multiple Project Types** – Website, E-Commerce, Mobile App, ERP, Transport.
- 🧾 **Hindi-English Mixed Pitch** – Business language tailored for Indian clients.
- 🎨 **Fully Responsive UI** – Styled beautifully using Tailwind CSS.
- ⚡ **Lucide Icons Integration** – Clean, modern, SVG-based icons.
- 💾 **No Backend Required** – Works entirely in the browser with no server.

---

## 📦 Tech Stack

- [React.js](https://reactjs.org/) (v19+)
- [Tailwind CSS](https://tailwindcss.com/) (v3.3.2)
- [Lucide React Icons](https://lucide.dev/)
- HTML Blob File Generator (No backend or database needed)

---

## 🛠️ Installation

Clone the repo and install dependencies:

```bash
# Clone the repository
git clone https://github.com/niteshpawar97/proposal-generator.git
cd proposal-generator

# Install packages
npm install

# Run development server
npm start
````

Then open [http://localhost:3000](http://localhost:3000) in your browser to use the app.

---

## 📁 Folder Structure

```
proposal-generator/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
```

---

## 🧩 Tailwind CSS Setup

Tailwind is pre-configured. If you need to update styles, use:

```js
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

In `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📤 Deployment

Easily deploy on:

* [Vercel](https://vercel.com/)
* [Netlify](https://www.netlify.com/)
* [GitHub Pages](https://pages.github.com/)

---

## 👤 Author

**Nitesh Kadve**
Full Stack Developer, [Niket Group](https://www.niketgroup.in)
📱 Mobile: +91-8821861409
📧 Email: [niteshpawar97@gmail.com](mailto:niteshpawar97@gmail.com)
🌐 GitHub: [@niteshpawar97](https://github.com/niteshpawar97)

---

## 📃 License

This project is open-source and available under the [MIT License](LICENSE).

---
