document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 9;
var necesarios = 12;
function sumarPuntos(){
   puntos++;
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   randNum =  Math.round(Math.random()*550);
   randNum2 =  Math.round(Math.random()*550);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 12) {
      alert("Ganaste! Gracias por jugar");
      nextlvl();		
   }
}


function restarTiempo() {
	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("HAZ PERDIDO");
		tiempo = 9;
		puntos = 0;
	}
}

setInterval(restarTiempo,1000);

function nextlvl(){
   document.location.href="index.html";
  }