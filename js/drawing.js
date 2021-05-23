//Losuj postać.
const drawing = () =>
{
	let drawedNumber;

	if (sequenceNumber.length==0) drawedNumber = Math.floor(Math.random() * 4); //Gdy pierwszy raz włączamy grę następuje losowanie z wszystkich 4 postaci.
	else //W przeciwnym wypadku poprzednio wylosowana postać ma nie być brana pod uwagę przy aktualnym losowaniu (aby nie zdarzyło się, by ta sama postać była wylosowana kilka razy z rzędu).
	{
		const numbersForDrawing = []; //Tymczasowa tablica numerów postaci.

		for(i = 0; i < 4; i++)
		{
			//Tylko numer postaci poprzednio wylosowanej nie znajdzie sie w tymczasowej tablicy numerów postaci do aktualnego losowania.
			if(i != sequenceNumber[sequenceNumber.length - 1]) numbersForDrawing.push(i);
		}
		const drawedArrayIndex = Math.floor(Math.random() * 3); //Losowanie tylko spośród 3 numerów postaci.
		
		drawedNumber = numbersForDrawing[drawedArrayIndex];
	}
	sequenceNumber.push(drawedNumber); //Umieszczenie wylosowanego nr postaci w globalnej tablicy liczb będących sekwencją numerów postaci do kliknięcia.
	
	const soundNo = drawedNumber + (Math.floor(Math.random() * 5)).toString(); //Losowanie nr dźwięku spośród 5 możliwych i połączenie go z nr wylosowanej postaci.
	sequenceSound.push(soundNo); //Umieszczenie połączonego nr w globalnej tablicy dźwięków wydawanych przez postacie.
}