function validarNome() {
    let nome = document.getElementById("input-nome").value;
    let spanNome = document.getElementById("span__nome");
    if (nome == "") {
        spanNome.style.visibility = "visible";
    } else {
        spanNome.style.visibility = "hidden";
    }
    
}

function validarTelefone() {
    let telefone = document.getElementById("input-telefone").value;
    let spanTelefone = document.getElementById("span__telefone");
    if (telefone == "") {
        spanTelefone.style.visibility = "visible";
    } else {
        spanTelefone.style.visibility = "hidden";
    }
    
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
    document.getElementById("input-telefone").value = "";
    document.getElementById("input-mensagem").value = "";
}


function confirmarEnvio() {

    let nome = document.getElementById("input-nome").value.trim();
    let telefone = document.getElementById("input-telefone").value.trim();
    let mensagem = document.getElementById("input-mensagem").value.trim();

    if (nome === "" || telefone === "" || mensagem === "") {
        exibirMensagem("Preencha todos os campos!", "red");
    } else {

        exibirMensagem("Mensagem enviada com sucesso!", "green");

        limparFormulario();
    }

    return false;
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
