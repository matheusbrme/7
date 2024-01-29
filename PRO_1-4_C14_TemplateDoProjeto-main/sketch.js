var bow , arrow,  scene,bloon,aa,bb,cc,dd;
var bowImage, arrowImage, a,b,c,d, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  a= loadImage("red_balloon0.png");
  b = loadImage("green_balloon0.png");
  c = loadImage("pink_balloon0.png");
  d = loadImage("blue_balloon0.png");

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4))
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1: //chamar o balão vermelho
    r();
    case 2: // chamar o balão azul
    azul();
    break;
    case 3: // chamar o balão verde
    g();
    break;
    case 4: // chamar o balão rosa
    p();
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}

function r() {
  var aa = createSprite(0,Math.round(random(20, 370)), 10, 10);
  aa.addImage(a);
  aa.velocityX = 3;
  aa.lifetime = 150;
  aa.scale = 0.1;
}

function azul() {
  var bb = createSprite(0,Math.round(random(20, 370)), 10, 10);
 bb.addImage(b);
 bb.velocityX = 3;
 bb.lifetime = 150;
  bb.scale = 0.1;
  //crieSprite para o balão
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}

function g() {
  var cc = createSprite(0,Math.round(random(20, 370)), 10, 10);
  cc  .addImage(c);
  cc  .velocityX = 3;
  cc  .lifetime = 150;
  cc  .scale = 1.2
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}

function p() {
  var dd = createSprite(0,Math.round(random(20, 370)), 10, 10);
 dd  .addImage(d);
 dd .velocityX = 3;
  dd .lifetime = 150;
  dd  .scale = 0.1
 //crieSprite para o balão
  //adicioneImagem para o balão
  // adicione velocidade para fazer o balão se mover
  // mudar a dimensão do balão
  // atriubua tempo de vida ao balão
}
