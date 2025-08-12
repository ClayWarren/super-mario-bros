# Super Mario Bros. Clone

A simple clone of the classic Super Mario Bros. game, built with HTML, CSS, and JavaScript.

## Features

*   Player movement (running and jumping)
*   A level with platforms, bricks, and question mark blocks
*   Enemies (Goombas)
*   Power-ups (mushrooms)
*   Combat (stomping enemies, breaking bricks)
*   Coins and scoring
*   Sound effects
*   A level end condition (flagpole and castle)

## Project Structure

The project has been refactored into a modular structure for better organization and maintainability:

*   `index.html`: The main HTML file.
*   `style.css`: CSS for styling the game.
*   `main.js`: The main entry point for the game, responsible for initializing the game and setting up the game loop.
*   `assets.js`: Manages loading and accessing game assets (sprite sheet, sprites).
*   `game.js`: Manages global game state variables.
*   `level.js`: Manages current level data and loading levels.
*   `levels.js`: Contains definitions for various game levels.
*   `player.js`: Manages the player's state and behavior.
*   `enemy.js`: Manages the enemies' state and behavior.
*   `powerups.js`: Manages power-ups and fireballs.
*   `camera.js`: Manages the game camera.
*   `input.js`: Handles player input.
*   `collision.js`: Provides collision detection logic.
*   `gameLoop.js`: Contains the core game loop logic (update and draw functions).

## How to Play

*   **Arrow Keys:** Move left and right
*   **Spacebar:** Jump

## How to Run

To run the game, you need to serve the files using a local web server due to browser security restrictions (CORS policy) when loading JavaScript modules directly from the filesystem.

**Using Python (recommended for simplicity):**

1.  Make sure you have Python installed (most systems do).
2.  Open your terminal or command prompt.
3.  Navigate to the root directory of this project (`/Users/claywarren/super/`).
4.  Run the following command:
    ```bash
    python3 -m http.server
    ```
    This will start a simple HTTP server on port 8000 (or another available port).
5.  Open your web browser and go to `http://localhost:8000` (or the address shown in your terminal).

**Using Node.js (if you have Node.js installed):**

1.  Install `serve` globally: `npm install -g serve`
2.  Navigate to the root directory of this project.
3.  Run the command: `serve`
4.  Open your web browser and go to the address shown in your terminal (usually `http://localhost:3000`).

Once the server is running, open `index.html` through the server's address.