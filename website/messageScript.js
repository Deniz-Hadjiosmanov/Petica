

var form = document.getElementById('contactForm');

/*adds an event listener on the form section*/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    /*variables created for each id, so these can be used in the function*/
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const textAreaInput = document.getElementById('textarea');
    /*displays that a message has been sent*/
    if (alert("Your message has been sent")) {
        console.log(usernameInput.value);
        console.log(emailInput.value);
        console.log(textAreaInput.value);
    };
    /*clears the form input fields after showing the alert message*/
    usernameInput.value = '';
    emailInput.value = '';
    textAreaInput.value = '';
})