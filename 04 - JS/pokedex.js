
let inputs=document.querySelectorAll("input");


//FUNCION para clikear boton on Enter

    // Get the input field
var input = document.getElementById("pokeName");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
// Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("botonGO").click();
    }
});

const fetchPokemon = () => {

    //Entrada de Usuario: Nombre del pokemon selccionado
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    //Repositorio de Pokeapi
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

    fetch(url).then((res) => {
        //Si respuesta es incorrecta
        if (res.status != "200") {
            //Mostrar imagen de error
            console.log(res);
            pokeImage("./images/x-circle.svg")
            clearInputs(); //Limpiar formularios de la página

            //Mensaje de error
            const nombre = document.getElementById("idPokemon");
            nombre.value="NOMBRE INCORRECTO" 
        }
        else {
            return res.json();
        } //Si respuesta es satisfactoria 
    }).then((data) => {
        if (data) {

            //Mostrar imagen del pokemon seleccionado
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            // Addiciones
            pokeInfo(data);
            // trigger de funcion Previous Pokemon
            previousPokemon(data);
            NextPokemon(data);
        }
    }); 
} 

//Función de cambio de imagen
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

//Función de Inpus de data en pantalla Right 
const pokeInfo =(url) =>{

    // Input número + nombre
    const idPokemon = document.getElementById("idPokemon");
    idPokemon.value="#" + url.id + " - "+ url.name;
    //Input de tipo de pokemon
    const tipo = document.getElementById("tipoPokemon");
    tipo.value= "Tipo: "+ url.types[0].type.name;
    //Input del peso del pokemon
    const peso = document.getElementById("pesoPokemon");
    peso.value= "Peso: " + url.weight +" libras";
    //Inpit de la altura del pokemon
    const altura = document.getElementById("alturaPokemon");
    altura.value= "Altura: " + url.height +" pies";

    //Stats
    const stat1 = document.getElementById("stat1");
    stat1.value= "HP = " + url.stats[0].base_stat;
    const stat2 = document.getElementById("stat2");
    stat2.value= "Attack = " + url.stats[1].base_stat;
    const stat3 = document.getElementById("stat3");
    stat3.value= "Defense = " + url.stats[2].base_stat;
    const stat4 = document.getElementById("stat4");
    stat4.value= "Special Attack = " + url.stats[3].base_stat;
    const stat5 = document.getElementById("stat5");
    stat5.value= "Special Defense = " + url.stats[4].base_stat;
    const stat6 = document.getElementById("stat6");
    stat6.value= "Speed = " + url.stats[5].base_stat;

    //Movimientos
    const movimientos = url.moves;
    //Si tiene dos o más movimientos
    if (movimientos.length >=2){
        //Imprimir Mov 1
        const movimientosPokemon1 = document.getElementById("movimientosPokemon1");
        movimientosPokemon1.value = "Mov #1: "+  movimientos[0].move.name;        
        //e Imprimier Mov 2
        const movimientosPokemon2 = document.getElementById("movimientosPokemon2");
        movimientosPokemon2.value = "Mov #2: "+  movimientos[1].move.name;
    }else{
        //Imprimir solo Mov 1
        const movimientosPokemon1 = document.getElementById("movimientosPokemon1");
        movimientosPokemon1.value = "Mov #1: "+  movimientos[0].move.name;
    }

}

//Funcion de Eliminar el contenido de todos los inputs 
const clearInputs = () =>{
    inputs.forEach(input => input.value="");
}


//FUNCION mostrar nombre del pokemon siguiente
const previousPokemon = (url) =>{  

    prevID = parseInt(url.id) - 1;
    const prevURL = `https://pokeapi.co/api/v2/pokemon/${prevID}`;
    

    fetch(prevURL).then((respuesta) => {
        if(respuesta.status != "200"){
            const PrevPokemon = document.getElementById("PrevPokemon");
            PrevPokemon.value = "No hay pokemon Previo"
        }
        else{
            return respuesta.json();
        }
    })  
    .then((data) =>{
        if(data){
            const PrevPokemon = document.getElementById("PrevPokemon");
            const nextPokemon  = document.getElementById("nextPokemon");
            PrevPokemon.value = data.name;

            //Guardar ID del pokemon anterior
            const hiddenPrevPk  = document.getElementById("hiddenPrevPk");
            hiddenPrevPk.value = parseInt(data.id);            
        }
    })
}


//FUNCION mostrar nombre del pokemon siguiente
const NextPokemon = (url) =>{  

    NextID = parseInt(url.id) + 1;
    const NextURL = `https://pokeapi.co/api/v2/pokemon/${NextID}`;
    

    fetch(NextURL).then((respuesta) => {
        if(respuesta.status != "200"){
            const nextPokemon = document.getElementById("nextPokemon");
            nextPokemon.value = "No hay pokemon Siguinente"
        }
        else{
            return respuesta.json();
        }
    })  
    .then((data) =>{
        if(data){
            const nextPokemon  = document.getElementById("nextPokemon");
            nextPokemon.value = data.name;
            //Guardar ID del pokemon siguiente
            const hiddenNextPk  = document.getElementById("hiddenNextPk");
            hiddenNextPk.value = parseInt(data.id);
        }
    })

}

//FUNCION mostrar pokemon sigueinte
const fetchNext = () =>{
    const pokeNameInput = document.getElementById("pokeName");
    pokeNameInput.value = nextPokemon.value;
    fetchPokemon();
}

//FUNCION mostrar pokemon anterior
const fetchPrev = () =>{
    const pokeNameInput = document.getElementById("pokeName");
    pokeNameInput.value = PrevPokemon.value;
    fetchPokemon();
}





