import { gameState, setGameState } from './game.js';
import { player } from './player.js';
import { currentLevel, loadLevel, tileSize } from './level.js';
import { enemies } from './enemy.js';
import { powerUps, fireballs } from './powerups.js';
import { camera } from './camera.js';
import { checkCollision } from './collision.js';
import { getSprites } from './assets.js';

const gravity = 0.5; // Fixed gameState assignment - cache refresh
let gameTime = 400; // This should also probably be in a game state file

export function update(ctx, canvas) {
    if (gameState === 'title') {
        // Handle title screen input
        return;
    } else if (gameState === 'gameOver') {
        // Handle game over screen input
        return;
    } else if (gameState === 'worldClear') {
        // Handle world clear screen input
        return;
    }

    // Player movement
    if (player.isMovingLeft) {
        player.velocityX = -player.speed;
        player.direction = 'left';
    } else if (player.isMovingRight) {
        player.velocityX = player.speed;
        player.direction = 'right';
    } else {
        player.velocityX = 0;
    }

    // Player animation
    player.animationTimer++;
    if (player.animationTimer > 10) {
        player.animationFrame++;
        if (player.animationFrame > 2) {
            player.animationFrame = 0;
        }
        player.animationTimer = 0;
    }

    // Apply velocity
    player.x += player.velocityX;
    player.y += player.velocityY;

    // Apply gravity
    player.velocityY += gravity;

    // Update game time
    gameTime -= 1 / 60; // Decrement by 1 second per 60 frames
    if (gameTime <= 0) {
        // Game over logic
        player.lives--;
        if (player.lives < 0) {
            // Show game over screen
            console.log("Game Over!");
        } else {
            // Reset level
            player.x = 100;
            player.y = 200;
            player.velocityY = 0;
            player.isBig = false;
            player.hasFire = false;
            player.height = 32;
            player.coins = 0;
            player.score = 0;
            gameTime = 400;
            loadLevel(`level${player.world}_${player.level}`);
        }
    }

    // Level collision
    player.isJumping = true;
    for (let row = 0; row < currentLevel.length; row++) {
        for (let col = 0; col < currentLevel[row].length; col++) {
            if (currentLevel[row][col] > 0) {
                const tile = {
                    x: col * tileSize,
                    y: row * tileSize,
                    width: tileSize,
                    height: tileSize
                };

                if (checkCollision(player, tile)) {
                    // Collision from the top
                    if (player.velocityY > 0 && player.y + player.height - player.velocityY <= tile.y) {
                        player.y = tile.y - player.height;
                        player.velocityY = 0;
                        player.isJumping = false;
                    }
                    // Collision from the bottom
                    else if (player.velocityY < 0 && player.y - player.velocityY >= tile.y + tile.height) {
                        player.y = tile.y + tile.height;
                        player.velocityY = 0;

                        // Hit block from below
                        if (currentLevel[row][col] === 2 && player.isBig) { // Break brick
                            currentLevel[row][col] = 0;
                            player.score += 50;
                        } else if (currentLevel[row][col] === 3) { // Hit question block
                            currentLevel[row][col] = 4; // Change to used question block
                            player.score += 200;
                            if (player.isBig) {
                                powerUps.push({
                                    x: col * tileSize,
                                    y: (row - 1) * tileSize,
                                    width: 32,
                                    height: 32,
                                    type: 'fireFlower'
                                });
                            } else {
                                powerUps.push({
                                    x: col * tileSize,
                                    y: (row - 1) * tileSize,
                                    width: 32,
                                    height: 32,
                                    type: 'mushroom'
                                });
                            }
                        }
                    }
                    // Collision from the left
                    else if (player.velocityX > 0 && player.x + player.width - player.velocityX <= tile.x) {
                        player.x = tile.x - player.width;
                    }
                    // Collision from the right
                    else if (player.velocityX < 0 && player.x - player.velocityX >= tile.x + tile.width) {
                        player.x = tile.x + tile.width;
                    }
                }

                // Coin collision
                if (currentLevel[row][col] === 5 && checkCollision(player, tile)) {
                    currentLevel[row][col] = 0;
                    player.coins++;
                    player.score += 100;
                }

                // Flagpole collision
                if (currentLevel[row][col] === 6 && checkCollision(player, tile)) {
                    setGameState('worldClear');
                }
            }
        }
    }

    // Enemy movement and animation
    enemies.forEach(enemy => {
        if (enemy.isAlive) {
            if (enemy.type === 'koopa' && enemy.inShell) {
                // Shell behavior
                if (enemy.velocityX !== 0) {
                    // Move shell
                    enemy.x += enemy.velocityX;
                }
            }
            else {
                enemy.x += enemy.velocityX;
                enemy.animationTimer++;
                if (enemy.animationTimer > 15) {
                    enemy.animationFrame++;
                    if (enemy.animationFrame > 1) {
                        enemy.animationFrame = 0;
                    }
                    enemy.animationTimer = 0;
                }
            }
        }
    });

    // Enemy collision with currentLevel
    enemies.forEach(enemy => {
        for (let row = 0; row < currentLevel.length; row++) {
            for (let col = 0; col < currentLevel[row].length; col++) {
                if (currentLevel[row][col] === 1) {
                    const tile = {
                        x: col * tileSize,
                        y: row * tileSize,
                        width: tileSize,
                        height: tileSize
                    };
                    if (checkCollision(enemy, tile) && enemy.x < tile.x + tile.width && enemy.x + enemy.width > tile.x) {
                        enemy.velocityX *= -1;
                    }
                }
            }
        }
    });

    // Player-enemy collision
    enemies.forEach(enemy => {
        if (enemy.isAlive && checkCollision(player, enemy)) {
            // Player jumps on enemy
            if (player.velocityY > 0 && player.y + player.height - player.velocityY <= enemy.y) {
                if (enemy.type === 'koopa') {
                    if (enemy.inShell) {
                        // Kick shell
                        enemy.velocityX = player.direction === 'right' ? 10 : -10;
                    } else {
                        // Stomp koopa
                        enemy.inShell = true;
                        enemy.velocityX = 0;
                        enemy.height = 32;
                    }
                } else {
                    enemy.isAlive = false;
                }
                // stompSound.play(); // Audio will be handled in main.js
                player.score += 100;
                player.velocityY = -player.jumpStrength / 2; // Small bounce
            }
            else {
                // Player gets hit by enemy
                if (player.isBig) {
                    player.isBig = false;
                    player.height = 32;
                } else {
                    player.x = 100;
                    player.y = 200;
                    player.velocityY = 0;
                    player.coins = 0;
                    player.score = 0;
                }
            }
        }
    });

    // Power-up movement
    powerUps.forEach(powerUp => {
        // Basic horizontal movement for mushroom
        if (powerUp.type === 'mushroom') {
            powerUp.x += 1;
        }
    });

    // Player-power-up collision
    powerUps.forEach((powerUp, index) => {
        if (checkCollision(player, powerUp)) {
            if (powerUp.type === 'mushroom') {
                player.isBig = true;
                player.height = 64;
                powerUps.splice(index, 1);
                // powerUpSound.play(); // Audio will be handled in main.js
            } else if (powerUp.type === 'fireFlower') {
                player.hasFire = true;
                powerUps.splice(index, 1);
                // powerUpSound.play(); // Audio will be handled in main.js
            }
        }
    });

    // Fireball movement and collision
    fireballs.forEach((fireball, index) => {
        fireball.x += fireball.velocityX;

        // Fireball-level collision
        for (let row = 0; row < currentLevel.length; row++) {
            for (let col = 0; col < currentLevel[row].length; col++) {
                if (currentLevel[row][col] > 0) {
                    const tile = {
                        x: col * tileSize,
                        y: row * tileSize,
                        width: tileSize,
                        height: tileSize
                    };
                    if (checkCollision(fireball, tile)) {
                        fireballs.splice(index, 1);
                    }
                }
            }
        }

        // Fireball-enemy collision
        enemies.forEach(enemy => {
            if (enemy.isAlive && checkCollision(fireball, enemy)) {
                enemy.isAlive = false;
                fireballs.splice(index, 1);
                player.score += 100;
            }
        });
    });

    // Update camera
    camera.x = player.x - canvas.width / 2;

    // Keep camera in bounds
    if (camera.x < 0) {
        camera.x = 0;
    }

    // Player fall off screen
    if (player.y > canvas.height) {
        player.lives--;
        if (player.lives < 0) {
            setGameState('gameOver');
        } else {
            // Reset player position
            player.x = 100;
            player.y = 200;
            player.velocityY = 0;
            player.isBig = false;
            player.hasFire = false;
            player.height = 32;
            player.coins = 0;
            player.score = 0;
            gameTime = 400;
            loadLevel(`level${player.world}_${player.level}`);
        }
    }

    draw(ctx, canvas);
}

export function draw(ctx, canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const sprites = getSprites();

    if (gameState === 'title') {
        ctx.fillStyle = 'white';
        ctx.font = '40px monospace';
        ctx.fillText('Super Mario Bros. Clone', canvas.width / 2 - 200, canvas.height / 2 - 50);
        ctx.font = '20px monospace';
        ctx.fillText('Press Space to Start', canvas.width / 2 - 100, canvas.height / 2);
    } else if (gameState === 'gameOver') {
        ctx.fillStyle = 'white';
        ctx.font = '40px monospace';
        ctx.fillText('Game Over!', canvas.width / 2 - 100, canvas.height / 2);
    } else if (gameState === 'worldClear') {
        ctx.fillStyle = 'white';
        ctx.font = '40px monospace';
        ctx.fillText('World Clear!', canvas.width / 2 - 100, canvas.height / 2);
    } else {
        ctx.save();
        ctx.translate(-camera.x, -camera.y);

        // Draw currentLevel
        for (let row = 0; row < currentLevel.length; row++) {
            for (let col = 0; col < currentLevel[row].length; col++) {
                let sprite;
                switch (currentLevel[row][col]) {
                    case 1:
                        sprite = sprites.ground;
                        break;
                    case 2:
                        sprite = sprites.brick;
                        break;
                    case 3:
                        sprite = sprites.question;
                        break;
                    case 4:
                        sprite = sprites.questionUsed;
                        break;
                    case 5:
                        sprite = sprites.coin;
                        break;
                    case 6:
                        sprite = sprites.flagpole;
                        break;
                    case 7:
                        sprite = sprites.castle;
                        break;
                }
                if (sprite) {
                    ctx.drawImage(sprite, col * tileSize, row * tileSize, tileSize, tileSize);
                }
            }
        }

        // Draw power-ups
        powerUps.forEach(powerUp => {
            if (powerUp.type === 'mushroom') {
                ctx.drawImage(sprites.mushroom, powerUp.x, powerUp.y, powerUp.width, powerUp.height);
            } else if (powerUp.type === 'fireFlower') {
                ctx.drawImage(sprites.fireFlower, powerUp.x, powerUp.y, powerUp.width, powerUp.height);
            }
        });

        // Draw fireballs
        fireballs.forEach(fireball => {
            ctx.drawImage(sprites.fireball, fireball.x, fireball.y, fireball.width, fireball.height);
        });

        // Draw player
        let marioSprite = player.isBig ? sprites.superMario : sprites.mario;
        if (player.isJumping) {
            marioSprite = sprites.marioJump;
        } else if (player.isMovingLeft || player.isMovingRight) {
            if (player.animationFrame === 0) {
                marioSprite = sprites.marioWalk1;
            } else if (player.animationFrame === 1) {
                marioSprite = sprites.marioWalk2;
            } else {
                marioSprite = sprites.marioWalk3;
            }
        }

        ctx.save();
        if (player.direction === 'left') {
            ctx.scale(-1, 1);
            ctx.drawImage(marioSprite, -player.x - player.width, player.y, player.width, player.height);
        } else {
            ctx.drawImage(marioSprite, player.x, player.y, player.width, player.height);
        }
        ctx.restore();


        // Draw enemies
        enemies.forEach(enemy => {
            let enemySprite;
            if (enemy.type === 'koopa') {
                if (enemy.inShell) {
                    enemySprite = sprites.koopaTroopaShell;
                } else {
                    if (enemy.animationFrame === 0) {
                        enemySprite = sprites.koopaTroopaWalk1;
                    } else {
                        enemySprite = sprites.koopaTroopaWalk2;
                    }
                }
            } else {
                if (enemy.isAlive) {
                    if (enemy.animationFrame === 0) {
                        enemySprite = sprites.goombaWalk1;
                    } else {
                        enemySprite = sprites.goombaWalk2;
                    }
                }
                else {
                    enemySprite = sprites.goombaSquashed;
                }
            }
            ctx.drawImage(enemySprite, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        ctx.restore();

        // Draw UI
        ctx.fillStyle = 'white';
        ctx.font = '20px monospace';
        ctx.fillText(`Score: ${player.score}`, 20, 30);
        ctx.fillText(`Coins: ${player.coins}`, 20, 60);
        ctx.fillText(`World: ${player.world}-${player.level}`, 20, 90);
        ctx.fillText(`Lives: ${player.lives}`, 20, 120);
        ctx.fillText(`Time: ${Math.floor(gameTime)}`, 20, 150);
    }
}
