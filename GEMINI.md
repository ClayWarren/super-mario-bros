# Super Mario Bros. Clone

This project is a clone of the classic Super Mario Bros. game, built using HTML, CSS, and JavaScript.

## Project Status

The following features have been implemented:

*   **Player:** Movement (left, right, jump), animations (idle, walk, jump), and power-ups (mushroom for Super Mario).
*   **Enemies:** Goombas with walking animation and death sequence.
*   **Level:** A single level with ground, brick, and question mark blocks. The level also includes coins.
*   **Gameplay:** Collision detection, stomping enemies, breaking bricks as Super Mario, collecting coins, and a scoring system.
*   **Sound:** Sound effects for jumping and stomping enemies.
*   **UI:** A simple UI to display the score and coin count.
*   **Level End:** A flagpole and castle to complete the level.

## Files

*   `index.html`: The main HTML file.
*   `style.css`: CSS for styling the game.
*   `main.js`: The main entry point for the game.
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
*   `game.legacy.js`: The original monolithic game logic file (for reference).

## Notes

*   The sprite sheet is embedded in `main.js` and sound effects are embedded in `index.html` as base64 strings to keep the project self-contained.
*   Due to browser security restrictions (CORS policy), the game must be served from a local web server to load JavaScript modules correctly. Refer to `README.md` for instructions on how to run a local web server.