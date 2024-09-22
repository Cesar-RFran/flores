// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "El la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabía", time: 43 },
  { text: "Que algún día pasaría", time: 44 },
  { text: "Que vendría a buscarla", time: 46 },
  { text: "Con sus flores amarillas ", time: 48 },
  { text: "No te apures, no detengas", time: 56 },
  { text: "El instante del encuentro", time: 57 },
  { text: "Está dicho que es un hecho", time: 59 },
  { text: "No la pierdas, no hay derecho", time: 62 },
  { text: "No te olvides que la vida", time: 63.5 },
  { text: "Casi nunca está dormida", time: 68 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 100 },
  { text: "Él se acercó de repente la miro tan de frente", time: 108 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 121 },
  { text: "Que algún día pasaría", time: 122 },
  { text: "Que vendría a buscarla", time: 124 },
  { text: "Con sus flores amarillas ", time: 126 },
  { text: "No te apures, no detengas", time: 132 },
  { text: "El instante del encuentro", time: 133 },
  { text: "Está dicho que es un hecho", time: 135 },
  { text: "No la pierdas, no hay derecho", time: 137 },
  { text: "No te olvides que la vida", time: 140 },
  { text: "Casi nunca está dormida", time: 145 },
 
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);