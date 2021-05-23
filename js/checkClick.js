//Sprawdź, co ma się zdarzyć, gdy gracz kliknął na postać ('e.target' - div z prostokątem klikniętej postaci, 'e.target.dataset.key' - numer prostokąta (numer klikniętej postaci)).
const checkClick = e =>
{
	if(!gameOn) //Jeśli nie nastąpił start rozgrywki.
	{
		const drawedSound = (Math.floor(Math.random() * 5)).toString();
		const soundName = e.target.dataset.key + drawedSound;
		const soundUrl = 'sound/dialogue/' + soundName + '.wav';
		const sound = new Audio(soundUrl);
		sound.play(); //Odtwórz losowy dźwięk klikniętej postaci.
	}
	else //Jeśli rozgrywka trwa.
	{
		clickCounter++; //Zwiększ ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji.
		
		if(e.target.dataset.key != sequenceNumber[clickCounter - 1]) //Jeśli nr klikniętej postaci jest różny z nr postaci na aktualnej pozycji w sekwencji (czyli gdy gracz wybierze nieprawidłową postać).
		{
			gameInfo.textContent = 'game over';
			
			const sound = new Audio('sound/end.wav');
			sound.play(); //Odtwórz dźwięk oznaczający przegraną.
			
			activate(false); //Zablokuj możliwość kliknięcia w postacie.
			
            setTimeout(showProperFigure, 1500); //Pokaż, która postać powinna zostać kliknięta za 1.5s.
		}
		else //Gdy gracz wybierze prawidłową postać zgodnie z sekwencją.
		{
			const soundUrl = 'sound/dialogue/' + sequenceSound[clickCounter - 1] + '.wav';
			const sound = new Audio(soundUrl);
			sound.play(); //Odtwórz dźwięk klikniętej postaci zgodny z sekwencją.
			
			if(clickCounter >= sequenceNumber.length) //Gdy zostanie kliknięta ostatnia postać w sekwencji (czyli gdy uda się powtórzyć całą sekwencję).
			{
				gameText('great!');
				
				newFigure();
				
				clickCounter = 0; //Wyzeruj ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji (bo udało się powtórzyć całą sekwencję).
			}
		}
	}
}