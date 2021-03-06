/*jshint esversion: 8 */
/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

export const elements = {
    playerScoreOne: document.getElementById('score-1'),
    playerScoreTwo: document.getElementById('score-2'),
    playerCurrentOne: document.getElementById('current-1'),
    playerCurrentTwo: document.getElementById('current-2'),
    playerBox0: document.getElementById('player-current-1'),
    playerBox1: document.getElementById('player-current-2'),
    rollDice: document.getElementById('dice'),
    rollDice1: document.getElementById('dice1'),
    rollDice2: document.getElementById('dice2'),
    classDice1: document.querySelector('.dice1'),
    classDice2: document.querySelector('.dice2'),
    newGame: document.querySelectorAll('.new_game'),
    btnNew: document.querySelector('.btn-new'),
    btnRoll: document.querySelector('.btn-roll'),
    btnHold: document.querySelector('.btn-hold'),
    btnHide: document.querySelector('.pop-up'), 
    inputValue: document.getElementById('form__field')

};