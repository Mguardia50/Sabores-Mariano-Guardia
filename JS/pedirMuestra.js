
const contenedorMuestras = document.getElementById("contenedorMuestras");
let verificador = JSON.parse(sessionStorage.getItem("VerificadorSaboresMPGSoft")) || [];
const llaveClave = "SaboresByMPGSoft";
let i=0;
let pedidoFinal = [];


console.log((verificador)); /* para debug */


contenedorMuestras.addEventListener('click', muestraSolicitadaSabor);



function muestraSolicitadaSabor(e) {
        
    if (e.target.classList.contains("btn_muestra")){
        
        let iditem = parseInt(e.target.id);
        muestraSolicitada(iditem);
        
        //console.log("muestrasolicitadasabor ok");
        
    }

}

function muestraSolicitada(iditem){

    verificador.push(iditem);
    verificador.sort(((a,b) => a - b));

    

    for (verificado in verificador){
        
        if (verificador.length>1){
            if (verificador[verificado]==verificador[verificado-1]){
                verificador.splice(verificado,1);
                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: 'Ya se pidió dicha muestra',
                    color: 'rgb(134, 9, 32)',
                    confirmButtonColor: 'rgb(134, 9, 32)',
                  })
                return;
            } 
        }

    }
    
    try{
        const resultSabor = portfolioSabores.find((eleme) => eleme.id === iditem);
        let infoSabor = JSON.stringify({id: resultSabor.id, item: resultSabor.sabor});
        sessionStorage.setItem (llaveClave + resultSabor.id,infoSabor);
        sessionStorage.setItem ("VerificadorSaboresMPGSoft",JSON.stringify(verificador));
       
    }
    catch{
        const resultIng = portfolioIngredientes.find((eleme) => eleme.id === iditem);
        let infoIng = JSON.stringify({id: resultIng.id, item: resultIng.Ingrediente});
        sessionStorage.setItem (llaveClave + resultIng.id,infoIng);
        sessionStorage.setItem ("VerificadorSaboresMPGSoft",JSON.stringify(verificador));
        
    }
     
    carritoMuestras();

}

function carritoMuestras (){
pedidoFinal=[]; //esto me resumio borrar valores repetidos en array
    // console.log("carritoMuestra ok");

    for (i= 0; i< sessionStorage.length; i++){
            
        // console.log("for carritomuestra ok");

        let clave = sessionStorage.key(i);
        
            if (clave.includes(llaveClave)){

                let valor = sessionStorage.getItem(clave); /* se que lo podria hacer en una sola linea, pero posiblemente en futuro también tenga que usar esto, será 1 sola linea al final en caso de no ser utilizado */
                let valorParse = JSON.parse(valor);
                
                pedidoFinal.push(valorParse.item);
                //console.log(valorParse.item);

            
            }
    }

    pedidoFinal = pedidoFinal.sort();
    console.log(pedidoFinal);

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        color:'rgb(134, 9, 32)',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        iconColor: 'rgb(255, 68, 99)',
        text: pedidoFinal.join(" - "),
        showConfirmButton: true,
       // showCancelButton: true,
        confirmButtonColor: 'rgb(134, 9, 32)',
        cancelButtonColor: 'rgb(255, 68, 99)',
        //cancelButtonText: 'Seguir Muestreando',
        confirmButtonText: 'Ir al pedido',
      }).then((result) => {
        if (result.isConfirmed) {
            document.location.href = "./contacto.html";
        } 
      })


}