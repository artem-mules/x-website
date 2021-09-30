let form = document.querySelector('.newsletter__form');
let formButton = document.querySelector('#newsletter-button');
let formButtonHidden = document.querySelector('#newsletter-button--hidden');

formButton.addEventListener('click', function() {
    formButtonHidden.click();
});