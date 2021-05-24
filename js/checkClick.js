//Sprawdź, co ma się zdarzyć, gdy gracz kliknął na postać ('e.target' - div z prostokątem klikniętej postaci, 'e.target.dataset.key' - numer prostokąta (numer klikniętej postaci)).
const checkClick = e =>
{
	const figureNo = e.target.dataset.key;

	if(!gameOn) //Jeśli nie nastąpił start rozgrywki.
	{
		const soundNo = e.target.dataset.key + (Math.floor(Math.random() * 5)).toString();
		sound(soundNo, true); //Odtwórz losowy dźwięk klikniętej postaci.
	}
	else //Jeśli rozgrywka trwa.
	{
		clickCounter++; //Zwiększ ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji.
		
		if(figureNo != sequenceNumber[clickCounter - 1]) //Jeśli nr klikniętej postaci jest różny z nr postaci na aktualnej pozycji w sekwencji (czyli gdy gracz wybierze nieprawidłową postać).
		{
			gameInfo.textContent = 'game over';
			
			sound('end'); //Odtwórz dźwięk oznaczający przegraną.
			
			activate(false);
			
            setTimeout(showProperFigure, 1500);
		}
		else //Gdy gracz wybierze prawidłową postać zgodnie z sekwencją.
		{
			const soundNo = sequenceSound[clickCounter - 1];
			sound(soundNo, true); //Odtwórz dźwięk klikniętej postaci zgodny z sekwencją.
			
			if(clickCounter >= sequenceNumber.length) //Gdy zostanie kliknięta ostatnia postać w sekwencji (czyli gdy uda się powtórzyć całą sekwencję).
			{
				gameText('great!');
				
				newFigure();
				
				clickCounter = 0; //Wyzeruj ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji (bo udało się powtórzyć całą sekwencję).
			}
		}
	}
}