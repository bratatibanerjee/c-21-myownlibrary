var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
 // fixedRect.velocityY = +5;

gameobject1=createSprite(600,400,50,80);
gameobject1.shapeColor = "green"
gameobject1.debug = true;

gameobject2=createSprite(300,100,50,80);
gameobject2.shapeColor = "yellow"
gameobject2.debug = true;

gameobject3=createSprite(300,500,50,80);
gameobject3.shapeColor = "yellow"
gameobject3.debug = true;

gameobject2.velocityY=2;
gameobject3.velocityY=-2;





}

function draw() {
  background(0,0,0);  

 bounceoff(gameobject2,gameobject3);
  drawSprites();
}


