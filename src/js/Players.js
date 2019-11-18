import { elements } from './helpers';

export default class Players {
    constructor(roll, cur, total, canPlay, player) {
        this.rollScore = roll;
        this.currentScore = cur;
        this.totalScores = total;
        this.canPlay = canPlay; // Boolean
        this.player = player; // 0 / 1 
    }

    rollDice() {
        /* Rolling the dice */
        const dice = Math.ceil(Math.random() * 6);
        elements.rollDice.setAttribute("xlink:href", `img/sprite.svg#icon-dice${dice}`);
        if (dice != 1) {
            this.currentScore += dice;
            console.log(`Dice score : ${dice}, Current : ${this.currentScore}`);
            console.log(this.totalScores);
            document.getElementById(`current-${this.player}`).innerHTML = this.currentScore;

            return this.currentScore;
        } else {
            console.error("You pick 1, You lose fuckers");
            this.currentScore = 0;
            this.canPlay = ! this.canPlay;
            this.holdScore();
        }
    }

    holdScore() {
        /* Holding */
        this.totalScores += this.currentScore;
        this.currentScore = 0;
        document.getElementById(`current-${this.player}`).innerHTML = 0;
        console.log(`Current : ${this.currentScore} ; Total : ${this.totalScores}`);
        document.getElementById(`score-${this.player}`).innerHTML = this.totalScores;
        document.getElementById(`player-current-${this.player}`).classList.remove("red-box");
        if (this.totalScores >= 30) {
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

