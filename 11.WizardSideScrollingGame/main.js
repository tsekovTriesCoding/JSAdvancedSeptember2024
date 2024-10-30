const gameStar = document.querySelector('.game-start');
const gameScore = document.querySelector('.game-score');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gamePoints = document.querySelector('.points');

gameStar.addEventListener('click', onGameStartClickHandler);

let keys = {};

let player = {
    x: 100,
    y: 150,
    width: 0,
    height: 0,
    lastTimeFireballFired: 0,
    lives: 3,
};

let game = {
    speed: 2,
    movingMultiplier: 4,
    fireballMultiplier: 5,
    fireballCooldown: 1000,
    cloudSpawnInterval: 3000,
    bugSpawnInterval: 1000,
};

let scene = {
    score: 0,
    lastCloudSpawn: 0,
    lastBugSpawn: 0,
    isActiveGame: true,
    bugKillBonusScore: 1000,
};

function onGameStartClickHandler(e) {
    e.currentTarget.classList.add('hide');

    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.x + 'px';
    wizard.style.left = player.y + 'px';
    gameArea.appendChild(wizard);

    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;

    window.requestAnimationFrame(gameAction);
}

document.addEventListener('keydown', OnKeyDownHandler);
document.addEventListener('keyup', OnKeyUpHandler);

function OnKeyDownHandler(e) {
    keys[e.code] = true;
}

function OnKeyUpHandler(e) {
    keys[e.code] = false;
}

function gameAction(timestamp) {
    const wizard = document.querySelector('.wizard');
    const fireballs = document.querySelectorAll('.fire-ball');

    scene.score++;

    const isInAir = (player.y + player.height) <= gameArea.offsetHeight;

    if (isInAir) {
        player.y += game.speed;
    }

    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * game.movingMultiplier;
    }

    if (keys.ArrowDown && isInAir) {
        player.y += game.speed * game.movingMultiplier;
    }

    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.movingMultiplier;
    }

    if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
        player.x += game.speed * game.movingMultiplier;
    }

    if (keys.Space && timestamp - player.lastTimeFireballFired > game.fireballCooldown) {
        wizard.classList.add('wizard-fire');
        addFireball(player);
        player.lastTimeFireballFired = timestamp;

        isCollision(wizard, wizard);
    } else {
        wizard.classList.remove('wizard-fire');
    }

    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';

    gamePoints.textContent = scene.score;
    fireballs.forEach(fireball => {
        fireball.x += game.speed * game.fireballMultiplier;
        fireball.style.left = fireball.x + 'px';

        if (fireball.x + fireball.offsetWidth > gameArea.offsetWidth) {
            fireball.remove();
        }
    });

    if (timestamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        addCloud();
        scene.lastCloudSpawn = timestamp;
    }

    const clouds = document.querySelectorAll('.cloud');

    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';

        if (cloud.x + cloud.offsetWidth <= 0) {
            cloud.remove();
        }
    });

    if (timestamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
        addBug();
        scene.lastBugSpawn = timestamp;
    }

    const bugs = document.querySelectorAll('.bug');

    bugs.forEach(bug => {
        if (isCollision(wizard, bug) && player.lives === 0) {
            gameIsOver();
        } else if (isCollision(wizard, bug)) {
            bug.remove()
            player.lives--;
        }

        fireballs.forEach(fireball => {
            if (isCollision(fireball, bug)) {
                bug.remove();
                fireball.remove();
                scene.score += scene.bugKillBonusScore;
            }
        });

        bug.x -= game.speed;
        bug.style.left = bug.x + 'px';

        if (bug.x + bug.offsetWidth <= 0) {
            bug.remove();
        }
    });

    if (scene.isActiveGame) {
        window.requestAnimationFrame(gameAction);
    }
}

function gameIsOver() {
    scene.isActiveGame = false;
    gameOver.classList.remove('hide');
}

function isCollision(firstElement, secondElement) {
    const firstRect = firstElement.getBoundingClientRect();
    const secondRect = secondElement.getBoundingClientRect();

    return !(firstRect.top > secondRect.bottom ||
        firstRect.bottom < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right)
}

function addBug() {
    const bug = document.createElement('div');

    bug.classList.add('bug');
    bug.x = gameArea.offsetWidth - 60;
    bug.style.left = bug.x + 'px';
    bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
    gameArea.appendChild(bug);
}

function addCloud() {
    const cloud = document.createElement('div');

    cloud.classList.add('cloud');
    cloud.x = gameArea.offsetWidth - 200;
    cloud.style.left = cloud.x + 'px';
    cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
    gameArea.appendChild(cloud);
}

function addFireball(player) {
    const fireball = document.createElement('div');

    fireball.classList.add('fire-ball');
    fireball.style.top = (player.y - player.height / 3 + 50) + 'px';
    fireball.x = player.x + player.width + 5;
    fireball.style.left = fireball.x + 'px';
    gameArea.appendChild(fireball);
}