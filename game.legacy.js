const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Audio
const jumpSound = document.getElementById('jumpSound');
const stompSound = document.getElementById('stompSound');
const backgroundMusic = document.getElementById('backgroundMusic');
const powerUpSound = document.getElementById('powerUpSound');

// Game variables


// Sprite sheet
const spriteSheet = new Image();
const spriteSheetBase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEACAYAAAD61A8xAAABmUlEQVR4nO3cwQ2AMBQEwTz/n4kJKaCGO3g2z2IcdN213wEAwIeAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABCAABC...ika/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABYSURBVHhe7cEBDQAAAMKg9V/tC2gEAlwAQAJAAgASAEgAIAEgAUACAAkASAAgAUACQAIACTCgAIAEgAQACQAkACABgAQAEgBIAAgASAAgAQAEgAQAIAGABIAEACQA82k9VE49Q2kAAAAASUVORK5CYII=';
spriteSheet.src = spriteSheetBase64;

// Sprite definitions
const sprites = {
    mario: { sx: 209, sy: 0, sw: 16, sh: 16 },
    superMario: { sx: 209, sy: 17, sw: 16, sh: 32 },
    marioWalk1: { sx: 226, sy: 0, sw: 16, sh: 16 },
    marioWalk2: { sx: 243, sy: 0, sw: 16, sh: 16 },
    marioWalk3: { sx: 260, sy: 0, sw: 16, sh: 16 },
    marioJump: { sx: 345, sy: 0, sw: 16, sh: 16 },
    goomba: { sx: 0, sy: 16, sw: 16, sh: 16 },
    goombaWalk1: { sx: 0, sy: 16, sw: 16, sh: 16 },
    goombaWalk2: { sx: 17, sy: 16, sw: 16, sh: 16 },
    goombaSquashed: { sx: 34, sy: 16, sw: 16, sh: 16 },
    koopaTroopa: { sx: 153, sy: 0, sw: 16, sh: 24 },
    koopaTroopaWalk1: { sx: 153, sy: 0, sw: 16, sh: 24 },
    koopaTroopaWalk2: { sx: 170, sy: 0, sw: 16, sh: 24 },
    koopaTroopaShell: { sx: 204, sy: 0, sw: 16, sh: 16 },
    ground: { sx: 0, sy: 0, sw: 16, sh: 16 },
    brick: { sx: 16, sy: 0, sw: 16, sh: 16 },
    question: { sx: 374, sy: 0, sw: 16, sh: 16 },
    questionUsed: { sx: 391, sy: 0, sw: 16, sh: 16 },
    mushroom: { sx: 187, sy: 16, sw: 16, sh: 16 },
    coin: { sx: 374, sy: 17, sw: 16, sh: 16 },
    flagpole: { sx: 425, sy: 0, sw: 16, sh: 144 },
    castle: { sx: 442, sy: 0, sw: 80, sh: 80 },
    fireFlower: { sx: 0, sy: 0, sw: 16, sh: 16 },
    fireball: { sx: 0, sy: 0, sw: 16, sh: 16 }
};

// Player
const player = {
    x: 100,
    y: 200,
    width: 32,
    height: 32,
    velocityX: 0,
    velocityY: 0,
    speed: 5,
    jumpStrength: 12,
    isJumping: false,
    isMovingLeft: false,
    isMovingRight: false,
    animationFrame: 0,
    animationTimer: 0,
    direction: 'right',
    isBig: false,
    hasFire: false,
    coins: 0,
    score: 0,
    lives: 3,
    world: 1,
    level: 1,
    currentLevelComplete: false
};

let currentLevel;
let gameState = 'title';

function loadLevel(currentLevelName) {
    currentLevel = window[currentLevelName];
}

const tileSize = 32;

// Enemy
const enemies = [
    {
        x: 500,
        y: 384,
        width: 32,
        height: 32,
        velocityX: -2,
        animationFrame: 0,
        animationTimer: 0,
        isAlive: true
    },
    {
        x: 700,
        y: 384,
        width: 32,
        height: 48,
        velocityX: -2,
        animationFrame: 0,
        animationTimer: 0,
        isAlive: true,
        type: 'koopa'
    }
];

// Power-ups
const powerUps = [];
const fireballs = [];

// Camera
const camera = {
    x: 0,
    y: 0
};

// Input handling
document.addEventListener('keydown', (e) => {
    if (gameState === 'title') {
        if (e.code === 'Space') {
            gameState = 'playing';
            loadLevel(`level${player.world}_${player.level}`);
            backgroundMusic.play();
        }
        return;
    }

    if (player.currentLevelComplete) return;
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

function checkCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

function update() {
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
                    gameState = 'worldClear';
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
            } else {
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
                stompSound.play();
                player.score += 100;
                player.velocityY = -player.jumpStrength / 2; // Small bounce
            } else {
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
                powerUpSound.play();
            } else if (powerUp.type === 'fireFlower') {
                player.hasFire = true;
                powerUps.splice(index, 1);
                powerUpSound.play();
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
            gameState = 'gameOver';
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

    draw();
    requestAnimationFrame(update);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
                    ctx.drawImage(spriteSheet, sprite.sx, sprite.sy, sprite.sw, sprite.sh, col * tileSize, row * tileSize, tileSize, tileSize);
                }
            }
        }

        // Draw power-ups
        powerUps.forEach(powerUp => {
            if (powerUp.type === 'mushroom') {
                const sprite = sprites.mushroom;
                ctx.drawImage(spriteSheet, sprite.sx, sprite.sy, sprite.sw, sprite.sh, powerUp.x, powerUp.y, powerUp.width, powerUp.height);
            } else if (powerUp.type === 'fireFlower') {
                const sprite = sprites.fireFlower;
                ctx.drawImage(spriteSheet, sprite.sx, sprite.sy, sprite.sw, sprite.sh, powerUp.x, powerUp.y, powerUp.width, powerUp.height);
            }
        });

        // Draw fireballs
        fireballs.forEach(fireball => {
            const sprite = sprites.fireball;
            ctx.drawImage(spriteSheet, sprite.sx, sprite.sy, sprite.sw, sprite.sh, fireball.x, fireball.y, fireball.width, fireball.height);
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
            ctx.drawImage(spriteSheet, marioSprite.sx, marioSprite.sy, marioSprite.sw, marioSprite.sh, -player.x - player.width, player.y, player.width, player.height);
        } else {
            ctx.drawImage(spriteSheet, marioSprite.sx, marioSprite.sy, marioSprite.sw, marioSprite.sh, player.x, player.y, player.width, player.height);
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
                } else {
                    enemySprite = sprites.goombaSquashed;
                }
            }
            ctx.drawImage(spriteSheet, enemySprite.sx, enemySprite.sy, enemySprite.sw, enemySprite.sh, enemy.x, enemy.y, enemy.width, enemy.height);
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

spriteSheet.onload = function() {
    update();
};