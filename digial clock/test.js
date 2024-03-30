var h=document.getElementById("h");
var m=document.getElementById("m");
var s=document.getElementById("s");

setInterval(() => {
    let ti= new Date();
    h.innerHTML=ti.getHours();
    m.innerHTML=ti.getMinutes();
    s.innerHTML=ti.getSeconds();
}, 1000);