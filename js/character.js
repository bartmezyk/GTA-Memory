const clearCharacter = () =>
{
	document.querySelector('[data-key="' + sequenceNumber[sequenceNumber.length - 1] + '"]').classList.remove('game__char--active'); //Usuwa podświetlenie prostokąta postaci, której numer jest ostatni w tablicy numerów.
}

const showCharacter = () =>
{
    document.querySelector('[data-key="' + sequenceNumber[sequenceNumber.length - 1] + '"]').classList.add('game__char--active'); //Podświetla prostokąt postaci, której numer jest ostatni w tablicy numerów.

	let soundUrl = 'sound/dialogue/' + sequenceSound[sequenceSound.length - 1] + '.wav';
	const sound = new Audio(soundUrl);
	sound.play(); //Odtwarza dźwięk, którego nazwa jest ostatnia w tablicy dźwięków.
	
	setTimeout(clearCharacter, 1000);
}
