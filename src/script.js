function validarNome() {
    let nome = document.getElementById("input-nome").value;
    let spanNome = document.getElementById("span__nome");

    if (nome == "") {
        spanNome.style.visibility = "visible";
    } else {
        spanNome.style.visibility = "hidden";
    }
    
}

function validarEmail() {
    let email = document.getElementById("input-email").value;
    let spanEmail = document.getElementById("span__email");

    if (email == "") {
        spanEmail.style.visibility = "visible";
    } else {
        spanEmail.style.visibility = "hidden";
    }
}

function validarTelefone() {
    let telefone = document.getElementById("input-telefone").value;
    let numero = telefone.replace(/\D/g, "");
    //let spanTelefone = document.getElementById("span__telefone");


    /*
    if (telefone == "") {
        spanTelefone.style.visibility = "visible";
    } else {
        spanTelefone.style.visibility = "hidden";
    }
    */

    if (numero.length === 11) {
        spanTelefone.textContent = "Telefone inválido";
        spanTelefone.style.visibility = "visible";
    } else {
        spanTelefone.style.visibility = "hidden";
    }
    
}

function formatarTelefone(input) {
    let numero = input.value.replace(/\D/g, "");

    if (numero.length > 1) {
        numero = `(${numero.substring(0, 2)}) ${numero.substring(2)}`;
    }

    if (numero.length > 10) {
        numero = `${numero.substring(0, 10)}-${numero.substring(10, 14)}`;
    }

    input.value = numero;

}


function validarMensagem() {
    let mensagem = document.getElementById("input-mensagem").value;
    let spanMensagem = document.getElementById("span__mensagem");
    if (mensagem == "") {
        spanMensagem.style.visibility = "visible";
    } else {
        spanMensagem.style.visibility = "hidden";
    }
}

//-------------

function limparFormulario() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-telefone").value = "";
    document.getElementById("input-mensagem").value = "";
}


function confirmarEnvio() {

    let nome = document.getElementById("input-nome").value.trim();
    let mensagem = document.getElementById("input-mensagem").value.trim();
    let email = document.getElementById("input-email").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        exibirMensagem("Preencha todos os campos!", "red");

        document.getElementById("input-nome").style.border = "2px solid red";
        document.getElementById("input-email").style.border = "2px solid red";
        document.getElementById("input-mensagem").style.border = "2px solid red";

    } else {

        exibirMensagem("Mensagem enviada com sucesso!", "green");

        limparFormulario();
    }

    return false;
}

function removerBorda(elemento) {
    elemento.style.border = "none";
}

function exibirMensagem(texto, cor) {
    let divBotao = document.getElementById("div-botao");

    divBotao.querySelectorAll("span").forEach(span => span.remove());

    let spanMensagem = document.createElement("span");
    spanMensagem.textContent = texto;
    spanMensagem.style.color = cor;

    divBotao.appendChild(spanMensagem);

    setTimeout(function() {
        spanMensagem.remove();
    }, 4000);
}
