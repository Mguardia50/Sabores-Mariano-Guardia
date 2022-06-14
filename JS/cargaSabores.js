


const portfolioSabores = [];

const contenedorSaborFrutal = document.getElementById("AcSaborFrutal");
const contenedorSaborBebida = document.getElementById("AcSaborBebida");
const contenedorSaborSalado = document.getElementById("AcSaborSalado");
const contenedorSaborOtro = document.getElementById("AcSaborOtro");
const contenedorEmulsion = document.getElementById("AcEmulsion");
  


    
const listaFrutal = async () => {

    const respuestaSabor = await fetch('../JSON/sabores.json');
    const respuestaSaborFetch = await respuestaSabor.json();
    

    respuestaSaborFetch.forEach(Sabor => {
        portfolioSabores.push(Sabor)
        if (Sabor.tipo === "Frutal"){
            contenedorSaborFrutal.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Sabor.sabor}</li>
                <button class="btn_muestra" id=${Sabor.id}>Solicitar Muestra</button>
            </div>
            `
        }
        if (Sabor.tipo === "bebida"){
            contenedorSaborBebida.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Sabor.sabor}</li>
                <button class="btn_muestra" id=${Sabor.id}>Solicitar Muestra</button>
            </div>
            `
        }
        if (Sabor.tipo === "salado"){
            contenedorSaborSalado.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Sabor.sabor}</li>
                <button class="btn_muestra" id=${Sabor.id}>Solicitar Muestra</button>
            </div>
            `
        }
        if (Sabor.tipo === "otros"){
            contenedorSaborOtro.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Sabor.sabor}</li>
                <button class="btn_muestra" id=${Sabor.id}>Solicitar Muestra</button>
            </div>
            `
        }
        if (Sabor.tipo === "emulsion"){
            contenedorEmulsion.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Sabor.sabor}</li>
                <button class="btn_muestra" id=${Sabor.id}>Solicitar Muestra</button>
            </div>
            `
        }
    });
     


};

document.addEventListener('DOMContentLoaded', listaFrutal);