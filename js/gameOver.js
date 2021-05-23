const gameOver = () =>
{
    //Przywrócenie wartości startowych.
	gameOn = false;
	clickCounter = 0;
	sequenceNumber.length = 0;
	sequenceSound.length = 0;
	
	gameInfo.textContent = 'again?';
	activate(true);
	document.querySelector('.startGame').disabled = false;
}