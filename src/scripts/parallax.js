export function initialiseParallax(elementID, speed = 0.02)
{
    const element = document.getElementById(elementID);

    if (element)
    {
        window.addEventListener('scroll', () =>
        {
            element.style.transform = `translateY(${window.pageYOffset * speed}px)`;
        });
    }
}