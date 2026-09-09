export function initialiseCarouselScroll(carouselID, itemSelector = '.carousel-item', intervalTime = 3000)
{
    const carousel = document.getElementById(carouselID);

    if (carousel)
    {
        const items = carousel.querySelectorAll(itemSelector);

        if (items)
        {
            let currentIndex = 0;

            setInterval(() =>
            {
                currentIndex++;

                if (currentIndex >= items.length)
                {
                    currentIndex = 0;
                }

                const item = items[currentIndex];

                carousel.scrollTo(
                    {
                        left: item.offsetLeft - (carousel.offsetWidth / 2) + (item.offsetWidth / 2),
                        behavior: 'smooth'
                    });
            }, intervalTime);
        }
    }
}