const yearElement = document.getElementById('footer__year');
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `&#169; ${currentYear}`;
