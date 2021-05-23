//Usuń podświetlenie wszystkich postaci (czyli również tej, która jest aktualnie podświetlona).
const clearCharacter = () =>
{
	figures.forEach(figure =>
	{
		figure.classList.remove('game__figure--active');
	});
}

//Podświetl postać i odtwórz jej dźwięk.
const showCharacter = index =>
{
	let soundUrl;

	if(index == undefined) //Jesli nie podesłano żadnego argumentu.
	{ 
		document.querySelector('[data-key="' + sequenceNumber[sequenceNumber.length - 1] + '"]').classList.add('game__figure--active'); //Podświetl postać, której numer jest ostatni w globalnej tablicy numerów.

		soundUrl = 'sound/dialogue/' + sequenceSound[sequenceSound.length - 1] + '.wav';
	}
	else //Gdy podesłano argument. Potrzebne by podświetlać postać, która powinna zostać kliknięta, gdy wybrano niepoprawną postać.
	{
		document.querySelector('[data-key="' + sequenceNumber[index] + '"]').classList.add('game__figure--active'); //Podświetl postać, której numer znajduje się na 'index' miejscu w globalnej tablicy numerów.

		soundUrl = 'sound/dialogue/' + sequenceSound[index] + '.wav';
	}

	const sound = new Audio(soundUrl);
	sound.play(); //Odtwarza dźwięk, którego numer jest ostatni w tablicy dźwięków.
	
	setTimeout(clearCharacter, 1000); //Usuń podświetlenie za 1s.
}

