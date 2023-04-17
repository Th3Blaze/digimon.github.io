fetch('https://digimon-api.vercel.app/api/digimon')
    .then(respose => respose.json())
    .then(resp => {
        /* console.log(resp);*/
        crearTabla(resp);
    });

function crearTabla(resp) {
    for (let datoTemporal of resp) {
        contenido.innerHTML += ""
        contenido.innerHTML +=
            `
            <td width="350"><img src="${datoTemporal.img}" alt="" width="50" height="50"></td>
            <td >
                <p>${datoTemporal.name}</p>
            </td>
            <td>
                <p>${datoTemporal.level}</p>
            </td>
            
        `

    }

}
function mostrarFoto() {
    document.getElementById('listar').style.display = "none";
    document.getElementById('buscar').style.display = "block";
    let digimon = document.getElementById("digimon");
    if (digimon.value == "") {
        alert("ingrese un Digimon a buscar");
    } else if (digimon.value == "bulbasaur") {
        contenido2.innerHTML += ""
        contenido2.innerHTML +=
            `
            <div class="card-body">
            <img src="asset/img/meme.jpeg" alt="" width="80%" >
                <a href="" onclick="limpiar()" class="btn btn-primary">cerrar</a>
            </div>
        `
    }
    else {
        console.log(digimon.value.toLowerCase());
        let url = "https://digimon-api.vercel.app/api/digimon/name/" + digimon.value.toLowerCase();
        fetch(url)
            .then(respose1 => respose1.json())
            .then(resp1 => {
                /* console.log(resp);*/
                crearTabla1(resp1);
            });
        function crearTabla1(resp1) {
            console.log(resp1.length);
            var texto = resp1[0];
            console.log(texto.name)
            console.log(texto.img)
            console.log(texto.level)
            contenido2.innerHTML += ""
            contenido2.innerHTML +=
                `
            <div class="card-body">
                <h5 class="card-title">${texto.name}</h5>
                <img src="${texto.img}" alt="" width="200" height="200">
                <p class="card-text">${texto.level}</p>
                <a href="" onclick="limpiar()" class="btn btn-primary">cerrar</a>
            </div>
        `
        }
        document.getElementById("digimon").value = "";
    }
}

