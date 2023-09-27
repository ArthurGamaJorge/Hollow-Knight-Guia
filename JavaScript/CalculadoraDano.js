var FerraoVelhoDesligada = "./images/progressão_FerrãoVelho.jpeg";
var FerraoAfiadoDesligada = "./images/progressão_FerrãoAfiado.jpeg";
var FerraoCanalizadoDesligada = "./images/progressão_FerrãoCanalizado.jpeg";
var FerraoSerpenteadoDesligada = "./images/progressão_FerrãoSerpenteado.jpeg";
var FerraoPuroDesligada = "./images/progressão_FerrãoPuro.jpeg";
var ForçaInquebravelDesligada = "./images/Extra_ForçaInquebravel.jpeg";
var FuriaDosCaidosDesligada = "./images/Extra_FuriaDosCaidos.jpeg";

var FerraoVelhoLigada = "./images/Extra_FerrãoVelhoClicado.png";
var FerraoAfiadoLigada = "./images/Extra_FerrãoAfiadoClicado.png";
var FerraoCanalizadoLigada = "./images/Extra_FerrrãoCanalizado.png";
var FerraoSerpenteadoLigada = "./images/Extra_FerrãoSerpenteado.png";
var FerraoPuroLigada = "./images/Extra_FerrãoPuroClicado.png";
var ForçaInquebravelLigada = "./images/Extra_ForçaInquebravelClicado.png";
var FuriaDosCaidosLigada = "./images/Extra_FuriaDosCaidosClicado.png";

var FerraoVelho = document.getElementById('FerraoVelho');
var FerraoSerpenteado = document.getElementById('FerraoSerpenteado');
var FerraoAfiado = document.getElementById('FerraoAfiado');
var FerraoCanalizado = document.getElementById('FerraoCanalizado');
var FerraoPuro = document.getElementById('FerraoPuro');
var FuriaDosCaidos = document.getElementById('FuriaDosCaidos');
var ForçaInquebravel = document.getElementById('ForçaInquebravel');

var indexDefault = -1;
var indexFerraoVelho = 0
var indexFerraoAfiado = 1
var indexFerraoCanalizado = 2
var indexFerraoSerpenteado = 3
var indexFerraoPuro = 4
var indexLigado = indexDefault;
var forçaInquebravelclicada = false;
var furiaDosCaidosclicada = false;

var multiplicadorForçaInquebravel = 1.5;
var multiplicadorFuriaDosCaidos = 1.75;
FerraoVelho.addEventListener("click", function (){
  indexLigado = indexLigado == indexFerraoVelho? indexDefault : indexFerraoVelho
    DesligarFerrões();
    if(indexLigado == indexFerraoVelho){
      FerraoVelho.src = FerraoVelhoLigada;
      dano = 5
    }
  })
  FerraoAfiado.addEventListener("click", function (){
    indexLigado = indexLigado == indexFerraoAfiado? indexDefault : indexFerraoAfiado

    DesligarFerrões();
    if(indexLigado == indexFerraoAfiado){
      FerraoAfiado.src = FerraoAfiadoLigada;
      dano = 9
    }
  })

  FerraoCanalizado.addEventListener("click", function (){
    indexLigado = indexLigado == indexFerraoCanalizado? indexDefault : indexFerraoCanalizado

    DesligarFerrões();
    if(indexLigado == indexFerraoCanalizado){
      FerraoCanalizado.src = FerraoCanalizadoLigada;
      dano = 13
    }
  })

  FerraoSerpenteado.addEventListener("click", function (){
    indexLigado = indexLigado == indexFerraoSerpenteado? indexDefault : indexFerraoSerpenteado

    DesligarFerrões();
    if(indexLigado == indexFerraoSerpenteado){
      FerraoSerpenteado.src = FerraoSerpenteadoLigada;
      dano = 17
    }
  })

  FerraoPuro.addEventListener("click", function (){
    indexLigado = indexLigado == indexFerraoPuro? indexDefault : indexFerraoPuro

    DesligarFerrões();
    if(indexLigado == indexFerraoPuro){
      FerraoPuro.src = FerraoPuroLigada;
      dano = 21
    }
  })

  FuriaDosCaidos.addEventListener("click", function (){

    furiaDosCaidosclicada = !furiaDosCaidosclicada;
    FuriaDosCaidos.src = furiaDosCaidosclicada? FuriaDosCaidosLigada : FuriaDosCaidosDesligada;
})

ForçaInquebravel.addEventListener("click", function (){
  forçaInquebravelclicada = !forçaInquebravelclicada;
  ForçaInquebravel.src = forçaInquebravelclicada? ForçaInquebravelLigada:ForçaInquebravelDesligada;
})

function ExibirDano() {
 document.getElementById("Dano").innerHTML = "Dano: "+ CalcularDano()
}

function CalcularDano(){

  if(indexLigado == indexFerraoAfiado){
    return Math.round(Math.round(dano 
      * (forçaInquebravelclicada? multiplicadorForçaInquebravel : 1))
      * (furiaDosCaidosclicada? multiplicadorFuriaDosCaidos : 1)-0.1);
  }

  else {
  return Math.round(Math.round(dano 
  * (forçaInquebravelclicada? multiplicadorForçaInquebravel : 1))
  * (furiaDosCaidosclicada? multiplicadorFuriaDosCaidos : 1));
  }
  
}
function DesligarFerrões(){
  FerraoVelho.src = FerraoVelhoDesligada;
  FerraoSerpenteado.src = FerraoSerpenteadoDesligada;
  FerraoAfiado.src = FerraoAfiadoDesligada;
  FerraoCanalizado.src = FerraoCanalizadoDesligada;
  FerraoPuro.src = FerraoPuroDesligada;
  dano = 0;
}