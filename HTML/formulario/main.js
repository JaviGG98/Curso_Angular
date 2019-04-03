var p1 = document.getElementById("pass1").value;
var p2 = document.getElementById("pass2").value;

if (p1.length == 0 || p2.length == 0) 
{
    alert("Los campos de la contraseña no pueden quedar vacios");
    return false;
}
function iguales() {
   if (p1 != p2) 
    {
        alert("Las passwords deben de coincidir");
        return false;
    } 
 
}
