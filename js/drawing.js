const drawing = () =>
{
	let drawedNumber;

	if (sequenceNumber.length==0) drawedNumber = Math.floor(Math.random() * 4); //Gdy pierwszy raz włączamy grę następuje losowanie z wszystkich 4 postaci.
	else //W przeciwnym wypadku poprzednio wylosowana postać ma nie być brana pod uwagę przy kolejnym losowaniu.
	{
		const numbersForDrawing = []; //Tymczasowa tablica numerów postaci

		for(i = 0; i < 4; i++)
		{
			if(i != sequenceNumber[sequenceNumber.length - 1]) ///Tylko numer postaci poprzednio wylosowanej nie znajdzie sie w tymczasowej tablicy numerów postaci do kolejnego losowania.
			{
				numbersForDrawing.push(i);
			}
		}
		const drawedArrayIndex = Math.floor(Math.random() * 3); //Losowanie tylko spośród 3 liczb tym razem.
		
		drawedNumber = numbersForDrawing[drawedArrayIndex];
	}
	sequenceNumber.push(drawedNumber); //Umieszczenie wylosowanego nr postaci w globalnej tablicy liczb będących sekwencją numerów postaci do kliknięcia.
	
	const drawedSound = (Math.floor(Math.random() * 5)).toString(); //Losowanie nr dźwięku spośród 5 możliwych.
	const soundName = drawedNumber+drawedSound; //Powiązanie wylosowanego nr postaci z wylosowanym nr dźwięku.
	sequenceSound.push(soundName); //Umieszczenie połączonego nr w globalnej tablicy dźwięków sekwencyjnie wydawanych przez postacie.
}