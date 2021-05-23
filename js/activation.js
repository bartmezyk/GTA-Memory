const activteChar = () =>
{
    document.querySelectorAll('.game__char').forEach((char, index) =>
    {
        char.addEventListener('click', () =>
        {
            checkClick(index);
        })
    })
}

const deactivteChar = () =>
{
    document.querySelectorAll('.game__char').forEach((char, index) =>
    {
        char.removeEventListener('click');
    })
}