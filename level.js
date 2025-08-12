import { level1_1 } from './levels.js';

export let currentLevel;

export function loadLevel(currentLevelName) {
    // Use a map or switch to load the correct level based on name
    switch (currentLevelName) {
        case 'level1_1':
            currentLevel = level1_1;
            break;
        default:
            console.warn(`Level ${currentLevelName} not found.`);
            currentLevel = []; // Set an empty level or a default one
            break;
    }
}

export const tileSize = 32;