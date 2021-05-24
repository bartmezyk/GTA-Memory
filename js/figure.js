//Usuń podświetlenie wszystkich postaci (czyli również tej, która jest aktualnie podświetlona).
const clearFigures = () =>
{
	for(i = 0; i < 4; i ++)
	{
		activeFigure.classList.remove('game__activeFigure--' + i)
	}
}

//Podświetl postać i odtwórz jej dźwięk.
const showFigure = index =>
{
	if(index == undefined) //Jeśli nie podesłano żadnego argumentu.
	{ 
		activeFigure.classList.add('game__activeFigure--' + sequenceNumber[sequenceNumber.length - 1]); //Podświetl postać, której numer jest ostatni w globalnej tablicy numerów.

		const soundNo = sequenceSound[sequenceSound.length - 1];
		sound(soundNo, true); //Odtwórz dźwięk, którego numer jest ostatni w tablicy dźwięków.
	}
	else //Gdy podesłano argument. Potrzebne by podświetlać postać, która powinna zostać kliknięta, gdy wybrano niepoprawną postać.
	{
		activeFigure.classList.add('game__activeFigure--' + sequenceNumber[index]); //Podświetl postać, której numer znajduje się na 'index' miejscu w globalnej tablicy numerów.

		const soundNo = sequenceSound[index];
		sound(soundNo, true); //Odtwórz dźwięk, której numer znajduje się na 'index' miejscu w globalnej tablicy dźwięków.
	}
	
	setTimeout(clearFigures, 1000);
}

//Pokaż, która postać powinna zostać kliknięta.
const showProperFigure = () =>
{
	gameText('you should have clicked:');
	
	setTimeout('showFigure(' + (clickCounter - 1) + ')', 1000); //Podświetl właściwą postać.
	
	setTimeout(gameOver, 2500);
}

//Losuj nową postać do sekwencji i wyświetl stosowne informacje o rozgrywce.
const newFigure = () =>
{
	activate(false);
	
	drawing();
	
	setTimeout('gameText("Remember new character")', 1000);
	setTimeout(showFigure, 1000);
	setTimeout('gameText("Repeat the sequence")', 2000);
	setTimeout(activate, 2000);
}
