const botonE = document.getElementById("btn-Encrip");
const botonD = document.getElementById("btn-Desencrip");
const botonC = document.getElementById("btn-Cop");
const botonB = document.getElementById("btn-Borrar");
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g;

function validar() {
    let nuevomensaje = document.getElementById("texto").value;
    if (nuevomensaje.match(letras) != null) {
        limpiar();
        foco();
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Solo letras minúsculas y sin acentos",
            showConfirmButton: true,
            background: "#CCC",
            backdrop: `
            rgba(300, 8, 0, 0.4)
            url("./img/nyan-cat.gif")
            left top
            no-repeat
            `,
        });
    }
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto").value.trimStart();
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    nuevoTexto;

    document.getElementById("tA").value = nuevoTexto;
    document.getElementById("tA").style.color = "#495057";
    ocultarImagen();
}

function desencriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;

    document.getElementById("tA").value = nuevoTexto;
    document.getElementById("tA").style.color = "#495057";
    ocultarImagen();
}

function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("tA");
    textCopi.select();
    document.execCommand("copy");
    limpiar();

    foco();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,

        timer: 1500,
    });
}

function ocultarImagen() {
    var textoVacio = "";
    let textoT = document.getElementById("tA").value;
    textoT;
    if (textoVacio !== textoT) {
        document.getElementById("deck").style.display = "none";
    } else document.getElementById("deck").style.display = "";
}

function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("tA").value = "";
}

function foco() {
    document.getElementById("texto").focus();
}

function borrar() {
    document.getElementById("texto").placeholder = "Ingrese el texto aqui";
    document.getElementById("tA").placeholder = "";
    document.getElementById("tA").style.color = "#495057";
    limpiar();
    foco();
    ocultarImagen();
}

foco();
botonE.addEventListener("click", validar);
botonE.addEventListener("click", encriptar);

botonD.addEventListener("click", validar);
botonD.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);
botonB.addEventListener("click", borrar);
