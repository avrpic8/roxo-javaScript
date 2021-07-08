
// progress bars
const monsterHealth = document.getElementById('monster-health');
const playerHealth = document.getElementById('player-health');
const bonusLife = document.getElementById('bonus-life');


// buttons
const atackBtn = document.getElementById('atack-btn');
const strongAtackBtn = document.getElementById('strong-atack-btn');
const healthBtn = document.getElementById('health-btn');
const logBtn = document.getElementById('log-btn');

// functions

function adjastHealthBars(maxLife) {
    monsterHealth.max = maxLife;
    monsterHealth.width = maxLife;

    playerHealth.max = maxLife;
    playerHealth.width = maxLife;
}

function dealMonsterDamage(damage) {
    const dealDamage = Math.random() * damage;
    monsterHealth.value =+ monsterHealth.value - dealDamage;
    return dealDamage;
}

function dealPlayerDamage(damage) {
    const dealDamage = Math.random() * damage;
    playerHealth.value =+ playerHealth.value - dealDamage;
    return dealDamage;
}

function increasePlayerHealth(healValue) {
    playerHealth =+ playerHealth.value + healValue; 
}

function resetGame(value) {
    monsterHealth.value = value;
    playerHealth.value = value;
}

function removeBonusLife() {
    bonusLife.parentNode.replaceChild(bonusLife);
}

function setPlayerhealth(health) {
    playerHealth.value = health;
}