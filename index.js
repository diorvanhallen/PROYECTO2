
var tareas = [{nombre: 'tarea1'},{nombre: 'tarea2'}, {nombre: 'tarea3'}]

//localstorage (pndiente/0)    
window.onload = () => {
   console.log(array)
}

//dato es objeto
function agregarTarea(tarea) {
    //aniade task al arreglo
    tareas.push(tarea)
    return tareas
}

function eliminartarea(nombredelatarea) {
    //filter para los que coincidan con la condicional
    const tareasFiltradas = tareas.filter((tarea) => {
        return tarea.nombre != nombredelatarea //condicional
    })
    tareas = tareasFiltradas
}

function actualizardato(dato){
    console.log('Agregando Nombre')
}

//minuto 2759
