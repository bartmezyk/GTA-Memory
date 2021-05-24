//Wyświetl tekst o rozgrywce w divie .gameMenu.
const gameText = text => gameMenu.textContent = text;

//Przygotuj tło do rozgrywki
const gamePrepare = () =>
{
	game.classList.remove('game--openingBackground');
	game.classList.add('game--mainGameBackground');
	game.removeEventListener('click', gamePrepare)

	gameText('start game');
	gameMenu.addEventListener('click', gameStart);
	gameMenu.classList.add('gameMenu--active');
	gameMenu.addEventListener('mouseenter', sound);

	activateFigures(true);
}


//Rozpocznij rozgrywkę.
const gameStart = () =>
{
	gameOn = true;

	gameText("Remember new character"); //Wyświetl tekst o rozgrywce.
	gameMenu.removeEventListener('click', gameStart);
	gameMenu.classList.remove('gameMenu--active');
	gameMenu.classList.add('gameMenu--deactive');
	gameMenu.removeEventListener('mouseenter', sound);
	sound('click');
	

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
	gameMenu.addEventListener('click', gameStart);
	gameMenu.classList.add('gameMenu--active');
	gameMenu.classList.remove('gameMenu--deactive');
	gameMenu.addEventListener('mouseenter', sound);
	
	activateFigures(); //Dodaj możliwość kliknięcia w postacie.
}

game.addEventListener('click', gamePrepare)