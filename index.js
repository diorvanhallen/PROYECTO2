
var tareas = [{id:1, nombre: 'default'}, {id:2, nombre: 'tarea1'},{id:3, nombre: 'tarea2'}, {id:4, nombre: 'tarea3'}]

//localstorage (pndiente/0)    
window.onload = () => {
   const tareasConElFormato = JSON.parse(window.localStorage.getItem('tareas'))
   tareas.push(tareasConElFormato)
   tareas = tareasConElFormato
   console.log(tareas)
}

function guardarenlocalstorage(tareas) {
    window.localStorage.setItem('tareas', JSON.stringify(tareas))
}


//dato es objeto
function agregarTarea(tarea) {
    const tareaConID = {id:Math.random() ,...tarea}
    //aniade task al arreglo
    tareas.push(tareaConID)
    guardarenlocalstorage(tareas)
    return tareas
}

function eliminartarea(nombredelatarea) {
    //filter para los que coincidan con la condicional
    const tareasFiltradas = tareas.filter((tarea) => {
        return tarea.nombre != nombredelatarea //condicional
    })
    tareas = tareasFiltradas
    guardarenlocalstorage(tareas)
}

function actualizarTarea(tareaParaEditar){
    //filter
    const tareasFiltradas = tareas.filter((tarea) => {
        return tarea.id != tareaParaEditar.id //condicional
    })

    tareasFiltradas.push(tareaParaEditar)
    guardarenlocalstorage(tareas)
}

//minuto 2759
