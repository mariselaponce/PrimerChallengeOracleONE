/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptar = document.getElementById("btn-encriptar");
var botonCopiar = document.getElementById("btn-copy");
var botonDesencriptar = document.getElementById("btn-desencriptar");

var texto = "";
var textoEncriptado = "";

botonEncriptar.addEventListener("click", function (event) {
  event.preventDefault();
  var texto = document.getElementById("input-texto").value;
  sololetras(texto);
  encriptarTexto(texto);
});

botonCopiar.addEventListener("click", function (event) {
  event.preventDefault();
  copiar();
});

botonDesencriptar.addEventListener("click", function (event) {
  event.preventDefault();
  var textoEncriptado = document.getElementById("input-texto").value;
  desencriptarTexto(textoEncriptado);
});

const letras = "abcdefghijklmnñopqrstuvwxyz ";

var form = document.getElementById("form");

function sololetras(texto) {
  for (i = 0; i < texto.length; i++) {
    if (letras.indexOf(texto.charAt(i), 0) < 0) {
      form.reset();
      alert("Sólo puede ingresar letras en minúsculas");
      break;
    }
  }
}

function copiar() {
  var textoEnCaja = document.getElementById("msg").value;
  navigator.clipboard
    .writeText(textoEnCaja)
    .then(() => {
      console.log("texto copiado al portapapeles");
    })
    .catch((err) => {
      console.log("No se pudo copiar el texto", err);
    });
}

function encriptarTexto(texto) {
  var texto = document.getElementById("input-texto").value;
  var campoEncriptar = document.getElementById("msg");
  var textoEncriptado = texto

    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "obes")
    .replace(/u/gi, "ufat");
  campoEncriptar.value = textoEncriptado;
  return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
  var textoEncriptado = document.getElementById("input-texto").value;
  var texto = textoEncriptado

    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/obes/gi, "o")
    .replace(/ufat/gi, "u");
  var campoTexto = document.getElementById("input-texto");
  campoTexto.value = texto;
  return texto;
}
