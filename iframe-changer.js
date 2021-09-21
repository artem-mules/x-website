
let iframeItem = document.querySelector('#iframe-changer');
let iframeCallButtons = document.querySelectorAll('.button--call-iframe');

iframeCallButtons.forEach(button => {
    button.addEventListener('click', function() {
        let currentSrc = button.getAttribute('data-src');
        iframeItem.setAttribute('src', currentSrc);
    });
});

iframeItem.setAttribute('src', iframeCallButtons[0].getAttribute('data-src'));