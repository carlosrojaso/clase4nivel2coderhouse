// Definicion de Objeto.

function Persona(){
  	this.genero = "M";
  	this.edad = "18";
  	this.estado= "soltero";
  	this.nacionalidad = "chile";
  	this.ocupacion = "programador";
  	this.nombre = "Jhon Doe";
  	this.id ="24675323-K";

  	this.hablar = function(){
  		return "Estoy hablando<br/>";
  	}

  	this.caminar = function(){
  		return "Estoy Caminando";
  	}

  	this.escuchar = function(){
  		return "Estoy Escuchando";
  	}

  	this.pedirNombre = function(){
  		return this.nombre;
  	}

  	this.pedirGenero = function(){
  		return this.genero;
  	}

  	this.getNacionalidad = function(){
  		return this.nacionalidad;
  	}

  	this.setNombre = function(nom){
  		this.nombre = nom;
  	}
  }

Persona.prototype.altura = 183;
Persona.prototype.miFuncion = function() {
    return this.altura + " " + this.ocupacion;
};


// Creo un Objeto
 var persona1 = new Persona();

 document.write(persona1.miFuncion());
 document.write(persona1.pedirNombre());

// Asignar un nombre

persona1.colocarNombre("Sebastian");
document.write(persona1.pedirNombre());
