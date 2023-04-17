

/*
fetch('https://digimon-api.vercel.app/api/digimon')
    .then(respose => respose.json())
    .then(resp => {
        crearTabla2(resp);
    });
function crearTabla2(resp) {
    var config = {};
    $('input').each(function () {
        config[this.id] = this.value;
    });
    for (let datoTemporal of resp) {

        if (datoTemporal.name == config.nombre) {
            console.log(datoTemporal.name);
            console.log(config.nombre);
            dgmcard.innerHTML +=
                `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            `
        }

    }

}
*/

