const activateChar = () =>
{
    document.querySelectorAll('.game__char').forEach(() =>
    {
        char.addEventListener('click', checkClick);
    });
}

const deactivateChar = () =>
{
    document.querySelectorAll('.game__char').forEach(() =>
    {
        char.removeEventListener('click', checkClick);
    });
}