# Mario Engine (React + HTML5 Canvas)

A scalable, component-based 2D platformer engine built with React and Vite. 
Designed to handle the distinct mechanics of Super Mario Bros 1, 2, and 3 through modular game data, decoupled physics, and dynamic level parsing.

## Architecture & Design
- **Rendering:** HTML5 `<canvas>` via `requestAnimationFrame` for consistent 60FPS performance, bypassing React's standard DOM reconciliation cycle.
- **State Management:** Mutable game state is held inside React `useRef` hooks to maintain the game loop independently of the UI layer.
- **Entity Model:** Built using primitive hitboxes first to isolate physics and collision logic before binding visual sprite assets.

## Setup Instructions
1. Clone the repository via SSH.
2. Run `npm install` to download dependencies.
3. Run `npm run dev` to start the local Vite development server on `http://localhost:5173/`.