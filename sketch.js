var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImage,leavesImage;

function preload(){
  //pre carga las imagenes
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  leavesImage = loadImage("orangeLeaf.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //el conejo se mueve a la posicion en X del mouse
  rabbit.x = mouseX;
  
  createApple();
  createLeaves();
  
  drawSprites();
}


//funcion para crear manzanas
function createApple(){
  
  if (frameCount % 80 === 0){
    
    //crea el sprite de la manzana
    apple = createSprite(random(1,400),10,30,30);
    apple.addImage(appleImage);
    
    //cambia el tamaño de la manzana
    apple.scale = 0.05;
    //da velocidad a la manzana
    apple.velocityY = 3;
    
  }
}

//funcion para crear hojas
function createLeaves(){
  
  if (frameCount % 140 === 0){
    
    //crea el sprite de la hojas
    leaves = createSprite(random(1,400),10,30,30);
    leaves.addImage(leavesImage);
    
    //cambia el tamaño de las hojas
    leaves.scale = 0.05;
    //da velocidad a las hojas
    leaves.velocityY = 3;
    
  }
}
