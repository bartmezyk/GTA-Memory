//Wyświetl tekst o rozgrywce w divie .gameMenu.
const gameText = text => gameMenu.textContent = text;

//Przygotuj tło do rozgrywki
const gamePrepare = () =>
{
	game.removeEventListener('click', gamePrepare);
	game.classList.remove('game--openingBackground');
	game.classList.add('game--mainGameBackground'); //Zmień tło na tło z postaciami przy stole.

	gameMenu.addEventListener('click', gameStart);
	gameMenu.classList.add('gameMenu--active'); //Div gameMenu staje się aktywny.
	gameMenu.addEventListener('mouseenter', sound);

	gameText('start game');

	activateFigures(); //Odblokuj postacie.
}

//Rozpocznij rozgrywkę.
const gameStart = () =>
{
	gameOn = true;

	gameMenu.removeEventListener('click', gameStart);
	gameMenu.classList.remove('gameMenu--active');
	gameMenu.classList.add('gameMenu--deactive'); //Div gameMenu staje się nieaktywny.
	gameMenu.removeEventListener('mouseenter', sound);

	sound('click');

	gameText("remember new character:");

    newFigure(); //Dodaj nową postać do sekwencji.
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
	gameMenu.classList.remove('gameMenu--deactive');
	gameMenu.classList.add('gameMenu--active'); //Div gameMenu staje się aktywny.
	gameMenu.addEventListener('mouseenter', sound);
	
	activateFigures(); //Odblokuj postacie.
}

game.addEventListener('click', gamePrepare);