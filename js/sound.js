//Odtwórz dźwięk postaci (gdy 'dialogue' = true) lub inny dźwięk (gdy 'dialogue' = false). Gdy jako pierwszy argument podesłany zostanie nr dźwięku, ten dźwięk zostanie odtworzony. Gdy natomiast jako argument 'name' zostanie podesłany objekt - zostanie odtworzony dźwięk najechania. Takie rozdzielenie jest to potrzebne aby działał mechanizm nadawania i zdejmowania nasłuchiwania na najazd i zjazd kursora dla diva gameMenu (patrz: gamePrepare(), gameStart() i gameOver() w game.js).
const sound = (name, dialogue = false) =>
{
    let sndUrl = 'sound/';

    if(typeof(name) === 'object') name = 'hover';
    else if(dialogue) sndUrl += 'dialogue/'; //Jeśli argument 'dialogue' = true - jest to dialog postaci, więc dodaj w ścieżce dźwięku folder dialogue.

    sndUrl += name + '.wav'; //Dodaj w ścieżce dźwięku nazwę dźwięku.

	const snd = new Audio(sndUrl);
	snd.play();
}