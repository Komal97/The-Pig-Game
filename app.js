window.addEventListener('load', startGame);

function startGame() {

}
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1 // generate random number between 1 to 6
console.log(dice);