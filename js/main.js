const rememberNewCharacter = () =>
{
	gameInfo.textContent = 'remember new character:';
}

const repeatTheSequence = () =>
{
	gameInfo.textContent = 'repeat the sequence';
	
	//Odblokuj prostokąty.
}

const newCharacter = () =>
{
	//Zablokuj prostokąty.
	
	drawing();
	
	setTimeout(rememberNewCharacter,1000);
	setTimeout(showCharacter, 1000);
	setTimeout(repeatTheSequence, 2000);
}

const startGame = () =>
{
    rememberNewCharacter();

    newCharacter();
}

document.querySelector('.startGame').addEventListener('click', startGame);

