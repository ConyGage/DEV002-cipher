const cipher = {
  encode: function (offset, string) {//cipher.encode(offset, string): offset es el número de posiciones que queremos mover a la derecha en el alfabeto y string el mensaje (texto) que queremos cifrar.
    /*//Cambios------------------------------------------------
    if (string === null) 
    //Cambios
    //Cambios
    if (string === 0) 
    //Cambios
    //Cambios
    if (string === null) 
    //Cambios//Cambios*/
    if (!offset) {
      throw new TypeError("No... Debo establecer un rango de seguridad antes de encriptar el código")
    }
    if (!string) {
      throw new TypeError("¿Cuáles serán las coordenadas..?");
    }
    //Cambios------------------------------------------------
    /*if (!offset) {
      throw new TypeError("No... Debo establecer un rango de seguridad antes de encriptar el código")
    }*/
    //if (!string)
    //Analizar en ciclo el mensaje a codificar
    //Establecemos constantes que necesitaremos para codificar.
    //return ""; //Almacenará el resultado del proceso de cifrar. //Tiene este nombre rebuscado para practicar inglés... ;P
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Establezco el marco en el cuál me basaré para contar el desplazamiento-Offset. //Estaría más chido dunkeyAlfa, pero no sería muy profesional de mi parte ni lo suficientemente divertido para otras personas que lean el codigo...
    const offsetPositiv = (offset % 26 + 26) % 26;
    return string.replace(/[A-Z]/ig, c => alphabet[(alphabet.indexOf(c) + offsetPositiv) % 26]);
    //message.replace(/[A-Z]/ig, c => theAlfa[(theAlfa.indexOf(c) + code) % 26]);
    //console.log(this.encode);
  },
  decode: function (offset, string) {
    if (!offset) {
      throw new TypeError("No... Debo establecer un rango de seguridad antes de encriptar el código")
    }
    if (!string) {
      throw new TypeError("¿Cuáles serán las coordenadas..?");
    }
    /*if (!string)
    return "";*/
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const offsetPositiv = (offset % 26 - 26) % 26;
    return string.replace(/[A-Z]/ig, c => alphabet[(alphabet.indexOf(c) - offsetPositiv) % 26]);
  }
};

export default cipher;
