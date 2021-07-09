// progress bars
const monsterHealth = document.getElementById('monster-health');
const playerHealth = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');


// buttons
const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-atack-btn');
const healthBtn = document.getElementById('health-btn');
const logBtn = document.getElementById('log-btn');

// functions
function adjastHealthBars(maxLife) {
    monsterHealth.setAttribute('aria-valuemax',  maxLife);
    monsterHealth.style.width = maxLife.toString() + "%";
    playerHealth.setAttribute('aria-valuemax', maxLife);
    playerHealth.style.width = maxLife.toString() + "%";
}

function dealMonsterDamage(damage) {
    const dealDamage = Math.random() * damage;
    let currentHealth = parseInt(monsterHealth.style.width);
    monsterHealth.style.width = (currentHealth - dealDamage) + "%";
}

function dealPlayerDamage(damage) {
    const dealDamage = Math.random() * damage;
    let currentHealth = parseInt(playerHealth.style.width);
    playerHealth.style.width = (currentHealth + dealDamage) + "%";
    return dealDamage;
}

function increasePlayerHealth(healValue) {
    playerHealth.value =+ playerHealth.value + healValue;
}

function resetGame(value) {
    monsterHealth.value = value;
    playerHealth.value = value;
}

function removeBonusLife() {
    bonusLife.parentNode.replaceChild(bonusLife);
}

function setPlayerHealth(health) {
    playerHealth.value = health;
}

