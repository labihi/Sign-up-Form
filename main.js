const password = document.getElementById("password");
const repeatedPassword = document.getElementById("repeat-psw");
const requirements = document.getElementsByClassName("requirements");

const submitButton = document.getElementById("submit-button");

function onChange(){
    if(password.value != repeatedPassword.value){
        console.log("Password diversa");   
        requirements[1].classList.add("requirements-shown");
    }else{
        console.log("Password uguale");
        requirements[1].classList.remove("requirements-shown");
    }

    if(!password.checkValidity()){
        console.log("Password non valida");
        requirements[0].classList.add("requirements-shown");
    }else{
        console.log("Password valida");
        requirements[0].classList.remove("requirements-shown");
    }
}



