const checkClick = e =>
{
	if(!gameOn) //Jeśli nie nastąpił start gry
	{
		console.log('OUT GAME');
		const drawedSound = (Math.floor(Math.random() * 5)).toString();
		const soundName = e.target.dataset.key + drawedSound;
		const soundUrl = 'sound/dialogue/' + soundName + '.wav';
		const sound = new Audio(soundUrl);
		sound.play();
	}
	else
	{
		clickCounter++;
		
		if(e.target.dataset.key != sequenceNumber[clickCounter - 1])
		{
			gameInfo.textContent = 'game over';
			
			const sound = new Audio('sound/end.wav');
			sound.play();
			
			activate(false);
			
            setTimeout(showProperFigure, 1500);
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