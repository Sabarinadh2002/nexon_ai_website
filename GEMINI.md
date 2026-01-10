# Nexon AI Website

## Project Overview

**nexon_ai_website** is a React-based Single Page Application (SPA) designed to showcase the "Nexon-AI Receptionist" product. The application is built using **Vite** for fast development and bundling.

The application architecture is straightforward: the main page (`App.jsx`) composes the website by stacking nine distinct section components (`Section1` through `Section9`) vertically.

### Tech Stack

*   **Framework:** React 19
*   **Build Tool:** Vite 7.2
*   **Styling:** Tailwind CSS (currently loaded via CDN in components)
*   **Icons:** Lucide Icons (currently loaded via CDN in components)
*   **Language:** JavaScript (ES Modules)

## Project Structure

*   **`src/App.jsx`**: The main entry component that orchestrates the layout by rendering `Section1` through `Section9`.
*   **`src/assets/components/`**: Contains the individual section components.
    *   `section1/section1.jsx`: Hero section, Navbar, and introductory content.
    *   `section[2-9]/`: Subsequent sections of the landing page.
*   **`htmlfiles/`**: Contains raw HTML versions of the sections, likely used as prototypes or references for the React components.
*   **`vite.config.js`**: Configuration file for Vite. Includes settings for allowing specific ngrok hosts.

## Building and Running

### Prerequisites
*   Node.js and npm installed.

### Commands

*   **Install Dependencies:**
    ```bash
    npm install
    ```

*   **Start Development Server:**
    ```bash
    npm run dev
    ```
    This starts the Vite development server with Hot Module Replacement (HMR).

*   **Build for Production:**
    ```bash
    npm run build
    ```
    This creates a production-ready build in the `dist` directory.

*   **Preview Production Build:**
    ```bash
    npm run preview
    ```

*   **Lint Code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Component Structure:** Each section of the landing page is a separate React component located in `src/assets/components/sectionX/`.
*   **Styling & scripts:** Note that `Section1` (and potentially others) currently injects Tailwind CSS and Lucide Icons via `<script>` tags in a `useEffect` hook and defines component-specific styles in a `<style>` block within the JSX. Future refactoring might involve moving these to a standard `package.json` based installation for better performance and maintainability.
*   **Assets:** Static assets like images (SVGs) are located in `src/assets/` or `public/`.
