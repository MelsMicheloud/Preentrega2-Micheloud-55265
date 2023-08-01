
let userTratamiento = 0
let userPrecio = 0
let userDia = 0
let userHora = 0
let nombrePaciente = 0


//objeto con funcion constructora
const Paciente = function(nombre,apellido,edad,telefono,cobertura){
	this.nombre = nombre
	this.apellido = apellido
	this.edad = edad
	this.telefono = telefono
	this.cobertura = cobertura
	}
//ARRAY
let paciente = []
//------------------------------------
const Especialidad = function(nombreEsp,precio){
	this.nombreEsp = nombreEsp
	this.precio = precio
	}
let especialidad1 = new Especialidad("diagnostico", 5000)
let especialidad2 = new Especialidad("odontologia", 6000)
let especialidad3 = new Especialidad("protesis", 9000)
let especialidad4 = new Especialidad("estetica", 9000)
let especialidad5 = new Especialidad("odontopediatria", 5000)
//ARRAY
let especialidad = [especialidad1,especialidad2,especialidad3,especialidad4,especialidad5]

const TratSelec = function(tratamiento,precioTratamiento,diaTurno,horaTurno){
    this.tratamiento = tratamiento
    this.precioTratamiento = precioTratamiento
    this.diaTurno = diaTurno
    this.horaTurno = horaTurno
}
let tratamientoUser = []

function agregarTrat (){
    let tratSelec = new TratSelec(userTratamiento,userPrecio,userDia,userHora)
    tratamientoUser.push(tratSelec)
}

//------------------------------------

const TurnosOnline = function(dia, hora){
    this.dia = dia
    this.hora = hora
}
let turnosOnline1 = new TurnosOnline("Lunes", 15)
let turnosOnline2 = new TurnosOnline("martes", 17)
let turnosOnline3 = new TurnosOnline("miercoles", 14)
let turnosOnline4 = new TurnosOnline("jueves", 16)
let turnosOnline5 = new TurnosOnline("viernes", 18)
//ARRAY
let turnosOnline = []

//---------------------------------------------------------
//funcion ficha del paciente
function ingresoPaciente(){
    let nombreUser = prompt("Ingresa tu nombre")
    nombrePaciente = nombreUser
    let apellidoUser = prompt("Ingresa tu Apellido")
    let edadUser = parseInt(prompt("Ingresa tu edad Edad"))
    let telefonoUser = parseInt(prompt("Ingresa tu número de teléfono"))
    let coberturaUser = prompt("¿Cuál es tu Obra Social")

    let fichaPaciente = new Paciente (nombreUser,apellidoUser,edadUser,telefonoUser,coberturaUser)
    paciente.push(fichaPaciente)
}

//funcion filtro por diagnostico
function filtrarEspecialidad(){
    let tratamiento = prompt("Ingrese la especialidad deseada: Diagnóstico | Odontología General | Protesis | Estética | Odontopediatría").trim()
    let resultado = especialidad.filter((esp)=> esp.nombreEsp.includes(tratamiento))

    if (resultado.length>0)
        switch (tratamiento){
            case "diagnostico":
                alert("La especialidad seleccionadas es Diagnóstico. precionar Enter para continuar")
                userTratamiento = especialidad[0].nombreEsp
                userPrecio = especialidad[0].precio
                userDia = turnosOnline1.dia
                userHora = turnosOnline1.hora
                break;
            case "odontologia":
                alert("La especialidad seleccionadas es Odontologia. precionar Enter para continuar")
                userTratamiento = especialidad[1].nombreEsp
                userPrecio = especialidad[1].precio
                userDia = turnosOnline2.dia
                userHora = turnosOnline2.hora
                break;
            case "protesis":
                alert("La especialidad seleccionadas es protesis. precionar Enter para continuar")
                userTratamiento = especialidad[2].nombreEsp
                userPrecio = especialidad[2].precio
                userDia = turnosOnline3.dia
                userHora = turnosOnline3.hora
                break;
            case "estetica":
                alert("La especialidad seleccionadas es estetica. precionar Enter para continuar")
                userTratamiento = especialidad[3].nombreEsp
                userPrecio = especialidad[3].precio
                userDia = turnosOnline4.dia
                userHora = turnosOnline4.hora
                break;
            case "odontopediatria":
                alert("La especialidad seleccionadas es odontopediatria. precionar Enter para continuar")
                userTratamiento = especialidad[4].nombreEsp
                userPrecio = especialidad[4].precio
                userDia = turnosOnline5.dia
                userHora = turnosOnline5.hora
                break;
            default:
                alert("Especialidad no encontrada")
        }
        agregarTrat()
} 

//funcion turno disponiblre


//---------------------------------------------------------

alert("Bienvenido a Ododent")
alert("Llene el siguiente formulario para poder solicitar turnos a nuestra operadora")
ingresoPaciente()
filtrarEspecialidad()
console.log("***********Ficha Registro de Paciente***********")
console.table(paciente)
console.log (" ")
console.log("***********Detalle Turno Online***********")
console.table(tratamientoUser)
console.log(" ")
console.log("Gracias " + nombrePaciente + " por contactarnos. La operadora se pondra en contacto con usted dentro de las 24hs para confirmar el turno solicitado." )
//lert("si desea solicitar un turno presione enter")






//----------------------------------------------------------------------
/* let consulta = 1
let tratamiento1 = 0
let fecha = 0

while(consulta <= 4){
alert("Bienvenido a Ododent")
let nombre = prompt("ingresa tu nombre");
turnoDisponible()

function turnoDisponible(){
alert("Hola " + nombre)
let tratamiento = prompt("Necesitas TURNO para: ortodoncia | tratamiento | implantes | blanqueamiento")

if(tratamiento == "ortodoncia"){
    tratamiento1 = tratamiento
    alert("Turno disponible para el día Martes 25/07/2023 a las 17:30hs. precionar Enter para continuar")
    fecha = "Martes 25/07/2023 a las 17:30hs"
    let turno = prompt("¿Desea confirmar el turno?")
        if (turno == "si") {
            consola()
            consulta ++;
        }else{
            alert("turno rechazado")
            turnoDisponible()
        }
    }else if (tratamiento == "tratamiento"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Jueves 27/07/2023 a las 15:00hs. precionar Enter para continuar")
        fecha = "Jueves 27/07/2023 a las 15:00hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
    }else if (tratamiento == "implantes"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Viernes 28/07/2023 a las 15:45hs. precionar Enter para continuar")
        fecha = "Viernes 28/07/2023 a las 15:45hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
    }else if (tratamiento == "blanqueamiento"){
        tratamiento1 = tratamiento
        alert("Turno disponible para el día Martes 25/07/2023 a las 18:15hs. precionar Enter para continuar")
        fecha = "Martes 25/07/2023 a las 18:15hs."
        let turno = prompt("¿Desea confirmar el turno?")
            if (turno == "si" ) {
                alert("Turno confirmado su turno es nro " + consulta)
                consola()
                consulta ++;
            }else{
                alert("turno rechazado")
                turnoDisponible()
            }
        }
    }
}

function consola(){
    console.log("***********SU TURNO*************")
    console.log("Turno confirmado su turno es nro " + consulta)
    console.log("Su consulta es por " + tratamiento1)
    console.log("El día " + fecha)
    console.log(" ")
} */


