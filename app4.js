// Literal
var persona = {
	nombre: "Juan",
	id:"24675323-K",
	hablar: function(){
		return "Estoy hablando<br/>";
	},
	caminar: function(){
		return "Estoy Caminando";
	},
	info: function(){
		this.nombre = "Pedro";
	}

};

var persona1 = Object.create(persona);

persona1.nombre = "Sebastian";
persona.apellido = "Gomez";
persona.nombre = "Juan";
persona.info();
document.write("Persona: " + persona.nombre + persona.apellido);
