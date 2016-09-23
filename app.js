function departamento(){
this.personal = new Array();
this.anyadir = anyadir;
this.calcularNomina = calcularNominaDept;
}
function empleado(nomina){
this.nomina = nomina;
this.calcularNomina = calcularNominaEmpl;
}
function anyadir(objeto){
this.personal.push(objeto);
}
function calcularNominaDept(){
var nomina = 0;
for(var i = 0; i < this.personal.length; i++){
nomina += this.personal[i].calcularNomina();
}
return nomina;
}
function calcularNominaEmpl(){
return this.nomina;
}
empresa = new departamento();
empresa.anyadir(new empleado(200));
empresa.anyadir(new empleado(100));
contabilidad = new departamento();
contabilidad.anyadir(new empleado(120));
empresa.anyadir(contabilidad);
document.write(empresa.calcularNomina());

