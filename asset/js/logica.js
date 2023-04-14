// ciclo para llenar tabla
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(respose => respose.json())
    .then(resp => {
        console.log(resp);
        crearTabla(resp)
    });

function crearTabla(resp) {
    var x = 0;
    for (let datoTemporal of resp) {
        contenido.innerHTML +=
            `
                <td>${datoTemporal.name}</td>
                <td><img src="${datoTemporal.img}" alt=""></td>
                <td>${datoTemporal.level}</td>
            `

        listado.createElement +=
            `
            <option value="${datoTemporal.name}">${datoTemporal.name}</option> 
            `
            
    }

}
// mostrar ocultar
function dgmListado() {
    document.getElementById('listar').style.display = "block";
    document.getElementById('buscar').style.display = "none";
}
function dgmBuscar() {
    document.getElementById('buscar').style.display = "block";
    document.getElementById('listar').style.display = "none";
}
