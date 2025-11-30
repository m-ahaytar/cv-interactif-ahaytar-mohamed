document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link');
    const container = document.querySelector('.sections-container');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
            setActive(link);
        });
    });

    container.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - container.scrollTop;
            if (sectionTop >= 0 && sectionTop < container.clientHeight / 2) {
                current = section.getAttribute('id');
            }
        });
        if (current) {
            const activeLink = document.querySelector(`.nav-link[href="#${current}"]`);
            setActive(activeLink);
        }
    });

    function setActive(activeLink) {
        links.forEach(l => l.classList.remove('active'));
        activeLink.classList.add('active');
    }
});