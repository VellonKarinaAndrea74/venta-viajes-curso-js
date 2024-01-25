import { barcelona, roma, paris, londres } from './ciudades.js';


//* Obtener enlaces del DOM
let enlaces = document.querySelectorAll('a')     //* query significa : consulta
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//* Agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //* Remover la clase "active" de todos los enlaces
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        //* Agregar la clase "active" al enlace actual
        this.classList.add('active')

        //* Obtener el contenido correspondiente segun el enlace
        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
    });
});

//* FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE ciudades.js

function obtenerContenido(enlace) {
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    };
    return contenido[enlace];
}