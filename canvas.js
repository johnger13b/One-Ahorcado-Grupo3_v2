function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650, 500);
    tablero.lineTo(900, 500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }

    tablero.stroke();
    tablero.closePath();
}
function escribirLetraCorrecta(index) {
    tablero.font = 'bold 52px Inter';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle= "#0A3871"
    let anchura=600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index],505+(anchura*index),620)//texto, x, y, ancho
    tablero.stroke()
  }
  
  function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.lineWidth=6
    tablero.font = 'bold 40px Inter';
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#0A3871"
    tablero.fillText(letra,505+(40*(10-errorsLeft)), 720,40)//texto, x, y, ancho
  }

function dibujarAhorcado(errores){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    switch (errores) {
        case 9:
            tablero.beginPath();
            tablero.moveTo(650, 500);
            tablero.lineTo(650, 100);
            tablero.stroke();
            tablero.closePath();
            break;
        case 8:
            tablero.beginPath();
            tablero.moveTo(650, 100);
            tablero.lineTo(800, 100);
            tablero.stroke();
            tablero.closePath();
            break;
        case 7:
            tablero.beginPath();
            tablero.moveTo(800, 100);
            tablero.lineTo(800, 150);
            tablero.stroke();
            tablero.closePath();
            break;
        case 6:
            tablero.beginPath();
            tablero.arc(800, 200, 50, 0, Math.PI * 2, true);
            tablero.stroke();
            tablero.closePath();
            break;
        case 5:
            tablero.beginPath();
            tablero.moveTo(800, 250);
            tablero.lineTo(800, 400);
            tablero.stroke();
            tablero.closePath();
            break;
        case 4:
            tablero.beginPath();
            tablero.moveTo(800, 300);
            tablero.lineTo(750, 350);
            tablero.stroke();
            tablero.closePath();
            break;
        case 3:
            tablero.beginPath();
            tablero.moveTo(800, 300);
            tablero.lineTo(850, 350);
            tablero.stroke();
            tablero.closePath();
            break;
        case 2:
            tablero.beginPath();
            tablero.moveTo(800, 400);
            tablero.lineTo(750, 450);
            tablero.stroke();
            tablero.closePath();
            break;
        case 1:
            tablero.beginPath();
            tablero.moveTo(800, 400);
            tablero.lineTo(850, 450);
            tablero.stroke();
            tablero.closePath();
            break;
        default:
            break;
    }
}