// Obtém o valor do modo escuro do localStorage
let darkMode = localStorage.getItem("darkMode");

// Seleciona o elemento com o ID 'mode' usando jQuery
const darkModeToggle = $("#mode");

// Função para ativar o modo escuro
const enableDarkMode = () => {
    // Adiciona a classe 'darkmode' ao elemento 'body' usando jQuery
    $("body").addClass("darkmode");
    
    // Define o valor 'enabled' para a chave 'darkMode' no localStorage
    localStorage.setItem("darkMode", "enabled");
}

// Função para desativar o modo escuro
const disableDarkMode = () => {
    // Remove a classe 'darkmode' do elemento 'body' usando jQuery
    $("body").removeClass("darkmode");
    
    // Define o valor nulo para a chave 'darkMode' no localStorage
    localStorage.setItem("darkMode", null);
}

// Verifica se o modo escuro está ativado no localStorage
if (darkMode == 'enabled'){
    // Se estiver ativado, chama a função para ativar o modo escuro
    enableDarkMode();
}

// Adiciona um ouvinte de evento de clique ao elemento 'darkModeToggle'
darkModeToggle.on("click", () => {
    // Obtém o valor do modo escuro do localStorage
    darkMode = localStorage.getItem("darkMode");
    
    // Verifica se o modo escuro não está ativado
    if (darkMode !== "enabled") {
        // Se não estiver ativado, chama a função para ativar o modo escuro
        enableDarkMode();
    } else {
        // Caso contrário, chama a função para desativar o modo escuro
        disableDarkMode();
        console.log(darkMode);
    }
});
