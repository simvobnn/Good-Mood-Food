window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    window.signUpCont = document.getElementById("signupcont");
    
    if (currentScroll > 550 && window.sUpCheck !== true) {
        signUpCont.style.display = "flex";
        signUpCont.style.opacity = 1;
    };
});
document.getElementById("signupbtn").addEventListener("click", () => {
    signUp();
});
function signUp(){
    const input = document.getElementById("signup");
    const adress =input.value;
    const regexEmail = /^\w+[+.\w-]*@([\w-]+.)*\w+[\w-]*.([a-z]{2,4}|d+)$/;
    window.sUpCheck = regexEmail.test(adress);
    

    if (sUpCheck === false) {
        input.value = "";
        input.placeholder="Invalid Email";
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        input.value = "";
        input.placeholder="Subscribed ;)";
        input.classList.remove("invalid");
        input.classList.add("valid");
        setTimeout(() => {signUpCont.style.opacity = 0}, 4000);        
    } 
}