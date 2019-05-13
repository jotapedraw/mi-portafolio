

document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 15;
var necesarios = 15;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 15) {
      alert("HAZ AVANZADO AL NIVEL 2");
      nextlvl();
   
		
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("HAZ PERDIDO");
		tiempo = 15;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);

function nextlvl(){
   document.location.href="lvl2.html";
  }