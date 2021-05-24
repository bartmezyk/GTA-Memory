//Dodaj możliwości kliknięcia i najechania kursorem na postacie (gdy 'on' = true) lub zablokuj takie możliwości (gdy 'on' = false).
const activate = (on = true) =>
{
    figures.forEach((figure, index) =>
    {
        if(on) 
        {
            //Dodaj możliwość kliknięcia w postać.
            figure.addEventListener('click', checkClick);

            //Dodaj podświetlanie postaci po najechaniu kursorem.
            figure.addEventListener('mouseenter', lightUpFigure);

            //Zdejmij podświetlenie postaci po opuszczeniu kursora.
            figure.addEventListener('mouseleave', fadeAwayFigure);
        }
        else 
        {
            //Wyłącz powyżej dodane możliwości.
            figure.removeEventListener('click', checkClick);
            figure.removeEventListener('mouseenter', lightUpFigure);
            figure.removeEventListener('mouseleave', fadeAwayFigure);
            clearFigures();
        }
    });
}