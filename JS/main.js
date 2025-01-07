let input   = document.querySelector('input');
let notify  = document.querySelector('#notify');
let mainUp  = document.querySelector('.mainUp');
let message = document.createElement('p');
const email = document.querySelector('#mail').value;

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

notify.addEventListener('click', () => {
    const mail = input.value;
    if(!validateEmail(mail)) {
        message.textContent      = 'Please, enter a validate e-mail !';
        message.style.fontSize   = '20px';
        message.style.color      = 'crimson';
        message.style.fontFamily = 'Franklin-Light';
        input.style.border       = '1.5px solid red';
        if(!mainUp.contains(message)) {
            mainUp.appendChild(message);
        }
    } else {
        message.textContent      = 'You\'ll be notified !';
        message.style.fontSize   = '20px';
        message.style.color      = 'grey';
        message.style.fontFamily = 'Franklin-Light';
        input.style.border       = '1.5px solid grey';
        if(!mainUp.contains(message)) {
            mainUp.appendChild(message);
        }
    }
    

});