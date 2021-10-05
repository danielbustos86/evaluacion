const validaRut = rutCompleto => {
  
    rutCompleto = rutCompleto.replace('‐', '-');
    let tmp = rutCompleto.split('-');
    if (tmp[0] > 2000000) {
      let digv = tmp[1];
      let rut = tmp[0];
      if (digv == 'K') digv = 'k';
      return digitoV(rut) == digv;
    } else {
      return false;
    }
  }
  const digitoV = (rutLimpio) => {
    let M = 0,
      S = 1;
    for (; rutLimpio; rutLimpio = Math.floor(rutLimpio / 10))
      S = (S + rutLimpio % 10 * (9 - M++ % 6)) % 11;
    return S ? S - 1 : 'k';
  }
  

  const palindromo = producto => 
{
	
 
	// eliminamos los espacios en blanco
	let palabra=producto.replace(/ /g, "");
 
	for (var i=0;i<palabra.length;i++){
		if(palabra[i]!=palabra[palabra.length-i-1]){
			return false;
		}
	}
	return true;
}
 

module.exports = {
    validaRut,
    palindromo

};