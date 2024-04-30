nombre_invitado_array=[];
function submit(){
    var ver_invitado_array=[];
    for(var j=1; j<=4; j++){
        var nombre_invitado=document.getElementById("nombre_"+j).value;
        console.log(nombre_invitado);
        nombre_invitado_array.push(nombre_invitado);
    }

    console.log(nombre_invitado_array);
    var longitud=nombre_invitado_array.length;
    console.log(longitud);

    for(var a=0; a<longitud;a++){
        ver_invitado_array.push("<h4>NOMBRE - "+ nombre_invitado_array[a] + "</h4>");
        console.log(ver_invitado_array);
    }
    document.getElementById("mostrar_nombres_con_comas").innerHTML= ver_invitado_array;
    
}