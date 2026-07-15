// Aguarda a página carregar completamente
document.addEventListener("DOMContentLoaded", function () { 
    
    
    
    //Pega o botão pelo ID que demos a ele
    const botao = document.getElementById("botao-tema");

// Pega o elemento <body> (a página inteira)
const corpo = document.body; 
// Variável que guarda o tema atual (true= escuro)
let temaEscuro = true;
//Função que será chamada quando clicar no botão
botao.addEventListener("click", function() {

    if (temaEscuro) {
        //Muda para tema claro
      corpo.style.background = "linear-gradient(135deg, #2a2a3e, #3d3d56, #4a4a6a)";
      corpo.style.color = "d0d0e0";   
        botao.textContent = "☀️ Alternar Tema";
        temaEscuro = false;
    } else {
        // Volta para tema escuro
        corpo.style.background = "linear-gradient(135deg, #0f0c29, #302b63, #24243e)";
        corpo.style.color = "white";
        botao.textContent =  "🌙 Alternar Tema";
        temaEscuro = true;
    }
     }); 

});

