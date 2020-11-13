
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;

  banana= createSprite(200,200,10,10);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1
  banana.velocityX = -4;


  BananaGroup = new Group();
  
}


function draw() {
  background("white");
  
  

  if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }

  drawSprites();
  
  Banana();
  Obstacles();
  survivalTime();
}

function Banana(){
  if (frameCount % 80 === 0){
  var banana = createSprite(400,165,10,40);
  banana.y = Math.round(random(120,200));
  banana.velocityX = -4;
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1
  banana.lifetime = 100; 
  }
}

function Obstacles(){
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,330,10,40);
 obstacle.addImage("obstacles1", obstacleImage);
 obstacle. velocityX = -6;
 obstacle.scale = 0.1;
 obstacle.lifetime = 100; 
    
  }
}

function survivalTime(){
  var survivalTime = 0;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score" + score, 500, 50);
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime= Math.ceil(frameCount/frameRate())
  text ("Survival Time " + survivalTime,100, 50);
  
  
}



