import { elements } from './helpers';

export default class Players {

    constructor(roll, cur, total, canPlay, player, finalScore = 30) {

        this.rollScore = roll;
        this.currentScore = cur;
        this.totalScores = total;
        this.canPlay = canPlay; // Boolean
        this.player = player; // 0 / 1 

        this.finalScore = finalScore;

    }

    rollDice() {
        /* Rolling the dice */

        const dice1 = Math.ceil(Math.random() * 6);
        const dice2 = Math.ceil(Math.random() * 6);
        elements.classDice1.setAttribute("xlink:href", `img/sprite.svg#icon-dice${dice1}`);
        elements.classDice2.setAttribute("xlink:href", `img/sprite.svg#icon-dice${dice2}`);

        /* 
            * double 6 in a row
            * roll 1 of two dices
        */ 
        if (dice1 != 1 && dice2 != 1 && !(dice1 === 6 && dice2 === 6)) {
            this.currentScore += (dice1 + dice2);
            document.getElementById(`current-${this.player}`).innerHTML = this.currentScore;
    
            return this.currentScore;
            
        } else if (dice1 ===1 || dice2 === 1) {
            this.currentScore = 0;
            this.canPlay = ! this.canPlay;
            this.holdScore();

        } else if (dice1 === 6 && dice2 === 6) {
            this.currentScore = 0;
            this.totalScores = 0;
            this.canPlay = ! this.canPlay;
            document.getElementById(`player-current-${this.player}`).classList.remove("red-box");
            document.getElementById(`current-${this.player}`).innerHTML = this.currentScore;
            document.getElementById(`score-${this.player}`).innerHTML = this.totalScores;
        }
    }

    holdScore() {
        /* Holding */
        this.totalScores += this.currentScore;
        this.currentScore = 0;
        document.getElementById(`current-${this.player}`).innerHTML = 0;

        document.getElementById(`score-${this.player}`).innerHTML = this.totalScores;
        document.getElementById(`player-current-${this.player}`).classList.remove("red-box");
        if (this.totalScores >= this.finalScore) {
            document.getElementById('wins').innerHTML = `Player ${this.player} wins!!`; // TODO: change players
            window.location.href="#popup1";
            elements.btnRoll.classList.add("hide");
            elements.btnHold.classList.add("hide");
        }
    }

    playerInit() {
        this.rollScore = 0;
        this.currentScore = 0;
        this.totalScores = 0;
        document.getElementById(`current-${this.player}`).innerHTML = this.currentScore;
        document.getElementById(`score-${this.player}`).innerHTML = this.totalScores;
    }
};

