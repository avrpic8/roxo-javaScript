const ATTACK_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjastHealthBars(chosenMaxLife);

attackBtn.addEventListener("click", function () {
    dealMonsterDamage(ATTACK_VALUE);
});

