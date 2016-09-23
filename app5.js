//Singleton

var persona1 = new function(){
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
  };

document.write(persona1.escuchar());
