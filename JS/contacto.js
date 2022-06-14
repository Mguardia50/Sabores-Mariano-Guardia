const llaveClave = "SaboresByMPGSoft";
const muestrasFinal = document.getElementById("muestrasSolicitadas");
const muestrasFinalOculto = document.getElementById("muestrasSolicitadasOculto"); //se usa para mandar el mail mediante el metodo post en PHP
let cargaFinal = [];

function carritoMuestrasFinal (){ //esto se repite, me convendria otro JS global?
    
        for (i= 0; i< sessionStorage.length; i++){
                
    
            let clave = sessionStorage.key(i);
            
                if (clave.includes(llaveClave)){
    
                    let valor = sessionStorage.getItem(clave); 
                    let valorParse = JSON.parse(valor);
                    
                    /* muestrasFinal.innerHTML += `<tr><td>${valorParse.item}</td></tr>` */

                    /* muestrasFinal.value += `${valorParse.item}\n`; */

                   cargaFinal.push(valorParse.item);
    
                }
        }
    
    cargaFinal = cargaFinal.sort();

    muestrasFinal.value = cargaFinal.join("\n");
    muestrasFinalOculto.value = muestrasFinal.value;
    }

    function copiarMuestras(){
        muestrasFinalOculto.value = muestrasFinal.value;
        /* console.clear(); //para debugear y mostrar su existencia pese a que no aparece
        console.log(muestrasFinalOculto.value); */
    }

    document.addEventListener('input', copiarMuestras); //para mandar mail por PHP en post
    document.addEventListener('DOMContentLoaded', carritoMuestrasFinal);