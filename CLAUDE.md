# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Game
```bash
# Start local web server (Python 3)
python3 -m http.server

# Alternative with Node.js serve
npm install -g serve
serve
```

The game must be served through a local web server due to CORS restrictions with ES6 modules. Access via `http://localhost:8000` (Python) or `http://localhost:3000` (serve).

## Architecture Overview

This is a modular Super Mario Bros. clone built with vanilla JavaScript ES6 modules and HTML5 Canvas. The architecture follows a component-based pattern where each system is isolated in its own module.

### Core Systems

- **main.js**: Entry point that initializes the game, loads the sprite sheet (base64 encoded), and starts the game loop
- **gameLoop.js**: Contains the main `update()` and `draw()` functions that handle all game logic and rendering
- **game.js**: Manages global game state (`'title'`, `'gameOver'`, `'worldClear'`)

### Game Components

- **player.js**: Player object with position, physics properties, power-up states, and game progression
- **enemy.js**: Enemy entities (Goombas, Koopa Troopas) with AI and collision behaviors
- **powerups.js**: Power-up items (mushrooms, fire flowers) and fireball projectiles
- **level.js**: Level loading system that imports level data from levels.js
- **levels.js**: Level definitions as 2D tile arrays

### Utility Systems

- **assets.js**: Sprite coordinate definitions for the base64-encoded sprite sheet
- **camera.js**: Camera system that follows the player horizontally
- **input.js**: Keyboard input handling for player movement and actions
- **collision.js**: Collision detection utilities using bounding box method

### Key Technical Details

- **Sprite Management**: All sprites are loaded from a single base64-encoded image in main.js, with coordinates defined in assets.js
- **Module Exposure**: Core objects are exposed to `window` for debugging (gameState, player, enemies, etc.)
- **Physics**: Gravity-based physics with collision detection against tile-based level geometry
- **Game States**: Simple state machine handling title screen, gameplay, game over, and world clear states
- **Audio**: HTML audio elements are referenced but sound effects are commented out in the game loop

### Level System

Levels are defined as 2D arrays where each number represents a tile type:
- 0: Empty space
- 1: Ground/solid block
- 2: Breakable brick
- 3: Question block
- 4: Used question block
- 5: Coin
- 6: Flagpole (level end)
- 7: Castle

### Player Mechanics

- Movement with left/right arrow keys, jump with spacebar
- Power-up progression: Small Mario → Super Mario (mushroom) → Fire Mario (fire flower)
- Collision-based interaction with enemies (stomp to defeat, shell kicking for Koopas)
- Lives system with level reset on death