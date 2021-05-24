const sequenceNumber = []; //Globalna tablica liczb będących sekwencją numerów postaci do kliknięcia.
const sequenceSound = []; //Globalna tablica liczb będących numerami dźwięków wydawanych przez postacie.

let gameOn = false; //Po rozpoczęciu rozgrywki (kliknięcie START GAME) zmienia się na true.

let clickCounter = 0; //Ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji.

const figures = document.querySelectorAll('.game__figure');
const gameInfo = document.querySelector('.gameInfo');
const startGameBtn = document.querySelector('.startGame');
const game = document.querySelector('.game');
const activeFigure = document.querySelector('.game__activeFigure');