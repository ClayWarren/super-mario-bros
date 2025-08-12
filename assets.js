function createSprite(width, height, drawFn) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    drawFn(ctx);
    return canvas;
}

function drawMario(ctx) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(4, 0, 8, 4);
    ctx.fillStyle = '#FFB366';
    ctx.fillRect(2, 4, 12, 6);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(2, 6, 2, 2);
    ctx.fillRect(6, 6, 4, 2);
    ctx.fillRect(12, 6, 2, 2);
    ctx.fillStyle = '#000000';
    ctx.fillRect(4, 6, 2, 2);
    ctx.fillRect(10, 6, 2, 2);
    ctx.fillStyle = '#FFB366';
    ctx.fillRect(6, 8, 4, 2);
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 10, 16, 6);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(2, 12, 2, 4);
    ctx.fillRect(12, 12, 2, 4);
}

function drawSuperMario(ctx) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(4, 0, 8, 4);
    ctx.fillStyle = '#FFB366';
    ctx.fillRect(2, 4, 12, 6);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(2, 6, 2, 2);
    ctx.fillRect(6, 6, 4, 2);
    ctx.fillRect(12, 6, 2, 2);
    ctx.fillStyle = '#000000';
    ctx.fillRect(4, 6, 2, 2);
    ctx.fillRect(10, 6, 2, 2);
    ctx.fillStyle = '#FFB366';
    ctx.fillRect(6, 8, 4, 2);
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 10, 16, 12);
    ctx.fillStyle = '#0066FF';
    ctx.fillRect(2, 22, 12, 10);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(2, 28, 2, 4);
    ctx.fillRect(12, 28, 2, 4);
}

function drawGoomba(ctx) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, 16, 12);
    ctx.fillStyle = '#000000';
    ctx.fillRect(3, 3, 2, 2);
    ctx.fillRect(11, 3, 2, 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(4, 4, 1, 1);
    ctx.fillRect(12, 4, 1, 1);
    ctx.fillStyle = '#654321';
    ctx.fillRect(0, 12, 16, 4);
}

function drawKoopaTroopa(ctx) {
    ctx.fillStyle = '#00AA00';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(2, 2, 12, 6);
    ctx.fillStyle = '#000000';
    ctx.fillRect(4, 4, 2, 2);
    ctx.fillRect(10, 4, 2, 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(5, 5, 1, 1);
    ctx.fillRect(11, 5, 1, 1);
    ctx.fillStyle = '#654321';
    ctx.fillRect(0, 16, 16, 8);
}

function drawKoopaShell(ctx) {
    ctx.fillStyle = '#00AA00';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(2, 2, 12, 12);
    ctx.fillStyle = '#00AA00';
    ctx.fillRect(4, 4, 8, 8);
}

function drawGround(ctx) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#654321';
    for (let i = 0; i < 16; i += 4) {
        for (let j = 0; j < 16; j += 4) {
            ctx.fillRect(i, j, 2, 2);
        }
    }
}

function drawBrick(ctx) {
    ctx.fillStyle = '#CD853F';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, 16, 1);
    ctx.fillRect(0, 8, 16, 1);
    ctx.fillRect(0, 15, 16, 1);
    ctx.fillRect(0, 0, 1, 8);
    ctx.fillRect(8, 0, 1, 8);
    ctx.fillRect(4, 8, 1, 8);
    ctx.fillRect(12, 8, 1, 8);
}

function drawQuestion(ctx) {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(0, 0, 16, 1);
    ctx.fillRect(0, 15, 16, 1);
    ctx.fillRect(0, 0, 1, 16);
    ctx.fillRect(15, 0, 1, 16);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(6, 3, 2, 6);
    ctx.fillRect(4, 5, 6, 2);
    ctx.fillRect(7, 11, 2, 2);
}

function drawQuestionUsed(ctx) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, 16, 16);
    ctx.fillStyle = '#654321';
    for (let i = 0; i < 16; i += 4) {
        for (let j = 0; j < 16; j += 4) {
            ctx.fillRect(i, j, 2, 2);
        }
    }
}

function drawMushroom(ctx) {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 16, 8);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(2, 2, 3, 3);
    ctx.fillRect(11, 2, 3, 3);
    ctx.fillStyle = '#FFB366';
    ctx.fillRect(4, 8, 8, 8);
}

function drawCoin(ctx) {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(4, 0, 8, 16);
    ctx.fillStyle = '#FFA500';
    ctx.fillRect(6, 2, 4, 12);
}

function drawFlagpole(ctx) {
    ctx.fillStyle = '#00AA00';
    ctx.fillRect(14, 0, 2, 144);
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 14, 10);
}

function drawCastle(ctx) {
    ctx.fillStyle = '#8B8B8B';
    ctx.fillRect(0, 40, 80, 40);
    ctx.fillStyle = '#696969';
    ctx.fillRect(0, 20, 20, 20);
    ctx.fillRect(60, 20, 20, 20);
    ctx.fillRect(20, 0, 40, 40);
    ctx.fillStyle = '#000000';
    ctx.fillRect(35, 50, 10, 20);
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(37, 45, 6, 5);
}

function drawFireFlower(ctx) {
    ctx.fillStyle = '#FF4500';
    ctx.fillRect(0, 0, 16, 8);
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(2, 2, 3, 3);
    ctx.fillRect(11, 2, 3, 3);
    ctx.fillStyle = '#00AA00';
    ctx.fillRect(4, 8, 8, 8);
}

function drawFireball(ctx) {
    ctx.fillStyle = '#FF4500';
    ctx.fillRect(2, 2, 12, 12);
    ctx.fillStyle = '#FFFF00';
    ctx.fillRect(4, 4, 8, 8);
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(6, 6, 4, 4);
}

let sprites = null;

export function initializeSprites() {
    if (sprites) return sprites;
    
    sprites = {
        mario: createSprite(16, 16, drawMario),
        superMario: createSprite(16, 32, drawSuperMario),
        marioWalk1: createSprite(16, 16, drawMario),
        marioWalk2: createSprite(16, 16, drawMario),
        marioWalk3: createSprite(16, 16, drawMario),
        marioJump: createSprite(16, 16, drawMario),
        goomba: createSprite(16, 16, drawGoomba),
        goombaWalk1: createSprite(16, 16, drawGoomba),
        goombaWalk2: createSprite(16, 16, drawGoomba),
        goombaSquashed: createSprite(16, 16, (ctx) => {
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(0, 12, 16, 4);
        }),
        koopaTroopa: createSprite(16, 24, drawKoopaTroopa),
        koopaTroopaWalk1: createSprite(16, 24, drawKoopaTroopa),
        koopaTroopaWalk2: createSprite(16, 24, drawKoopaTroopa),
        koopaTroopaShell: createSprite(16, 16, drawKoopaShell),
        ground: createSprite(16, 16, drawGround),
        brick: createSprite(16, 16, drawBrick),
        question: createSprite(16, 16, drawQuestion),
        questionUsed: createSprite(16, 16, drawQuestionUsed),
        mushroom: createSprite(16, 16, drawMushroom),
        coin: createSprite(16, 16, drawCoin),
        flagpole: createSprite(16, 144, drawFlagpole),
        castle: createSprite(80, 80, drawCastle),
        fireFlower: createSprite(16, 16, drawFireFlower),
        fireball: createSprite(16, 16, drawFireball)
    };
    
    return sprites;
}

export function getSprites() {
    if (!sprites) {
        initializeSprites();
    }
    return sprites;
}