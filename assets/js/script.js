Certificados.map((itemlocal) => {
    let itemsCerti = document.querySelector(".box").cloneNode(true);

    itemsCerti.id = "box";
    itemsCerti.querySelector(".box h2").innerHTML = itemlocal.title;
    itemsCerti.querySelector(".box p").innerHTML = itemlocal.local + " - " + itemlocal.tempo;
    
    document.querySelector("#boxgroup").append(itemsCerti);
})

document.getElementById("box-model").parentNode.removeChild(document.getElementById("box-model"));