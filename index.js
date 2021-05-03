const domElements = {
    navLink: document.querySelector('.right-nav'),
    toggleButton: document.querySelector('.nav-link-toggle'),
    inactive: document.querySelector('.inactive'),
    closeButton: document.querySelector('.close'),
    body: document.querySelector('body'),
    explore: document.querySelector('.explore'),
    courses: document.querySelector('.courses')
}

const displayNav = () => {
    domElements.inactive.classList.add('active');
    domElements.body.classList.add('fit');
}

const closeNav = () => {
    domElements.inactive.classList.remove('active');
    domElements.body.classList.remove('fit');
}

const showCourses = () => {
    console.log('Hey');
    domElements.courses.classList.toggle('show');
}


domElements.toggleButton.addEventListener('click', displayNav);
domElements.closeButton.addEventListener('click', closeNav);
domElements.explore.addEventListener('click', showCourses);