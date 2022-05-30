




//funcion de encriptacion - la idea es guardar el texto en un array de caracteres y modificar las letras que se especifican


//var a = Document.querySelector("div.textarea[name='textoAModifica']");
let a = "esto es un string";

function convertirString(a){
let b = Array.from(a);
console.log(b);
console.log(typeof b[0]);
return b;



}


convertirString(a);

function encriptarVocal(a){

    for (let index = 0; index < a.length; index++) {
        let b = a[index];
        
        console.log("b es: " + b); 

        if (b == 'e') {//no entra en este condicional, ni modifica el array

            //a.splice(index, 1);
            console.log("funciona el if"); 
            a[index] = 'i'
            console.log("veamos que ocurre aqui, a es: " + a[index]);
        } 
       
        console.log(a[index]);
        
        
    }
    console.log("segunda funcion");
    console.log(a);
    
    return a

}

encriptarVocal(a);

console.log("fin");
console.log(a);