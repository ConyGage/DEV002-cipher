import cipher from './cipher.js';

//npm tesconsole.log(cipher);
//Inputs Llamado    //Llamamos a los inputs que contendran texto
const messageConteiner = document.getElementById("introMsn")
const codeConteiner = document.getElementById("encryptCode")
const encryptMsnConteiner = document.getElementById("encryptMsn")
//
//Botones Llamado   //Llamamos a los botones que accionarán un acto
const btnEncrypt = document.getElementById("btnEncrypt")
const btnClear = document.getElementById("btnClear")
const btnUnEncrypt = document.getElementById("btnUnEncrypt")
const btnSendMsn = document.getElementById("btnSendMsn")
//
//Eventos-Activadores   //Especificamos que eventos se acciónaran, cuándo lo harán y con la función el qué y cómo lo haran
messageConteiner.addEventListener("keyup", function () {
    messageConteiner.value = messageConteiner.value.toUpperCase()//this.value = this.value.toUpperCase() "this.value === messangeConteiner.value"
})
//
//
btnEncrypt.addEventListener("click", function () {
    //console.log(messageConteiner, codeConteiner) Este console fue aplicado para revisar el error de valor nulo al no haber referencia correcta de Code-code
    document.getElementById("encryptMsn").value = cipher.encode(codeConteiner.value, messageConteiner.value)
    //document.getElementById("encryptMsn").value = cipher.encode(codeConteiner.value, messageConteiner.value) CREÍ QUE ERA REDUNDANTE ASÍ QUE LO BLOQUEE Y COMBINÉ EL DOCUMENT.GETELEMNTBYID CON LA FUNCIÓN DE CIPHER...
})
btnClear.addEventListener("click", function () {
    messageConteiner.value = ""
    codeConteiner.value = ""
    encryptMsnConteiner.value = ""//Más avanzado, animación de error fatal con un "If"
})
btnUnEncrypt.addEventListener("click", function () {
    document.getElementById("encryptMsn").value = cipher.decode(codeConteiner.value, messageConteiner.value)
})
btnSendMsn.addEventListener("click", function () {
    //window.href=msnReceived.html//Investigar enlace a otro html.
    //If no hay mensaje en msnConte, error fatal... o, No, debo envier el codigo de las coordenadas a la comandante Rylek
});
//