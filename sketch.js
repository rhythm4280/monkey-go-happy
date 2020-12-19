
var monkey , monkey_running,bananaGroup;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey=createSprite(200,200);
monkey.addAnimation("moving",monkey_running)
 monkey.scale=0.1;
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  bananaGroup=createGroup();
 
}


function draw() {
background("white");
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")){
     monkey.velocityY=-12;
     }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground); 
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivaltime:"+survivalTime,100,50);
  
  obstacles();
  food();
  
  drawSprites();
  
}
function food(){
  if(frameCount%80===0){
    banana=createSprite(600,200,10,10);
    banana.y=Math.round(random(120,200))
  banana.addImage(bananaImage);
  banana.scale=0.1; 
    banana.velocityX=-10;
    
    banana.lifetime=200;
    bananaGroup.add(banana);
  }
  
}

function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(600,310,200,20);
     obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
  }
}


