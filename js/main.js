const startGame = () =>
{
	document.querySelector('.startGame').disabled = true;

	gameOn = true;

	gameText("Remember new character");

    newFigure();
}

document.querySelector('.startGame').addEventListener('click', startGame);

activate(true);
