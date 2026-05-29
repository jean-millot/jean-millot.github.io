function loadProject(projectFile, targetEl) {

    fetch(projectFile).then(res => {
        if (res.ok) {
            return res.text();
        }
    })
    .then(htmlResult => {
        targetEl.innerHTML = htmlResult;
    });
}

function pauseModalVideo(modal, frame){

    var frameSrc = frame.getAttribute("src");

    modal.addEventListener('show.bs.modal', (event) => {
        frame.setAttribute("src", frameSrc);
    });

    modal.addEventListener('hide.bs.modal', (event) => {
        frame.setAttribute("src", "");
    });
}

window.addEventListener('DOMContentLoaded', event => {
    const navEl = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 56) {
            navEl.classList.add('navbar-scrolled');
        }
        else if (window.scrollY < 56) {
            navEl.classList.remove('navbar-scrolled');
        }
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarNav .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Pause video when closing modals
    pauseModalVideo(document.getElementById("songsAndVoicesModal"), document.getElementById('songAndVoicesVideo'));
});
