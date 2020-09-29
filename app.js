window.addEventListener('load', startGame);

function startGame() {
    init();
    document.querySelector('.btn-roll').addEventListener('click', rollDice);
    document.querySelector('.btn-hold').addEventListener('click', holdAndUpdateGlobalScore);
    document.querySelector('.btn-new').addEventListener('click', init);
}

var scores, roundScore, activePlayer, gamePlaying;

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice').style.display = 'none';
    document.getElementById('score-0').innerHTML = '0';
    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('score-1').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';
    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

function rollDice() {

    if (gamePlaying) {
        let dice = Math.floor(Math.random() * 6) + 1 // generate random number between 1 to 6
        let diceDom = document.getElementById('dice');

        //display result
        diceDom.style.display = 'block';
        diceDom.src = 'images/dice-' + dice + '.jpg';

        // update round score if dice rolled is not 1
        if (dice !== 1) {
            // add score
            roundScore += dice;
            document.getElementById('current-' + activePlayer).innerHTML = roundScore;

        } else {
            // next player turn
            nextPlayer();
        }
    }
}

function holdAndUpdateGlobalScore() {

    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        roundScore = 0;

        // update UI
        document.getElementById('score-' + activePlayer).innerHTML = scores[activePlayer];

        //check if player wins or not
        if (scores[activePlayer] >= 100) {
            document.getElementById('name-' + activePlayer).innerHTML = 'WINNER !';
            document.getElementById('dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.getElementById('current-0').innerHTML = '0';
            document.getElementById('current-1').innerHTML = '0';
            gamePlaying = false;

        } else {
            // next player turn 
            nextPlayer();
        }
    }
}

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').innerHTML = '0';
    document.getElementById('current-1').innerHTML = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice').style.display = 'none';
}