var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("glibersat_Nioubiteul.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.2;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
if (keyDown(RIGHT_ARROW)){
    boy.x=boy.x+5

}
if (keyDown(Left_ARROW)){
  boy.x=boy.x-5

} 
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }*/
  if(path.y > 400 ){
   
    path.y = height/2;
    }
  /*if(path.y > 400 ){
   
  path.y = height/2;
  }*/
  
  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/
  
  drawSprites();
}
