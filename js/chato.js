const logoDOM = document.querySelector('.logo');
const hamburgerDOM = document.querySelector('.hamburger');

function hamburgerClick() {
    if (logoDOM.classList.contains('big')) {
        logoDOM.classList.remove('big');
    } else {
        logoDOM.classList.add('big');
    }
}

function toggleLogo() {
    logoDOM.classList.toggle('big');
}

// hamburgerDOM.addEventListener('click', hamburgerClick);
hamburgerDOM.addEventListener('click', toggleLogo);