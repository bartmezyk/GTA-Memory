//Dodaj możliwości kliknięcia i najechania kursorem na postacie (gdy 'on' = true) lub zablokuj takie możliwości (gdy 'on' = false).
const activateFigures = (on = true) =>
{
    figures.forEach(figure =>
    {
        if(on) 
        {
            //Dodaj możliwość kliknięcia w postać.
            figure.addEventListener('click', checkClick);

            //Dodaj podświetlanie postaci po najechaniu kursorem.
            figure.addEventListener('mouseenter', lightUpFigure);

            //Zdejmij podświetlenie postaci po opuszczeniu kursora.
            figure.addEventListener('mouseleave', fadeAwayFigure);

            //Ustaw kursor na pointer.
            figure.classList.remove('game__figure--defaultPointer');
        }
        else 
        {
            //Wyłącz powyżej dodane możliwości.
            figure.removeEventListener('click', checkClick);
            figure.removeEventListener('mouseenter', lightUpFigure);
            figure.removeEventListener('mouseleave', fadeAwayFigure);

            //Ustaw kursor na default.
            figure.classList.add('game__figure--defaultPointer');

            //Usuń podświetlenie postaci.
            clearFigure();
        }
    });
}