const gameText = (text, activateClick = false) =>
{
	gameInfo.textContent = text;

    if(activateClick) activate(true);
}