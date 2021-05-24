//Odtwórz dźwięk postaci (gdy 'dialogue' = true) lub inny dźwięk (gdy 'dialogue' = false).
const sound = (name, dialogue = false) =>
{
    let sndUrl = 'sound/';
    if(typeof(name) == 'object')
    {
        name = 'hover';
    }
    
    if(dialogue) sndUrl += 'dialogue/'; //Jeśli argument 'dialogue' = true - jest to dialog postaci, więc dodaj w ścieżce dźwięku folder dialogue.
    sndUrl += name + '.wav';
	const snd = new Audio(sndUrl);
	snd.play();
}