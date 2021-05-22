const clearCharacter = () =>
{
	document.querySelector('[data-key="' + sequenceNumber[sequenceNumber.length - 1] + '"]').classList.remove('game__char--active'); //Usuwa podświetlenie prostokąta postaci, której numer jest ostatni w tablicy numerów.
}

const showCharacter = number =>
{
	let soundUrl;

	if(number == undefined) //Jesli nie podesłano żadnego argumentu.
	{ 
		document.querySelector('[data-key="' + sequenceNumber[sequenceNumber.length - 1] + '"]').classList.add('game__char--active'); //Podświetla prostokąt postaci, której numer jest ostatni w tablicy numerów.

		soundUrl = 'sound/dialogue/' + sequenceSound[sequenceSound.length - 1] + '.wav';
	}
	else //Potrzebne by pokazywać która postać powinna zostać kliknięta, gdy wybrano niepoprawną postać.
	{
		document.querySelector('[data-key="' + sequenceNumber[number] + '"]').classList.add('game__char--active');
		soundUrl = 'sound/dialogue/' + sequenceSound[number] + '.wav';
	}

	const sound = new Audio(soundUrl);
	sound.play(); //Odtwarza dźwięk, którego nazwa jest ostatnia w tablicy dźwięków.
	
	setTimeout(clearCharacter, 1000);
}

