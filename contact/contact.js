// Send Alert
const send = document.querySelector('.contact-form form');
send.onsubmit = function (event) {
    event.preventDefault();
    alert('Your message was sent');
    window.location.reload();
};

