//Sprawdź, co ma się zdarzyć, gdy gracz kliknął na postać ('e.target' - ukryty div z prostokątem klikniętej postaci).
const checkClick = e =>
{
	const figureNo = e.target.dataset.key; //Numer prostokąta (numer klikniętej postaci).

	if(!gameOn) //Jeśli nie nastąpił start rozgrywki.
	{
		const soundNo = figureNo + (Math.floor(Math.random() * 5)).toString();
		sound(soundNo, true); //Odtwórz losowy dźwięk klikniętej postaci.
	}
	else //Jeśli rozgrywka trwa.
	{
		clickCounter++; //Zwiększ ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji.
		
		if(figureNo != sequenceNumber[clickCounter - 1]) //Gdy gracz wybierze nieprawidłową postać.
		{
			gameText('game over');
			
			sound('end'); //Odtwórz dźwięk oznaczający przegraną.
			
			activateFigures(false); //Zablokuj postacie.
			
            setTimeout(showProperFigure, 1500); //Pokaż, która postać powinna zostać kliknięta.
		}
		else //Gdy gracz wybierze prawidłową postać zgodnie z sekwencją.
		{
			const soundNo = sequenceSound[clickCounter - 1];
			sound(soundNo, true); //Odtwórz dźwięk klikniętej postaci zgodny z sekwencją.
			
			if(clickCounter >= sequenceNumber.length) //Gdy uda się powtórzyć całą sekwencję.
			{
				gameText('great!');
				
				newFigure(); //Dodaj nową postać do sekwencji.
				
				clickCounter = 0; //Wyzeruj ilość poprawnych kliknięć z rzędu na postacie w pojedynczej sekwencji (bo udało się powtórzyć całą sekwencję).
			}
		}
	}
}