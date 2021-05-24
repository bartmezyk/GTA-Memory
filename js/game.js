//Wyświetl tekst o rozgrywce podesłany jako argument.
const gameText = text => gameInfo.textContent = text;

//Przygotuj tło do rozgrywki
const gamePrepare = () =>
{
	game.removeEventListener('click', gamePrepare)
	game.classList.remove('game--openingBackground');
	game.classList.add('game--mainGameBackground');
}

//Rozpocznij rozgrywkę.
const gameStart = () =>
{
	startGameBtn.disabled = true; //Dezaktywuj przycisk rozpoczynający rozgrywkę.

	gameOn = true;

	gameText("Remember new character"); //Wyświetl tekst o rozgrywce.

    newFigure();
}

//Wykonaj czynności po przegranej rozgrywce.
const gameOver = () =>
{
    //Przywrócenie wartości startowych.
	gameOn = false;
	clickCounter = 0;
	sequenceNumber.length = 0;
	sequenceSound.length = 0;
	
	gameText('again?');
	
	activate(); //Dodaj możliwość kliknięcia w postacie.
	startGameBtn.disabled = false; //Odblokowanie przycisku rozpoczynającego ponowną rozgrywkę.
}

startGameBtn.addEventListener('click', gameStart);
game.addEventListener('click', gamePrepare)
activate(true);