const yearElement = document.getElementById('footer__year');
const currentYear = new Date().getFullYear();
currentYear.textContent = `&#169; ${currentYear}`;
