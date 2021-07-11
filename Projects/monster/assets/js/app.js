const ATTACK_VALUE_PLAYER = 10;
const ATTACK_VALUE_MONSTER = 10;

const STRONG_ATTACK_VALUE_PLAYER = 20;
const STRONG_ATTACK_VALUE_MONSTER = 20;
const HEALTH_VALUE = 15;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjastHealthBars(chosenMaxLife);

function attackHandler(mode) {

    let maxDamage;
    let maxMonsterDamage;

    if(mode == 'ATTACK'){
        maxDamage = ATTACK_VALUE_PLAYER;
        maxMonsterDamage = ATTACK_VALUE_MONSTER;
    }else{
        maxDamage = STRONG_ATTACK_VALUE_PLAYER;
        maxMonsterDamage = STRONG_ATTACK_VALUE_MONSTER; 
    }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(maxMonsterDamage);
    currentPlayerHealth -= playerDamage;

    if(currentMonsterHealth <=0 && currentPlayerHealth >0){
        alert('شما برنده شدید!');
    }else if(currentMonsterHealth >0 && currentPlayerHealth <=0){
        alert('شما باختید!');
    }else if(currentMonsterHealth <=0 && currentPlayerHealth <=0){
        alert('بازی بدون نتیجه تمام شد!');
    }
}

function playerHealthHandler(){
    increasePlayerHealth(HEALTH_VALUE);
    currentPlayerHealth += HEALTH_VALUE;
}

/// Button event listener

attackBtn.addEventListener("click", function(){
    attackHandler('ATTACK')
});

strongAttackBtn.addEventListener("click", function(){
    attackHandler('STRONG_ATTACK')
});

healthBtn.addEventListener("click", playerHealthHandler);



