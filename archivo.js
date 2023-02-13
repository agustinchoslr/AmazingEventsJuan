let miNombre = "Agustín";
let miApellido = "Juan";
let miEdad = 31;
let miMascota = "Galilea";
let edadMascota = 2;
let soyArgentino = true;
console.log("Mi nombre: " + miNombre + "<br> mi apellido: " + miApellido + "¬ mi Edad: " + miEdad + "¬ mi mascota: " + miMascota + "¬ Edad Mascota: " + edadMascota + "¬ soy Argentino?:" + soyArgentino)
let nombreCompleto = miNombre + miApellido;
let textoPresentación = "Mi nombre: " + miNombre + "<br> mi apellido: " + miApellido + "<br> mi Edad: " + miEdad + "<br> mi mascota: " + miMascota + "<br> Edad Mascota: " + edadMascota + "<br> soy Argentino?: " + soyArgentino;
document.getElementById('actualizable').innerHTML = textoPresentación;
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad * edadMascota;
let divisionEdades = miEdad / edadMascota;
let alumno = {
    nombre: "agustin",
    edad: 31,
    genero: 'masculino',
    trabajos: ['ecommerce manager', 'portero', 'papá'],
    cursando: ['FrontEnd developer', 'Java', 'CIberseguridad', 'fundamentos de python'],
    hijos: true,
    tiempoDisponible: false
};
console.table(alumno);
// por qué da error acá:?
// console.log("Datos del objeto alumno: " + alumno.nombre + alumno.edad + alumno.genero + alumno.trabajos + alumno.cursando + alumnos.hijos + alumno.tiempoDisponible)

let mascota = {
    nombre: "Umma",
    edad: 8,
    tipo: 'perra',
    buenaSalud: false,
    trucos: ['da la patita', 'se sienta']
};
console.table(mascota);
//quizá el anterior había que hacerlo así?:
console.log(mascota);

let frutas = ['Moras', 'Banana', 'Kiwi', 'Frutilla', 'Mango'];
console.log(frutas);
console.log(frutas[0] + ' ' + frutas[1] + ' ' + frutas[2] + ' ' + frutas[3] + ' ' + frutas[4]);


let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0] + ' ' + numeros[1] + ' ' + numeros[2] + ' ' + numeros[3] + ' ' + numeros[4]);

let padre = alumno;
let madre = {
    nombre: "Romina",
    edad: 31,
    genero: 'Femenino',
    trabajos: ['Mamá'],
    cursando: [],
    hijos: true,
    tiempoDisponible: false
};

let hijo = {
    nombre: "Julián",
    edad: 9,
    genero: 'Masculino',
    trabajos: [],
    cursando: ['Escuela', 'fútbol', 'futsal'],
    hijos: false,
    tiempoDisponible: true
};

let hija = {
    nombre: "Margarita",
    edad: 4,
    genero: 'Femenino',
    trabajos: [],
    cursando: ['Jardín de infantes', 'vallet'],
    hijos: false,
    tiempoDisponible: true
};


let familia = [mascota, padre, madre, hijo, hija];
console.log(familia);
//lo siguiente no funciona. Después me explicás?
console.log(familia[0] + familia[1] + familia[2] + familia[3] + familia[4]);

let textoAleatorio = frutas[1] + numeros[3] + familia[4];
console.log(textoAleatorio);


