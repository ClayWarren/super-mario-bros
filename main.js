// Removed import of loadSpriteSheet from assets.js
import { initializeSprites } from './assets.js';
import { gameState } from './game.js';
import { loadLevel, currentLevel, tileSize } from './level.js';
import { player } from './player.js';
import { enemies } from './enemy.js';
import { powerUps, fireballs } from './powerups.js';
import { camera } from './camera.js';
import { setupInput } from './input.js';
import { update, draw } from './gameLoop.js';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Audio
const jumpSound = document.getElementById('jumpSound');
const stompSound = document.getElementById('stompSound');
const backgroundMusic = document.getElementById('backgroundMusic');
const powerUpSound = document.getElementById('powerUpSound');

// Initialize input handling
setupInput(jumpSound, backgroundMusic);

// Game loop function
let gameRunning = false;
function gameLoop() {
    update(ctx, canvas);
    if (gameRunning) {
        requestAnimationFrame(gameLoop);
    }
}

// Function to start the game loop
function startGameLoop() {
    if (!gameRunning) {
        gameRunning = true;
        gameLoop();
    }
}

// Function to draw single frame (for title screen)
function drawFrame() {
    draw(ctx, canvas);
}

// Initialize sprites and game - draw initial title screen
const sprites = initializeSprites();
console.log("Canvas sprites initialized.");
drawFrame();

// Expose game control functions
window.startGameLoop = startGameLoop;
window.drawFrame = drawFrame;

// Expose necessary variables for debugging or global access if needed
window.gameState = gameState;
window.player = player;
window.enemies = enemies;
window.powerUps = powerUps;
window.fireballs = fireballs;
window.camera = camera;
window.currentLevel = currentLevel;
window.loadLevel = loadLevel;
window.tileSize = tileSize;
window.sprites = sprites;
window.jumpSound = jumpSound;
window.stompSound = stompSound;
window.backgroundMusic = backgroundMusic;
window.powerUpSound = powerUpSound;
window.update = update;
window.draw = draw;