    // Creo el objeto con los metodos get y set.
  function Pelicula (id, titulo, descripcion, duracion, year, director, actores){

      this.id = id;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.duracion = duracion;
      this.year = year;
      this.director = director;
      this.actores = actores;

      //Metodos get.

      this.getId = function(){
        return this.id;
      }

      this.getTitulo = function(){
        return this.titulo;
      }
      this.getDescripcion = function(){
        return this.descripcion;
      }
      this.getDuracion = function(){
        return this.duracion;
      }
      this.getYear = function(){
        return this.year;
      }
      this.getDirector = function(){
        return this.director;
      }

      this.getActores = function(){
        return this.actores;
      }


      // metodos setter
      this.setTitulo = function(tit){
        this.titulo = tit;
      }

      this.setDescripcion = function(desc){
        this.descripcion = desc;
      }

      this.setDuracion = function(dur){
        this.duracion = dur;
      }

      this.setYear = function(year){
        this.year = year;
      }

      this.setDirector = function(dire){
        this.director = dire;
      }

      this.setActores = function(arreglo){
        this.actores = arreglo;
      }

      this.addActor = function(nomActor){
        this.actores.push(nomActor);
        
    }
      }

function addPelicula(otraPelicula){
    estante.push(otraPelicula);
}
var estante =[];
var unaPelicula = new Pelicula(1, "Duro de Matar", "Una pelicula con alguien duro de matar", 60, 1988, "John McTiernan", ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"]);
var otraPelicula = new Pelicula(2, "Shrek", "Otra pelicula de accion", 60, 1988, "John McTiernan", ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"]);
addPelicula(unaPelicula);
addPelicula(otraPelicula);

for(i in estante){
  document.write(estante[i].getTitulo() + "<br/>" + estante[i].getDescripcion()+"<br/>");
}
