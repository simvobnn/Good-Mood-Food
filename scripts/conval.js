const form = document.getElementById("contactform");
form.addEventListener("submit", (error) => {
    const inputFirst = document.getElementById('first').value;
    const inputLast = document.getElementById('last').value;
    const inputPhone = document.getElementById('phone').value;
    const inputEmail = document.getElementById('email').value;
    const formError = document.getElementById("formerror");
    const regexName = /^[a-zA-Z\- ]{2,30}$/;
    const regexPhone = /^\d{8}$/;
    const regexEmail = /^\w+[+.\w-]*@([\w-]+.)*\w+[\w-]*.([a-z]{2,4}|d+)$/;
    const testFirst = regexName.test(inputFirst);
    const testLast = regexName.test(inputLast);
    const testPhone = regexPhone.test(inputPhone);
    const testEmail = regexEmail.test(inputEmail);
    let errors = []
    if (testFirst === false) {
        errors.push("First name is invalid")
    }
    if (testLast === false) {
        errors.push("Last name is invalid")
    }
    if (testPhone === false) {
        errors.push("Phone numer should be 8 digits")
    }
    if (testEmail === false) {
        errors.push("The E-mail adress is invalid")
    }
    if (errors.length > 0) {
        error.preventDefault()
        formError.innerText = errors.join(', ')
    }
    else {
        alert("Thank you, message received!")
    }
})