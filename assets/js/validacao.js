const birthDate = document.querySelector("#nascimento");

birthDate.addEventListener("blur", (e) => {

    validaDataNascimento(e.target);
})

function validaDataNascimento(input) {

    const dateInput = new Date(input.value);
    
    let mensagem = ""; 

    if(!overEighteen(dateInput)) {
        mensagem = "Você é menor de 18 anos";
        console.log("menor de 18");
    }

    input.setCustomValidity(mensagem); 
}

function overEighteen(date) {

    const todayDate = new Date();
    const userDate = new Date(date.getUTCFullYear() + 18, date.getUTCMonth() + 1, date.getUTCDate());

    return userDate <= todayDate
}