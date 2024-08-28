const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.getElementById('btnCopiar');
const btnColar = document.getElementById('btnColar');

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

// aqui o texto vai criptogrfar 
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada
}


// aqui o texto vai cdescriptografar

function btnDesencriptar() {
    const textoDesencripitado = desencriptar(textArea.value);
    mensagem.value = textoDesencripitado;
    textArea.value = "";
}

function desencriptar(stringDesencripita) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesencripita = stringDesencripita.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencripita.includes(matrizCodigo[i][1])) {
            stringDesencripita = stringDesencripita.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencripita
}

// aqui o texto vai ser copiado para a área de tranferencia
function copiarTexto() {
    const mensagem = document.querySelector(".mensagem");
    const textoParaCopiar = mensagem.value;
    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            console.log('Texto copiado para a área de transferência');
        })
        .catch(err => {
            console.error('Erro ao copiar o texto: ', err);
        });
}


// aqui o texto vai ser colado na caixa de mensagem
function colarTexto() {
    const textArea = document.querySelector(".text-area");

    if (textArea) {
        navigator.clipboard.readText()
            .then(textoCopiado => {
                textArea.value = textoCopiado;
            })
            .catch(err => {
                console.error('Erro ao colar o texto: ', err);
            });
    } else {
        console.error('Área de texto não encontrada');
    }
}
