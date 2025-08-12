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
*   `game.js`: The core game logic, including the game loop, physics, collision detection, and rendering.

## Notes

*   The sprite sheet and sound effects are embedded in the `game.js` and `index.html` files as base64 strings to keep the project self-contained.
