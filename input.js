import { gameState, setGameState } from './game.js';
import { loadLevel } from './level.js';
import { player } from './player.js';
import { fireballs } from './powerups.js';

export function setupInput(jumpSound, backgroundMusic) {
    document.addEventListener('keydown', (e) => {
        if (gameState === 'title') {
            if (e.code === 'Space') {
                setGameState('playing');
                loadLevel(`level${player.world}_${player.level}`);
                backgroundMusic.play();
                // Start the game loop
                if (window.startGameLoop) {
                    window.startGameLoop();
                }
            }
            return; // Exit the function if in title state
        }

        if (player.currentLevelComplete) return; // Exit if level is complete

        switch (e.code) {
            case 'ArrowLeft':
                player.isMovingLeft = true;
                break;
            case 'ArrowRight':
                player.isMovingRight = true;
                break;
            case 'Space':
                if (!player.isJumping) {
                    player.velocityY = -player.jumpStrength;
                    player.isJumping = true;
                    jumpSound.play();
                }
                break;
            case 'ShiftLeft':
                if (player.hasFire) {
                    fireballs.push({
                        x: player.direction === 'right' ? player.x + player.width : player.x,
                        y: player.y + player.height / 2,
                        width: 16,
                        height: 16,
                        velocityX: player.direction === 'right' ? 10 : -10
                    });
                }
                break;
        }
    });

    document.addEventListener('keyup', (e) => {
        if (gameState !== 'playing') return;
        if (player.currentLevelComplete) return;
        switch (e.code) {
            case 'ArrowLeft':
                player.isMovingLeft = false;
                break;
            case 'ArrowRight':
                player.isMovingRight = false;
                break;
        }
    });
}