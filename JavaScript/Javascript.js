var audio = document.getElementById("ost");
audio.volume = 0.05;
audio.loop = "true";


function playAudio() {
  var efeito = document.getElementById("Zote");
  efeito.play();
  efeito.volume = 0.8;
}

FerraoVelhoDesligada = "./images/progressão_FerrãoVelho.jpeg";
FerraoAfiadoDesligada = "./images/progressão_FerrãoAfiado.jpeg";
FerraoCanalizadoDesligada = "./images/progressão_FerrãoCanalizado.jpeg";
FerraoSerpenteadoDesligada = "./images/progressão_FerrãoSerpenteado.jpeg";
FerraoPuroDesligada = "./images/progressão_FerrãoPuro.jpeg";
ForçaInquebravelDesligada = "./images/Extra_ForçaInquebravel.jpeg";
FuriaDosCaidosDesligada = "./images/Extra_FuriaDosCaidos.jpeg";
dano = 0
  
  document.getElementById('FerraoVelho').addEventListener("click", function (){
    imagemV = document.getElementById('FerraoVelho').src;
    var FerraoVelhoLigada = "https://i.imgur.com/5AsLyEz.png";
    
    if(imagemV === FerraoVelhoLigada){
      document.getElementById('FerraoVelho').src = FerraoVelhoDesligada;
      dano = 0
    } else {
      document.getElementById('FerraoVelho').src = FerraoVelhoLigada;

      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoDesligada;
      document.getElementById('FerraoAfiado').src = FerraoAfiadoDesligada;
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoDesligada;
      document.getElementById('FerraoPuro').src = FerraoPuroDesligada;
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;
      dano = 5
    }
  })

  document.getElementById('FerraoAfiado').addEventListener("click", function (){
    imagemA = document.getElementById('FerraoAfiado').src;
    var FerraoAfiadoLigada = "https://i.imgur.com/m0nURyx.png";
    
    if(imagemA === FerraoAfiadoLigada){
      document.getElementById('FerraoAfiado').src = FerraoAfiadoDesligada;
      dano = 0
    } else {
      document.getElementById('FerraoAfiado').src = FerraoAfiadoLigada;

      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoDesligada;
      document.getElementById('FerraoVelho').src = FerraoVelhoDesligada;
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoDesligada;
      document.getElementById('FerraoPuro').src = FerraoPuroDesligada;
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;
      dano = 9
    }
  })

  document.getElementById('FerraoCanalizado').addEventListener("click", function (){
    imagemC = document.getElementById('FerraoCanalizado').src;
    var FerraoCanalizadoLigada = "https://i.imgur.com/5C01TLq.png";
    
    if(imagemC === FerraoCanalizadoLigada){
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoDesligada;
      dano = 0
    } else {
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoLigada;

      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoDesligada;
      document.getElementById('FerraoAfiado').src = FerraoAfiadoDesligada;
      document.getElementById('FerraoVelho').src = FerraoVelhoDesligada;
      document.getElementById('FerraoPuro').src = FerraoPuroDesligada;
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;
      dano = 13
    }
  })

  document.getElementById('FerraoSerpenteado').addEventListener("click", function (){
    imagemS = document.getElementById('FerraoSerpenteado').src;
    var FerraoSerpenteadoLigada = "https://i.imgur.com/popG0I2.png";
    
    if(imagemS === FerraoSerpenteadoLigada){
      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoDesligada;
      dano = 0
    } else {
      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoLigada;

      document.getElementById('FerraoPuro').src = FerraoPuroDesligada;
      document.getElementById('FerraoAfiado').src = FerraoAfiadoDesligada;
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoDesligada;
      document.getElementById('FerraoVelho').src = FerraoVelhoDesligada;
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;;;
      dano = 17
    }
  })

  document.getElementById('FerraoPuro').addEventListener("click", function (){
    imagemP = document.getElementById('FerraoPuro').src;
    var FerraoPuroLigada = "https://i.imgur.com/8iUIsjB.png";
    
    if(imagemP === FerraoPuroLigada){
      document.getElementById('FerraoPuro').src = FerraoPuroDesligada;
      dano = 0
    } else {
      document.getElementById('FerraoPuro').src = FerraoPuroLigada;

      document.getElementById('FerraoSerpenteado').src = FerraoSerpenteadoDesligada;
      document.getElementById('FerraoAfiado').src = FerraoAfiadoDesligada;
      document.getElementById('FerraoCanalizado').src = FerraoCanalizadoDesligada;
      document.getElementById('FerraoVelho').src = FerraoVelhoDesligada;
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;
      dano = 21
    }
  })

  document.getElementById('FuriaDosCaidos').addEventListener("click", function (){
    imagemFC = document.getElementById('FuriaDosCaidos').src;
    var FuriaDosCaidosLigada = "https://i.imgur.com/WV7BvS6.png";
    
    if(imagemFC === FuriaDosCaidosLigada){
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosDesligada;
      dano = Math.round(dano/1.75)
    } else {
      document.getElementById('FuriaDosCaidos').src = FuriaDosCaidosLigada;
      dano = Math.round(dano*1.75)
    }
})

document.getElementById('ForçaInquebravel').addEventListener("click", function (){
  imagemFI = document.getElementById('ForçaInquebravel').src;
  var ForçaInquebravelLigada = "https://i.imgur.com/44JYcCf.png";
  
  if(imagemFI === ForçaInquebravelLigada){
    document.getElementById('ForçaInquebravel').src = ForçaInquebravelDesligada;
    dano = Math.round(dano/1.5)
  } else {
    document.getElementById('ForçaInquebravel').src = ForçaInquebravelLigada;
    dano = Math.round(dano*1.5)
  }
})

function ExibirDano() {
 document.getElementById("Dano").innerHTML = "Dano: "+dano
}
