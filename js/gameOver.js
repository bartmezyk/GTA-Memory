const gameOver = () =>
{
    //Przywrócenie wartości startowych.
	gameOn = false;
	clickCounter = 0;
	sequenceNumber.length = 0;
	sequenceSound.length = 0;
	
	document.querySelector('.startGame').disabled = false;
}