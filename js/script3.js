document.getElementById('playerlvl3').addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 10;
var necesarios = 14;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*530);
   randNum2 =  Math.round(Math.random()*680);
   document.getElementById("playerlvl3").style.marginTop =randNum + "px";
   document.getElementById("playerlvl3").style.marginLeft =randNum2 + "px";
   if (puntos == 14) {
      alert("Ganaste! Gracias por jugar");
      nextlvl();		
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("HAZ PERDIDO");
		tiempo = 10;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);

function nextlvl(){
   document.location.href="startgame.html";
  }