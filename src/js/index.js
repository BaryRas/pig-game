/*jshint esversion: 8 */
import '../sass/styles.scss';
import sprite from "../img/sprite.svg";
import Players from './Players';
import { elements } from './helpers';

/* Create players */
const chan = new Players(0, 0, 0, true, 1);
const lee = new Players(0, 0, 0, false, 2);

document.getElementById(`player-current-${chan.player}`).classList.add("red-box");

    elements.btnRoll.addEventListener("click", e => {

        if (chan.canPlay) {
            chan.rollDice();
            if (chan.canPlay === false) {
                lee.canPlay = true;
                toggle(lee.player);

            }    
        } else {
            lee.rollDice();
            if (lee.canPlay === false) {
                chan.canPlay = true;
                toggle(chan.player);

            } 
        }  
    });
    
    elements.btnHold.addEventListener("click", e => {
        e.stopImmediatePropagation();
        if (chan.canPlay) {
            chan.holdScore();
            toggle(lee.player);
            tooglePlayer()   
        } else {
            lee.holdScore();
            toggle(chan.player);
            tooglePlayer() 
        } 
    });

// New Game Handler
elements.newGame.forEach(el => {
    el.addEventListener("click", newGame)
})


function newGame() {
    chan.playerInit();
    lee.playerInit();
    window.location.href="#popup2";
    document.getElementById("submit").addEventListener("click", e => {
        const value = parseInt(elements.inputValue.value);
        chan.finalScore = value;
        lee.finalScore = value;
        elements.btnRoll.classList.contains("hide") ? elements.btnRoll.classList.remove("hide") : elements.btnRoll.className("btn-roll");
        elements.btnHold.classList.contains("hide") ? elements.btnHold.classList.remove("hide") : elements.btnHold.className("btn-roll"); 
        elements.rollDice.classList.add("hide");
        elements.rollDice1.classList.remove("hide");
        elements.rollDice2.classList.remove("hide");
    
    });
}

function toggle(player) {
    document.getElementById(`player-current-${player}`).classList.add("red-box");
    document.getElementById(`player-${chan.player}`).classList.toggle("active");
    document.getElementById(`player-${lee.player}`).classList.toggle("active");
}

function tooglePlayer() {
    chan.canPlay = ! chan.canPlay;
    lee.canPlay = ! lee.canPlay;
}