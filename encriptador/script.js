
var botonEncriptar = document.getElementById("boton_Enc")
var botonDesencriptar = document.getElementById("boton_Des")


botonEncriptar.onclick= encriptar
botonDesencriptar.onclick= desencriptar



function encriptar()
{
    var texto = document.getElementById("texto").value.toLowerCase();

    var textoCifrado = texto
    
    var textoCifrado = texto.replace(/a/igm, "ai")
    var textoCifrado = textoCifrado.replace(/e/igm, "enter")
    var textoCifrado = textoCifrado.replace(/i/igm, "imes")
    var textoCifrado = textoCifrado.replace(/o/igm, "ober")
    var textoCifrado = textoCifrado.replace(/u/igm, "ufat")

    document.getElementById("parrafo").innerHTML = textoCifrado
}

function desencriptar()
{
    var texto = document.getElementById("texto").value.toLowerCase();

    var textoDescifrado = texto
    
    var textoDescifrado = texto.replace(/ai/igm, "a")
    var textoDescifrado = textoDescifrado.replace(/enter/igm, "e")
    var textoDescifrado = textoDescifrado.replace(/imes/igm, "i")
    var textoDescifrado = textoDescifrado.replace(/ober/igm, "o")
    var textoDescifrado = textoDescifrado.replace(/ufat/igm, "u")

    document.getElementById("parrafo").innerHTML = textoDescifrado
}