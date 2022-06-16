class Usuario{
    constructor(nombre,apellido,mascotas,libros){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mascotas=mascotas;
        this.libros=libros;
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascotas(){
        let numMascotas = parseInt(prompt('numero de mascotas')); 
        for(let i=0;i<numMascotas;i++){
            let Mascotas = prompt('agrgar especie de mascota')
            this.mascotas.push(Mascotas);
        }
        return console.log(this.mascotas);
    }
    getBookName(){
        return console.log(this.libros);
    }
}
let usuario = new Usuario('santiago','trujillo',[],['harry_potter','neruy','el_nuclio']); 

console.log(usuario);
console.log(usuario.getFullName());
usuario.addMascotas();
usuario.getBookName();