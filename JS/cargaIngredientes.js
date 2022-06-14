


const portfolioIngredientes = [];

const contenedorAcidulantes = document.getElementById("AcAcidulante");
const contenedorAntiAglo = document.getElementById("AcAntiAglo");
const contenedorAntiOxi = document.getElementById("AcAntiOxi");
const contenedorColorantes = document.getElementById("AcColorantes");
const contenedorConservantes = document.getElementById("AcConservantes");
const contenedorEdulcorantes = document.getElementById("AcEdulcorantes");
const contenedorEmulsionantes = document.getElementById("AcEmulsionantes");
const contenedorTexturizantes = document.getElementById("AcTexturizantes");
const contenedorPotenciadores = document.getElementById("AcPotenciadores");
const contenedorOtrosIngredientes = document.getElementById("AcOtrosIngredientes");
  


    
const listaIngredientes = async () => {

    const respuestaIngrediente = await fetch('../JSON/ingredientes.json');
    const respuestaIngredienteFetch = await respuestaIngrediente.json();
    

    respuestaIngredienteFetch.forEach(Ingrediente => {
        portfolioIngredientes.push(Ingrediente)
        
        if (Ingrediente.tipo === "Acido"){
            contenedorAcidulantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "AntiAglo"){
            contenedorAntiAglo.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "AntiOxi"){
            contenedorAntiOxi.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "color"){
            contenedorColorantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "cons"){
            contenedorConservantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "edu"){
            contenedorEdulcorantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "emu"){
            contenedorEmulsionantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "tex"){
            contenedorTexturizantes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "Poten"){
            contenedorPotenciadores.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }

        if (Ingrediente.tipo === "Natu"){
            contenedorOtrosIngredientes.innerHTML += `
            <div class="muestra">
                <li class="lista_muestra">${Ingrediente.Ingrediente}</li>
                <button class="btn_muestra" id=${Ingrediente.id}>Solicitar Muestra</button>
            </div>
            `
        }


      
    });
  
    




};

document.addEventListener('DOMContentLoaded', listaIngredientes);