 
const textoEncriptar=document.querySelector('#textoUsuario');
const botonEncriptar=document.querySelector('#botonEncriptar');
const aviso = document.querySelector('#instrucciones');
const titulo2= document.querySelector('h2');
const parrafo2 = document.querySelector('#parrafo2');
const imagen = document.querySelector('#guy');
const containerTexto = document.querySelector(".container-left");
// const buttonCopy = document.querySelector("#botonCopiar");

let textoEncriptado;
let j=0;
let cont=0;

 
function mostrarTexto(elemento,texto){
    let textoHtml=document.querySelector(elemento)
    textoHtml.innerHTML=texto;
}

function limpiarCaja() {
    document.querySelector('#textoUsuario').value = '';
}

//Funcion para ocultar contenedores
function ocultarCaja(caja){
    var x = document.querySelector(caja);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function mostrarCaja(elemento){
    var y = document.querySelector(elemento);
    y.style.display = "block";
}

// function copiarTexto(){
//      let copy= toString (document.getElementById('textoEncriptado'));
//     const copyToClipboard = async str => {
//         try {
//           await navigator.clipboard.writeText(str);
//           console.log(typeof(copy));
//           alert('Copiado al portapapeles');
//         } catch (error) {
//           console.log(error);
//         }
//       };
//         copyToClipboard(toString(copy.textContent));
// }

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    alert("Copiado al portapapeles");
    document.body.removeChild(aux);
  }

//Funcion para el boton de encriptar
function btnEncriptar() {
    //Funcion al presionar el boton de encriptar
    //containerTexto.style=remove;
    let texto= textoEncriptar.value;
    let textoFiltro = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (textoFiltro =='') { //si no escribimos nada
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.fontWieght ="800"
        aviso.textContent = "El campo no debe de estar vacio, intenta de nuevo."

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== textoFiltro){ //

        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.fontWieght ="800"
        aviso.textContent = "El campo no debe contener acentos, intenta de nuevo."

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    }
    else if(texto !== textoFiltro.toLowerCase() ){

        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.fontWieght ="800"
        aviso.textContent = "El campo no debe contener mayusculas, solo minusculas."

        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);

    }else{ //Cuando el formato sea el correcto
    
        texto=texto.replace(/e/mg,"enter");
        texto=texto.replace(/i/mg,"imes");
        texto=texto.replace(/o/mg,"ober");
        texto=texto.replace(/u/mg,"ufat");
        texto=texto.replace(/a/mg,"ai");

        if(texto.length > 0){
            limpiarCaja();
            titulo2.remove();
            parrafo2.remove();
            imagen.remove();
            mostrarTexto('#textoEncriptado',texto);
             mostrarCaja('#botonCopiar');
        }
      
        console.log(texto);
       

    }

}


function desencriptar(){
     //Funcion al presionar el boton de desencriptar

     let texto2= textoEncriptar.value
     let textoFiltro2 = texto2.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
 
     if (textoFiltro2 =='') { //si no escribimos nada
         aviso.style.background = "#0A3871";
         aviso.style.color = "#FFFF";
         aviso.fontWieght ="800"
         aviso.textContent = "El campo no debe de estar vacio, intenta de nuevo."
 
         setTimeout(() => {
             aviso.removeAttribute("style");
         }, 1500);
     }
     else if (texto2 !== textoFiltro2){ //
 
         aviso.style.background = "#0A3871";
         aviso.style.color = "#FFFF";
         aviso.fontWieght ="800"
         aviso.textContent = "El campo no debe contener acentos, intenta de nuevo."
 
         setTimeout(() => {
             aviso.removeAttribute("style");
         }, 1500);
 
     }
     else if(texto2 !== textoFiltro2.toLowerCase() ){
 
         aviso.style.background = "#0A3871";
         aviso.style.color = "#FFFF";
         aviso.fontWieght ="800"
         aviso.textContent = "El campo no debe contener mayusculas, solo minusculas."
 
         setTimeout(() => {
             aviso.removeAttribute("style");
         }, 1500);
 
     }else{ //Cuando el formato sea el correcto
         texto2=texto2.replace(/ai/mg,"a");
         texto2=texto2.replace(/enter/mg,"e");
         texto2=texto2.replace(/imes/mg,"i");
         texto2=texto2.replace(/ober/mg,"o");
         texto2=texto2.replace(/ufat/mg,"u");
 
         if(texto2.length > 0){
             limpiarCaja();
             titulo2.remove();
             parrafo2.remove();
             imagen.remove();
             mostrarTexto('#textoEncriptado',texto2);
            mostrarCaja('#botonCopiar');
         }
       
         console.log(texto2);
 
     }

}

// Inicio de la app
console.log('Bienvenido a la app');
ocultarCaja('#botonCopiar');
alert('Bienvenido a la app del enriptador.');
