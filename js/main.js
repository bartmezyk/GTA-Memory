const rememberNewCharacter = () =>
{
	gameInfo.textContent = 'remember new character:';
}

const repeatTheSequence = () =>
{
	gameInfo.textContent = 'repeat the sequence';
	
	activate(true);
}

const newCharacter = () =>
{
	activate(false);
	
	drawing();
	
	setTimeout(rememberNewCharacter,1000);
	setTimeout(showCharacter, 1000);
	setTimeout(repeatTheSequence, 2000);
}

const startGame = () =>
{
	document.querySelector('.startGame').disabled = true;

	gameOn = true;

    rememberNewCharacter();

    newCharacter();
}

document.querySelector('.startGame').addEventListener('click', startGame);

activate(true);
