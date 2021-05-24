//Podświetl postać. Gdy podesłano argument - e przyjmuje jego wartość i następuje podświetlenie postaci o podesłanym numerze. Gdy nie podesłano argumentu - e.target jest divem, na który najechano kursorem lub z którego zjechano kursorem (patrz funkcja activateFigures() w activateFigures.js) i nastąpi podświetlenie postaci, której ten div dotyczy.
const lightUpFigure = e =>
{
	let figureNo;

	if(typeof(e) === "object") figureNo =  e.target.dataset.key; //Nr diva z prostokątem postaci, na który najechano kursorem.
	else figureNo = e;

	activeFigure.classList.add('game__activeFigure--' + figureNo); //Dodanie klasy, która podświetli postać.
}

//Usuń podświetlenie postaci.
const fadeAwayFigure = e =>
{
	let figureNo;
	
	if(typeof(e) === "object") figureNo =  e.target.dataset.key; //Nr diva z prostokątem postaci, z którego zjechano kursorem.
	else figureNo = e;

    activeFigure.classList.remove('game__activeFigure--' + figureNo); //Zabranie klasy, która podświetlała postać.
}

//Wywołaj funkcję podświetlającą postać i odtwórz dźwięk tej postaci.
const showFigure = index =>
{
	if(index == undefined) //Jeśli nie podesłano żadnego argumentu.
	{ 
		lightUpFigure(sequenceNumber[sequenceNumber.length - 1]); //Podświetl postać, której numer jest ostatni w globalnej tablicy numerów.
		//activeFigure.classList.add('game__activeFigure--' + sequenceNumber[sequenceNumber.length - 1]);

		const soundNo = sequenceSound[sequenceSound.length - 1];
		sound(soundNo, true); //Odtwórz dźwięk, którego numer jest ostatni w tablicy dźwięków.

		setTimeout('fadeAwayFigure(' + sequenceNumber[sequenceNumber.length - 1] + ')', 1000); //Usuń podświetlenie postaci.
	}
	else //Gdy podesłano argument. Potrzebne by podświetlać postać, która powinna zostać kliknięta, gdy wybrano niepoprawną postać.
	{
		lightUpFigure(sequenceNumber[index]); //Podświetl postać, której numer znajduje się na 'index' miejscu w globalnej tablicy numerów.
		//activeFigure.classList.add('game__activeFigure--' + sequenceNumber[index]);

		const soundNo = sequenceSound[index];
		sound(soundNo, true); //Odtwórz dźwięk, której numer znajduje się na 'index' miejscu w globalnej tablicy dźwięków.

		setTimeout('fadeAwayFigure(' + sequenceNumber[index] + ')', 1000); //Usuń podświetlenie postaci.
	}
}

//Pokaż, która postać powinna zostać kliknięta.
const showProperFigure = () =>
{
	gameText('you should have clicked:');
	
	setTimeout('showFigure(' + (clickCounter - 1) + ')', 1000); //Podświetl właściwą postać.
	
	setTimeout(gameOver, 2500);
}

//Dodaj nową postać do sekwencji i wyświetl stosowne informacje o rozgrywce.
const newFigure = () =>
{
	activateFigures(false); //Zablokuj postacie.
	
	drawing(); //Losuj postać.
	
	setTimeout('gameText("remember new character:")', 1000);
	setTimeout(showFigure, 1000);
	setTimeout('gameText("repeat the sequence")', 2000);
	setTimeout(activateFigures, 2000); //Odblokuj postacie.
}
