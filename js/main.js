const gameInfo = document.querySelector('.gameInfo');

const rememberNewCharacter = () =>
{
	gameInfo.textContent('remember new character:');
}

const repeatTheSequence = () =>
{
	gameInfo.textContent('repeat the sequence');
	
	//Odblokuj prostokąty.
}

const newCharacter = () =>
{
	//Zablokuj prostokąty.
	
	//Losuj postać.
	
	setTimeout(rememberNewCharacter,1000);
	////Pokaż postać za 1000ms.
	setTimeout(repeatTheSequence, 2000);
}

const startGame = () =>
{
    rememberNewCharacter();

    newCharacter();
}

document.querySelector('.startGame').addEventListener('click', startGame);

