
function obtener_Datos(){
    console.log("Hola")
   return document.getElementById("texto-usuario").value;
}
function new_content($text){
    console.log($text);
    const contenido = document.querySelector(".aside-info");
    const new_info = document.querySelector(".aside-new-info");
    const new_cont = document.getElementById('encrypted-textarea');
    contenido.style.display= "none";
    new_info.style.display = "flex";
    new_cont.value = $text;

}
/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function cifrar(){
    let $cadena_encriptada="";
    let $cadena=obtener_Datos();
    let $tabla_de_encriptacion={
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };
    for(const $letra of $cadena){

        if($letra in $tabla_de_encriptacion){
            $cadena_encriptada+=$tabla_de_encriptacion[$letra];
        }else{
            $cadena_encriptada+=$letra;
        }
    }

  
    if($cadena!= ""){
        new_content($cadena_encriptada);
    }else{
        alert("El campo esta vacio..")
    }
    
    
}
function descifrar(){
    let $cadena_decodificada ="";
    let $cadena_codificada=obtener_Datos();
    console.log($cadena_codificada);
    let $tabla_de_palabras={
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };
    let i =0;
    while(i < $cadena_codificada.length){
        let esta = false;
        for(let $palabra in $tabla_de_palabras){
            if($cadena_codificada.substr(i,$palabra.length)===$palabra){
                $cadena_decodificada+=$tabla_de_palabras[$palabra];
                i +=$palabra.length;
                esta =true;
                break;
            }
        }
        if(!esta){
            $cadena_decodificada+=$cadena_codificada[i];
            i++;
        }
    }
    if($cadena_codificada!= ""){
        new_content($cadena_decodificada);
    }else{
        alert("El campo esta vacio..")
    }


}

function copiar()
{
    var text_copy = document.getElementById("encrypted-textarea").value;
    var temInput = document.createElement("Input");
    temInput.value = text_copy;
    document.body.appendChild(temInput);
    temInput.select();
    temInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(temInput);
    alert('Texto copiado al portapapeles: ' + text_copy);

}