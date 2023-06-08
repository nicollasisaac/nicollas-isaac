AOS.init();

// Selecionar o elemento usando jQuery
const title = $('.contain-text h1');

// Função para simular digitação
function typeWrite(element) {
    let x = 75;
    // Dividir o conteúdo do elemento em um array de letras
    const textArray = element.html().split('');
    element.html('');
    // Para cada letra do array
    $.each(textArray, function (i, letter) {
        // Definir um tempo de espera usando setTimeout
        setTimeout(function () {
            // Adicionar a letra ao conteúdo do elemento
            element.html(element.html() + letter);
        }, x += 105);
    });
}

// Chamar a função passando o elemento selecionado
typeWrite(title);

function carregarFooter() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'assets/js/footer.txt', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var footer = xhr.responseText;

            document.getElementById('paragrafoFooter').textContent += footer;
        }
    };

    xhr.send();
}

