/*// obteniendo la informacion por medio del DOM y los IDs
const numeroDocumento = document.getElementById("Número de Documento")
const nombres = document.getElementById("Nombres y apellidos")
const rol = document.getElementById("Perfil")
const telefono = document.getElementById("Teléfono")
const correo = document.getElementById("Correo Institucional")
const dependencia = document.getElementById("Facultad a la que Pertenece")
const portatil = document.getElementById("Número de Portátil que se le Presta")
const fecha = document.getElementById("Fecha de Préstamo")
const nota = document.getElementById("Observaciones del Equipo Portátil")

//llamado de los formularios
const formularioPrestamo = document.getElementById("registro-prestamo")
const formularioDevolucion = document.getElementById("registro-devolucion")



class Usuario{
    constructor( numeroDocumento,nombres, rol, telefono, correo, dependencia, portatil, fecha, nota){
        this.numeroDocumento = numeroDocumento
        this.nombres = nombres
        this.rol = rol
        this.telefono = telefono
        this.correo = correo 
        this.dependencia = dependencia
        this.portatil = portatil
        this.fecha = fecha
        this.nota = nota
    }
}

//el evento  para formularioPrestamo va a ser de tipo enviar o guardar es decir submit
formularioPrestamo.addEventListener("submit" , function(event){

    //previene que la página se recargue sin antes hacer la logica del addEventlistener
    event.preventDefault()

    let valornumeroDocumento = numeroDocumento.value
    let valorNombres = nombres.value
    let valorrol = rol.value
    let valortelefono = telefono.value
    let valorcorreo = correo.value
    let valordependencia = dependencia.value
    let valorportatil = portatil.value
    let valorfecha = fecha.value
    let valornota = nota.value

    // se crea un objeto llamado prestamo

    const prestamo = new Usuario(valornumeroDocumento,valorNombres,valorrol,valortelefono,valorcorreo,valordependencia,valorportatil,valorfecha,valornota)

    alert("Préstamo registrado con exito")
    console.log(prestamo)
})*/

// obteniendo la informacion por medio del DOM y los IDs
const numeroDocumento = document.getElementById("numero_id");
const nombres = document.getElementById("nombre");
const rol = document.getElementById("perfil");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("email");
const dependencia = document.getElementById("facultad");
const portatil = document.getElementById("numero_portatil");
const fecha = document.getElementById("fecha_prestamo");
const nota = document.getElementById("observaciones");

// llamado de los formularios
const formularioPrestamo = document.getElementById("registro-prestamo");
const formularioDevolucion = document.getElementById("registro-devolucion");

class Usuario{
    constructor( numeroDocumento,nombres, rol, telefono, correo, dependencia, portatil, fecha, nota){
        this.numeroDocumento = numeroDocumento
        this.nombres = nombres
        this.rol = rol
        this.telefono = telefono
        this.correo = correo 
        this.dependencia = dependencia
        this.portatil = portatil
        this.fecha = fecha
        this.nota = nota
    }
}
// ...

// el evento  para formularioPrestamo va a ser de tipo enviar o guardar, es decir, submit
formularioPrestamo.addEventListener("submit", function(event) {
    // previene que la página se recargue sin antes hacer la lógica del addEventlistener
    event.preventDefault();

    let valornumeroDocumento = numeroDocumento.value;
    let valorNombres = nombres.value;
    let valorrol = rol.value;
    let valortelefono = telefono.value;
    let valorcorreo = correo.value;
    let valordependencia = dependencia.value;
    let valorportatil = portatil.value;
    let valorfecha = fecha.value;
    let valornota = nota.value;

    // se crea un objeto llamado prestamo
    const prestamo = new Usuario(
        valornumeroDocumento,
        valorNombres,
        valorrol,
        valortelefono,
        valorcorreo,
        valordependencia,
        valorportatil,
        valorfecha,
        valornota
    );

    let prestamos = []

    let localPrestamos = localStorage.getItem("prestamos")
    // si localprestamos no esta vacio lo convierte a objeto para hacer un push 

    if (localPrestamos){
        prestamos = JSON.parse(localPrestamos)
    }
    prestamos.push(prestamo)
    localStorage.setItem("prestamos", JSON.stringify(prestamo))
    alert("Prestamo regitrado")
    /*alert("Préstamo registrado con éxito");
    console.log(prestamo);*/
});

