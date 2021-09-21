let iframeItem = document.querySelector('#iframe-changer');
let iframeCallButtons = document.querySelectorAll('.button--call-iframe');

iframeCallButtons.forEach(button => {
    button.addEventListener('click', function() {
        iframeCallButtons.forEach(el => {
            el.classList.remove('button--call-iframe--active');
        });
        button.classList.add('button--call-iframe--active');
        let currentSrc = button.getAttribute('data-src');
        iframeItem.setAttribute('src', currentSrc);
    });
});

iframeItem.setAttribute('src', iframeCallButtons[0].getAttribute('data-src'));
iframeCallButtons[0].classList.add('button--call-iframe--active');