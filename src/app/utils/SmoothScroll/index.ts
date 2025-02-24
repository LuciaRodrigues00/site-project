export function SmoothScroll() {
    const smoothScroll = (e: any) => {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const scrollOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: scrollOffset - 200,
                behavior: "smooth",
            });
        }
    };

    const anchorLinks = document.querySelectorAll("a[href^='#']");
    anchorLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });

    return () => {
        anchorLinks.forEach((link) => {
            link.removeEventListener("click", smoothScroll);
        });
    };
}