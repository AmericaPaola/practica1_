function  getIMC ( ) {
var  peso = parseFloat ( documento . getElementById ( "peso" ) . valor ) ;
var  Altura = parseFloat ( document . getElementById )"Altura" ) . valor ) ;
var  imc = peso / ( Altura * Altura )
documento . getElementById ( "imc" ) , innerHTML = imc ;
}
