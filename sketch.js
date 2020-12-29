
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
 var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  
  ground = createSprite(360,400,1200,10);
  
  monkey = createSprite(50,360,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
}


function draw() {
  
  createCanvas(600,600);
  background("white");
  
   ground.velocityX = -5;
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }

  
  if(keyDown("space")){
    monkey.velocityY = -5
  }
  monkey.velocityY = monkey.velocityY + 0.8;  
  monkey.collide(ground);
  
  bananaGroup = new Group;
  
 
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survivalTime:"+ survivalTime,100,50);
  
  spawnObstacles();
  food();
  drawSprites();
}

function food(){
  if (World.frameCount % 100 == 0) {
    banana = createSprite(300,300,20,20);
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 100;   
    banana.addImage(bananaImage);
    bananaGroup.add(banana);
  }
}
  
function spawnObstacles() {
  if(frameCount % 300 === 0){
    var obstacle = createSprite(350,380,40,10);
    obstacle.velocityX = -6;
    obstacle.lifetime = 150;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    
  }
}








