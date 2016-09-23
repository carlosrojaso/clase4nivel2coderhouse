//Los atributos van asignados como variables, los metodos como variables con funciones (this.metodo = function(){} )
function auto(col, vel, model, mar){
    this.color = col;
    this.velocidad = vel;
    this.modelo = model;
    this.marca = mar;

    // Setters
    this.setColor = function(col){
        this.color = col;
    }
    this.setVelocidad = function(vel){
        this.velocidad = vel;
    }
    this.setModelo = function(mod){
        this.modelo = mod;
    }
    this.setMarca = function(mar){
        this.marca = mar;
    }
    //Getters
    this.getColor = function(){
        return this.color;
    }
    this.getVelocidad = function(){
        return this.velocidad;
    }
    this.getModelo = function(){
        return this.modelo;
    }
    this.getMarca = function(){
        return this.marca;
    }
    this.acelerar = function() {
        this.velocidad = this.velocidad + 10;
    }
    this.pintar = function() {
        this.color = "negro";
    }
}
// Si quiero acceder a un tributo lo escribo solo con un punto (objeto.atributo) y si quiero usar un metodo para asignar o mostrar uso parentesis () objeto.metodo();
//Crear un objeto para moestrar
var auto1 = new auto("azul",50,2016,"BMW");

document.write("La velocidad es: " +  auto1.getVelocidad() + " es de color " + auto1.getColor() + "<br/>");


auto1.setColor("gris");
auto1.setVelocidad(200);

document.write("La velocidad es: " +  auto1.getVelocidad() + " es de color " + auto1.getColor() +  "<br/>");

auto1.acelerar();
auto1.pintar();

document.write("La velocidad es: " +  auto1.getVelocidad() + " es de color " + auto1.getColor() +  "<br/>");
