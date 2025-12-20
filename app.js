//Sistema de registro de alumnos de EBAC

console.log("Sistema EBAC de Registro de Alumnos");
console.log("Bienvenido al sistema de registro de alumnos de EBAC, elija la opción que desea realizar");

var registro = [
    {nombre: "Salvador Mora", edad: "30", residencia: "CDMX", programa: "Desarrollador FE", correo: "salvadormora@ebac.mx", telefono: "5555555555", actividad: "Activo"},
    {nombre: "Maria Huber", edad: "34", residencia: "Edo Mex", programa: "Desarrollador BE", correo: "maria@ebac.mx", telefono: "5555555487", actividad: "Activo"},
    {nombre: "SAntiago Gonzalez", edad: "24", residencia: "CDMX", programa: "Analisis de Datos", correo: "santiagoglez@ebac.mx", telefono: "5558968555", actividad: "Activo"},
    {nombre: "Miguel Gutierritos", edad: "28", residencia: "Puebla", programa: "Desarrollador BE", correo: "mmiguelgut@ebac.mx", telefono: "13465555555", actividad: "Inactivo"},
    {nombre: "Alvin Yakitori", edad: "58", residencia: "Mazatlan", programa: "Desarrollador FE", correo: "alvinyak@ebac.mx", telefono: "134655878555", actividad: "Inactivo"},
 ] 

function agregarAlumno() {
    var nombre = prompt("Ingresa: Nombre del nuevo alumno");
    var edad = prompt("Ingresa: Edad del alumno");
    var programa = prompt("Ingresa: Ingresa programa a estudiar");
    var correo = prompt("Ingresa: Correo electrónico del alumno");
    var residencia = prompt("Ingresa: Zona de residencia del alumno");
    var telefono = prompt("Ingresa: Nunmero de telefono del alumno");
    var actividad = prompt("El alumno esta activo?");

    var nuevoAlumno = {
        nombre: nombre,
        edad: edad,
        residencia: residencia,
        programa: programa,
        correo: correo,
        telefono: telefono,
        actividad: actividad
    };
    registro.push(nuevoAlumno);
}

 function consutarRegistros(){
    for(var i = 0; i < registro.length; i++) {
        console.log("Nombre: " + registro[i].nombre);
        console.log("Edad: " + registro[i].edad);
        console.log("Residencia: " + registro[i].residencia);
        console.log("Programa: " + registro[i].programa);
        console.log("Correo: " + registro[i].correo);
        console.log("Teléfono: " + registro[i].telefono);
        console.log("Actividad: " + registro[i].actividad);
    }
}

function eliminarRegistro() {
    var nombre = prompt("Ingresa el nombre del alumno a eliminar");
    for (var i = 0; i < registro.length; i++) {
        if (registro[i].nombre === nombre) {
            registro.splice(i, 1);
            alert("Registro eliminado");
            return;
        }
    }
    alert("No se encontró el registro");
}

function editarRegistro() {
    var nombre = prompt("Ingresa el nombre del alumno a editar");
    for (var i = 0; i < registro.length; i++) {
        if (registro[i].nombre === nombre) {
            var nuevoNombre = prompt("Ingresa el nuevo nombre del alumno");
            var nuevaEdad = prompt("Ingresa la nueva edad del alumno");
            var nuevoPrograma = prompt("Ingresa el nuevo programa a estudiar");
            var nuevoCorreo = prompt("Ingresa el nuevo correo electrónico del alumno");
            var nuevaResidencia = prompt("Ingresa la nueva zona de residencia del alumno");
            var nuevoTelefono = prompt("Ingresa el nuevo número de teléfono del alumno");
            var nuevaActividad = prompt("El alumno esta activo?");

            registro[i].nombre = nuevoNombre;
            registro[i].edad = nuevaEdad;
            registro[i].residencia = nuevaResidencia;
            registro[i].programa = nuevoPrograma;
            registro[i].correo = nuevoCorreo;
            registro[i].telefono = nuevoTelefono;
            registro[i].actividad = nuevaActividad;

            alert("Registro editado");
            return;
        }
    }
    alert("No se encontró el registro");
}

do{
var opcion = prompt("Seleccoione una opción: \n 1. Agregar nuevo alumno \n 2. Buscar alumno \n 3. Eliminar alumno \n 4. Editar alumno \n 5. Salir del sistema");

if (opcion === "1") {
    alert("Agrergar nuevo alumno");
    agregarAlumno();
} else if (opcion === "2") {
    alert("Mostrar registro alumno");
    consutarRegistros();
} else if (opcion === "3") {
    alert("Eliminar registro alumno");
} else if (opcion === "4") {
    alert("Editar registro alumno");
} else if (opcion === "5") {
    alert("Salir del sistema");
} else {
    alert("Opción no válida");
}

   var continuar = prompt("¿Deseas hacer otra accion? (s/n)");

} while (continuar !== "s");


