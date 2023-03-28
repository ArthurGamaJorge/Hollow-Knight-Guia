var audio = document.getElementById("ost");
audio.volume = 0.05;
audio.loop = "true";


function playAudio() {
  var efeito = document.getElementById("Zote");
  efeito.play();
  efeito.volume = 0.8;
}