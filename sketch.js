var fixedRect, movingRect;
var arbol, silla ,perro ,auto;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  arbol = createSprite(100,100 ,50,50);
  silla = createSprite(200,100 ,50,50);
  perro= createSprite(300,100 ,50,50);
  auto = createSprite(400,100 ,50,50);
  arbol.shapeColor = "orange";
    silla.shapeColor = "purple";
    perro.shapeColor = "gray";
    auto.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,arbol)){
    movingRect.shapeColor = "blue";
    arbol.shapeColor = "blue";
    
  }
  else{

  
  
    movingRect.shapeColor = "green";
    arbol.shapeColor = "green";
  }

  drawSprites();
}
function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
}
else {
  return false;
}
}