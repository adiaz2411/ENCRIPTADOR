const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".text__o");
const invalidcharacters = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;
const btn_E = document.querySelector(".btn__Enc");
const btn_D = document.querySelector(".btn__Desenc");
const btn_C = document.querySelector(".btn__Copiar");
const btn_B = document.querySelector(".btn-borrar");

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`
/* <footer class="piepag">
            <p class="devep">&copy Copyright Development Andres Diaz</p>
            <img class="alura" src="/ENCRIPTADOR BATMAN/img/logo-alura.png" alt="alura-logo"><p class="dep"></p>
        </footer>*/
function validarTexto(){
    let menssajeNew = document.querySelector("#texto").value;
    if(menssajeNew.match(invalidcharacters) != null){
        limpiar();
        alert("Solo letras minúsculas y sin acentos");
    }

}
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value); 
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();
    for(let i=0; i< matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    
}
function desencriptar (stringDesencriptada){
    let matrizCodigo =  [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase();
    for(let i=0; i< matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
function btnCopiar(){
    mensaje.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    messaje.innerHTML = "Copiado";
    setTimeout(()=>messaje.innerHTML ="",800);
    limpiar();
}

function limpiar(){
    document.querySelector(".text").value ="";
    document.querySelector(".text__o").value ="";
}

function ocultarImagen(){
    var textoVacio = "";
    let textoT = document.querySelector("#tA").value;
    textoT;
    if(textoVacio !== textoT){
        document.querySelector("#deck").style.display = "none";
    } else document.querySelector("#deck").style.display = "";
}

function btnBorrar() {
    document.querySelector("#texto").placeholder = "Ingrese el texto aqui";
    document.querySelector("#tA").placeholder = "";
    document.querySelector("#tA").style.color = "#495057";
    limpiar();
    ocultarImagen();
}

btn_E.addEventListener("click", validarTexto);
btn_E.addEventListener("click", btnEncriptar);

btn_D.addEventListener("click", validarTexto);
btn_D.addEventListener("click", btnDesencriptar);

btn_C.addEventListener("click", btnCopiar);
btn_B.addEventListener("click", btnBorrar);