var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX =5
  fixedRect.velocityX =-5
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  //if(isTouching(movingRect,fixedRect)){
bounceOff(movingRect,fixedRect);
  
 //   movingRect.shapeColor = "red";
   // fixedRect.shapeColor = "red";
 // }
 // else {
   // movingRect.shapeColor = "green";
   // fixedRect.shapeColor = "green";
  //}
  drawSprites();
}

