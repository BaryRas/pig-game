/*jshint esversion: 8 */
import '../sass/styles.scss';
import sprite from "../img/sprite.svg";
import Players from './Players';
import { elements } from './helpers';

/* Create players */
const chan = new Players(0, 0, 0, true, 1);
const lee = new Players(0, 0, 0, false, 2);

// function game () {
    document.getElementById(`player-current-${chan.player}`).classList.add("red-box");

    elements.btnRoll.addEventListener("click", e => {
        if (chan.canPlay) {
            chan.rollDice();
            if (chan.canPlay === false) {
                lee.canPlay = true;
                document.getElementById(`player-current-${lee.player}`).classList.add("red-box");
            }
            console.log(`Iam chan ${chan.canPlay}`);    
        } else {
            lee.rollDice();
            if (lee.canPlay === false) {
                chan.canPlay = true;
                document.getElementById(`player-current-${chan.player}`).classList.add("red-box");
            }
            console.log(`Iam lee ${lee.canPlay}`);   
        }  
    });
    
    elements.btnHold.addEventListener("click", e => {
        e.stopImmediatePropagation();
        if (chan.canPlay) {
            chan.holdScore();
            document.getElementById(`player-current-${lee.player}`).classList.add("red-box");
            chan.canPlay = ! chan.canPlay;
            lee.canPlay = ! lee.canPlay;
            console.log(`Iam chan ${chan.canPlay}`);    
        } else {
            lee.holdScore();
            document.getElementById(`player-current-${chan.player}`).classList.add("red-box");
            lee.canPlay = ! lee.canPlay;
            chan.canPlay = ! chan.canPlay;
            console.log(`Iam lee ${lee.canPlay}`);   
        } 
    });
     
// };

// game();

// window.location.href="#popup1"; window.close();

elements.newGame.addEventListener("click", init);
elements.btnNew.addEventListener("click", init);



function init() {
    chan.playerInit();
    lee.playerInit();
    elements.rollDice.setAttribute("xlink:href", `img/sprite.svg#icon-dice`);
    elements.btnRoll.classList.contains("hide") ? elements.btnRoll.classList.remove("hide") : elements.btnRoll.className("btn-roll");
    elements.btnHold.classList.contains("hide") ? elements.btnHold.classList.remove("hide") : elements.btnHold.className("btn-roll"); 
}



