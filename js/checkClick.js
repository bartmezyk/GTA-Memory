const properChar = () =>
{
    gameInfo.textContent = 'you should have clicked:';
	
	setTimeout('showCharacter(' + (clickCounter - 1) + ')', 1000);
	
	setTimeout(gameOver, 2000);
}

const checkClick = number =>
{
	if(!gameOn) //Jeśli nie nastąpił start gry
	{
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
			
			//Zablokuj prostokąty.
			
            setTimeout(properChar, 1500);
			//Wskaż jaki prostokąt powinien zostać kliknięty za 1500ms (bo tyle cj wypowiada kwestię 'Ah shit here we go again.')
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

document.querySelectorAll('.game__char').forEach((char, index) =>
{
    char.addEventListener('click', ()=>
    {
        checkClick(index);
    })
})