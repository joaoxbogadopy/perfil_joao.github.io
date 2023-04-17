//Reloj

function clock(){

    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var ampm = document.getElementById('ampm');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var am = "AM";

    if(h > 12){
        h = h - 12;
       var am = "PM"
    }
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s


    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am

}
//Fin de df ("Reloj")

var interval = setInterval(clock, 1000);



// Fecha

function date (){



    var dia = document.getElementById('dia');
    var mes = document.getElementById('mes');
    var ano = document.getElementById('ano');
    
    var d = new Date().getDate();
    var m = new Date().getMonth();
    var a = new Date().getFullYear();
    
        
    dia.innerHTML = d;
    mes.innerHTML = m;
    ano.innerHTML = a; 
    

}
var fecha_ = setTimeout(date);
//Fin def ("Fecha == date")

