function signinfinish() {
    const username = document.getElementById("useroremail").value;
    const senha = document.getElementById("password").value;
    const lembrar = document.getElementById("lembrar");
    let lembraremos = "";
    if (lembrar.checked) {
        lembraremos = "Lembraremos!";
    }
    else {
        lembraremos = "Não lembraremos.";
    }
    const avisosucesso = document.getElementById("signconfirmation");
    avisosucesso.style.display = "block";
    const textoaviso = "Cadastro realizado com sucesso!\nUsuário:"+username+"\nSenha:"+senha+"\nLembrar:"+lembraremos;
    alert(textoaviso);
}