const sequenceNumber = []; //Tablica liczb będących sekwencją numerów postaci do kliknięcia.
const sequenceSound = []; //Tablica liczb będących nazwami dźwięków wydawanych sekwencyjnie przez postacie.

let gameOn = false; //Po rozpoczęciu rozgrywki (kliknięte START GAME) zmienia się na true

let clickCounter = 0; //Ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji.

const gameInfo = document.querySelector('.gameInfo');
const figures = document.querySelectorAll('.game__figure')