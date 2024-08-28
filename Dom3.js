function promedio(){
    let materia1 = parseInt(document.getElementById("materia1").value);
    let materia2 = parseInt(document.getElementById("materia2").value);
    let materia3 = parseInt(document.getElementById("materia3").value);
    let materia4 = parseInt(document.getElementById("materia3").value);
    let materia5 = parseInt(document.getElementById("materia5").value);

    let calificacion = (materia1 + materia2 + materia3 + materia4 + materia5) / 5;

    //Mostrar el resultado
    alert("Tu calificación es:" + calificacion)
    
}

function borrar() {
    location.reload();
}