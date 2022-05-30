
//funcion de encriptacion - la idea es guardar el texto en un array de caracteres y modificar las letras que se especifican
lateralDos.classList.add("invisible");


//capturar texarea
var texareaUno = document.querySelector("#textoAModificar");


//encriptar

var botonEncriptar = document.querySelector("#botonEncriptar");
botonEncriptar.addEventListener("click", function () {

    if (texareaUno.value.length > 0) {
        lateralUno.classList.add("invisible");
        lateralDos.classList.remove("invisible");


        var a = texareaUno.value;
        encriptarVocal(a)
        let newA = encriptarVocal(a);
        textAreaDos(newA);

    } else {
        lateralUno.classList.remove("invisible");
        lateralDos.classList.add("invisible");
    }
})



//boton desencriptar

var botonDesencriptar = document.querySelector("#botonDesencriptar");
botonDesencriptar.addEventListener("click", function () {

    if (texareaUno.value.length > 0) {
        lateralUno.classList.add("invisible");
        lateralDos.classList.remove("invisible");


        var a = texareaUno.value;

        let newA = desencriptarVocal(a);
        textAreaDos(newA);

    } else {
        lateralUno.classList.remove("invisible");
        lateralDos.classList.add("invisible");
    }
})

//captura datos para despues de precionar el boton
function textAreaDos(newA) {
    var textoAModificarDos = document.querySelector("#textoAModificarDos");
    textoAModificarDos.textContent = newA;
    return newA;
}

//funcion para encriptar

function encriptarVocal(a) {
    /* 
     var a = this.a;
     var vocal = ["a", "e", "i", "o", "u"];
     var encriptado = ["ai", "enter", "imes", "ober", "ufat"];
 
     for (let index = 0; index < vocal.length; index++) {
         var letra = vocal[index];
         var letraENcriptada = encriptado[index];
 
         var paraReplace = "/" + letra + "/g";
         console.log(paraReplace);
         result = a.replace(paraReplace, letraENcriptada)
         console.log(result);
     }*/
    let resultUno = a.replace(/e/g, "enter");
    let resultDos = resultUno.replace(/i/g, "imes");
    let resultTres = resultDos.replace(/a/g, "ai");
    let resultCuatro = resultTres.replace(/o/g, "ober");
    let result = resultCuatro.replace(/u/g, "ufat");

    return result;
}



//funcion para desencriptar
function desencriptarVocal(a) {

    let resultUno = a.replace(/enter/g, "e");
    let resultDos = resultUno.replace(/imes/g, "i");
    let resultTres = resultDos.replace(/ai/g, "a");
    let resultCuatro = resultTres.replace(/ober/g, "o");
    let result = resultCuatro.replace(/ufat/g, "u");

    return result;
}


//boton copiar
var botonCopiar = document.querySelector("#botonCopiar");
botonCopiar.addEventListener("click", function copiarAlPortapapeles() {

    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById("textoAModificarDos").innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);


});



/*
fenterlimescimesdaidenters poberr enternfrenterntair
enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
*/