const properChar = () =>
{
    gameInfo.textContent = 'you should have clicked:';
	
	setTimeout('showCharacter(' + (clickCounter - 1) + ')', 1000);
	
	setTimeout(gameOver, 2500);
}

const checkClick = e =>
{
	const number = e.target.dataset.key;

	if(!gameOn) //Jeśli nie nastąpił start gry
	{
		console.log('OUT GAME');
		const drawedSound = (Math.floor(Math.random() * 5)).toString();
		const soundName = number + drawedSound;
		const soundUrl = 'sound/dialogue/' + soundName + '.wav';
		const sound = new Audio(soundUrl);
		sound.play();
	}
	else
	{
		clickCounter++;
		
		if(number != sequenceNumber[clickCounter - 1])
		{
			gameInfo.textContent = 'game over';
			
			const sound = new Audio('sound/end.wav');
			sound.play();
			
			activate(false);
			
            setTimeout(properChar, 1500);
		}
		else
		{
			const soundUrl = 'sound/dialogue/' + sequenceSound[clickCounter - 1] + '.wav';
			const sound = new Audio(soundUrl);
			sound.play();
			
			if(clickCounter >= sequenceNumber.length)
			{
				gameInfo.textContent = 'great!';
				
				newCharacter();
				
				clickCounter = 0;
			}
		}
	}
}