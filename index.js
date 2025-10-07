let botonBuscar = document.querySelector('#botonBuscar');
let contenedorAlbumes = document.querySelector('#contenedorAlbumes');

function buscarArtista() {
    let nombreArtista = prompt('Ingresa el nombre del artista o banda musical:');

    if (!nombreArtista) {
        alert('No ingresaste ningún nombre.');
        return;
    }

    let urlBusqueda = `https://musicbrainz.org/ws/2/artist?query=${encodeURIComponent(nombreArtista)}&fmt=json`;

    fetch(urlBusqueda)
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.artists.length === 0) {
                alert('No se encontró el artista.');
                return;
            }

            let idArtista = datos.artists[0].id;
            let urlAlbumes = `https://musicbrainz.org/ws/2/release-group?artist=${idArtista}&type=album&fmt=json`;

            return fetch(urlAlbumes);
        })
        .then(respuesta => respuesta ? respuesta.json() : null)
        .then(datosAlbumes => {
            if (!datosAlbumes) return;

            contenedorAlbumes.innerHTML = '';

            for (let i = 0; i < datosAlbumes['release-groups'].length; i++) {
                let album = datosAlbumes['release-groups'][i];

                let nombreAlbum = album.title;
                let idAlbum = album.id;
                let urlPortada = `https://coverartarchive.org/release-group/${idAlbum}/front-250`;

                let tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta');

                let imagen = document.createElement('img');
                imagen.src = urlPortada;
                imagen.onerror = function() {
                    this.src = 'https://via.placeholder.com/250x250?text=Sin+Portada';
                };

                let titulo = document.createElement('h3');
                titulo.textContent = nombreAlbum;

                tarjeta.appendChild(imagen);
                tarjeta.appendChild(titulo);
                contenedorAlbumes.appendChild(tarjeta);
            }
        })
        .catch(error => {
            alert('Ocurrió un error al buscar los datos.');
            console.log(error);
        });
}

botonBuscar.addEventListener('click', buscarArtista);

