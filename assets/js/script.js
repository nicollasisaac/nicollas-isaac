AOS.init();

const title = document.querySelector('.contain-text h1');

function typeWrite(element){
    let x = 75;
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(()=> element.innerHTML += letter , x += 105)
    });
}

typeWrite(title);

