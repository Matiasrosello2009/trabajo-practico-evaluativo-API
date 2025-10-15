let boton = document.querySelector("#boton")
let titulo = document.querySelector("#titulo")
let artista = document.querySelector("#artista")
let imagen = document.querySelector("#imagen")
let clave = "e69926f293d7596b54065bc1e9cede4d"
let generos = ["rock", "pop", "hip-hop", "electronic", "jazz", "rnb", "metal"]

function obtenerMusica() {
  let indice = Math.floor(Math.random() * generos.length)
  let genero = generos[indice]
  let url = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=" + genero + "&api_key=" + clave + "&format=json"
  
  fetch(url)
    .then(function(respuesta) { return respuesta.json() })
    .then(function(datos) {
      let lista = datos.albums.album
      let numero = Math.floor(Math.random() * lista.length)
      let album = lista[numero]
      titulo.textContent = album.name
      artista.textContent = album.artist.name
      imagen.src = album.image[3]["#text"]
    })
}

boton.addEventListener("click", function() {
  obtenerMusica()
})

obtenerMusica()

let botonInfo = document.querySelector("#botonInfo")
let urlAlbum = ""

botonInfo.addEventListener("click", function() {
  if (urlAlbum && urlAlbum.trim() !== "") {
    window.open(urlAlbum)
  } else {
    alert("No se encontró el enlace del álbum. ")
  }
})

let botonTema = document.querySelector("#boton-tema")

botonTema.addEventListener("click", function() {
  let cuerpo = document.querySelector("body")
  cuerpo.classList.toggle("claro")
  botonTema.textContent = cuerpo.classList.contains("claro") ? "🌙" : "☀️"
})