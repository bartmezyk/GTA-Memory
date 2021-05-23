const activate = add =>
{
    document.querySelectorAll('.game__char').forEach(char =>
    {
        if(add) char.addEventListener('click', checkClick);
        else char.removeEventListener('click', checkClick);
    });
}