
function mostrarSeleccion() {

var div1 = document.getElementById("cajas-b");
var div2 = document.getElementById("cajas-c");
var div3 = document.getElementById("cajas-d");
var div4 = document.getElementById("cajas-e");
var div5 = document.getElementById("cajas-f");
var xd = document.getElementById("xd");

var opciones = document.getElementById("opcion");
    var opcionSeleccionada = opciones.value;    

    if(opcionSeleccionada =="opcion0"){
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        clear();
     } else if(opcionSeleccionada =="opcion1"){
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        clear();
    } else if (opcionSeleccionada =="opcion2"){
        xd.style.display = "block";
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        clear();
    }
    else if (opcionSeleccionada =="opcion3"){
        xd.style.display = "block";
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'none';
        clear();
    } else if (opcionSeleccionada =="opcion4"){
        xd.style.display = "block";
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
        div4.style.display = 'none';
        div5.style.display = 'none';
        clear();
    } else if (opcionSeleccionada =="opcion5"){
        xd.style.display = "block";
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'block';
        div5.style.display = 'none';
        clear();
    }else if (opcionSeleccionada =="opcion6"){
        xd.style.display = "block";
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        div5.style.display = 'block';
        clear();
    }

}


function mostrarResultado(){
    var opciones = document.getElementById("opcion");
    var opcionSeleccionada = opciones.value;    

    if(opcionSeleccionada=="opcion0"){
        var mensaje = "Debe seleccionar una opcion";
        alert(mensaje);
    } else if (opcionSeleccionada=="opcion2"){
        var x = document.getElementById("x").value;
        var y = document.getElementById("y").value;
        if((x == "" ) || (y == "")){
            var mensaje ="Debe llenar todos los campos";
            alert(mensaje);
        } else{
            var respuesta = 1/(x-5)-3*x*y/4;
            document.getElementById("resp").textContent = respuesta;
        }
        
    }else if (opcionSeleccionada=="opcion3"){

        var a = document.getElementById("a-1").value;
        var b = document.getElementById("b-1").value;
        var c = document.getElementById("c-1").value;
        var d = document.getElementById("d-1").value;
        var e = document.getElementById("e-1").value;
        var f = document.getElementById("f-1").value;
        var g = document.getElementById("g-1").value;
        var h = document.getElementById("h-1").value;
        var j = document.getElementById("j-1").value;

        if((a == "" ) || (b == "") || (c == "" ) || (d == "") || (e == "" ) || (f == "") || (g == "" ) || (h == "") || (j == "")){
            var mensaje ="Debe llenar todos los campos";
            alert(mensaje);
        } else{
            var respuesta = a*a/(b-c)+(d-e)/(f-g*h/j);
            document.getElementById("resp").textContent = respuesta;
        }
        
    }else if (opcionSeleccionada=="opcion4"){
        var m = document.getElementById("m").value;
        var n = document.getElementById("n").value;
        var p = document.getElementById("p").value;

        if((m == "" ) || (n == "") ||(p=="")){
            var mensaje ="Debe llenar todos los campos";
            alert(mensaje);
        } else{
            var respuesta = m/n*p;
            document.getElementById("resp").textContent = respuesta;
        }
        
    } else if (opcionSeleccionada=="opcion5"){
        var m = document.getElementById("m-1").value;
        var n = document.getElementById("n-1").value;
        var p = document.getElementById("p-1").value;
        var q = document.getElementById("q-1").value;
        var r = document.getElementById("r-1").value;
        var s = document.getElementById("s-1").value;

        if((m == "" ) || (n == "") ||(p=="") ||(q == "" ) || (r == "") ||(s=="")){
            var mensaje ="Debe llenar todos los campos";
            alert(mensaje);
        } else{
            var respuesta = (m+n/p)/(q-r/s);
            document.getElementById("resp").textContent = respuesta;
        }
        
    } else if (opcionSeleccionada=="opcion6"){

        var a = document.getElementById("a-2").value;
        var b = document.getElementById("b-2").value;
        var c = document.getElementById("c-2").value;
        var d = document.getElementById("d-2").value;
        var e = document.getElementById("e-2").value;
        var f = document.getElementById("f-2").value;
        var g = document.getElementById("g-2").value;
        var h = document.getElementById("h-2").value;

        if((a == "" ) || (b == "") || (c == "" ) || (d == "") || (e == "" ) || (f == "") || (g == "" ) || (h == "")){
            var mensaje ="Debe llenar todos los campos";
            alert(mensaje);
        } else{
            var respuesta = (3*a+b)/(c-(d+5*e)/(f+g/(2*h)));
            document.getElementById("resp").textContent = respuesta;
        }
        
    }
    
}


function clear(){
    document.getElementById("resp").textContent = "";
    document.getElementById("x").value ="";
    document.getElementById("y").value ="";
    document.getElementById("a-1").value ="";
    document.getElementById("b-1").value ="";
    document.getElementById("c-1").value ="";
    document.getElementById("d-1").value ="";
    document.getElementById("e-1").value ="";
    document.getElementById("f-1").value ="";
    document.getElementById("g-1").value="";
    document.getElementById("h-1").value="";
    document.getElementById("j-1").value="";
    document.getElementById("m").value ="";
    document.getElementById("n").value ="";
    document.getElementById("p").value ="";
    document.getElementById("m-1").value ="";
    document.getElementById("n-1").value ="";
    document.getElementById("p-1").value="";
    document.getElementById("q-1").value ="";
    document.getElementById("r-1").value ="";
    document.getElementById("s-1").value ="";
    document.getElementById("a-2").value ="";
    document.getElementById("b-2").value ="";
    document.getElementById("c-2").value ="";
    document.getElementById("d-2").value ="";
    document.getElementById("e-2").value ="";
    document.getElementById("f-2").value ="";
    document.getElementById("g-2").value="";
    document.getElementById("h-2").value="";
}