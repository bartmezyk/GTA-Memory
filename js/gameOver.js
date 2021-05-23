//Wykonaj czynności po przegranej rozgrywce.
const gameOver = () =>
{
    //Przywrócenie wartości startowych.
	gameOn = false;
	clickCounter = 0;
	sequenceNumber.length = 0;
	sequenceSound.length = 0;
	
	gameText('again?');
	
	activate(true); //Dodaj możliwość kliknięcia w postacie.
	document.querySelector('.startGame').disabled = false; //Odblokowanie przycisku rozpoczynającego ponowną rozgrywkę.
}