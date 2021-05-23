//Dodaj możliwość kliknięcia w postacie (gdy 'click' = true) lub zablokuj taką możliwość (gdy 'click' = false).
const activate = (click = true) =>
{
    figures.forEach(figure =>
    {
        if(click) figure.addEventListener('click', checkClick);
        else figure.removeEventListener('click', checkClick);
    });
}