var baby_fox, fox_img;
var backgroundpic;
var food_1, food_2, foods;
var obstacle_1,obstacle_2, obstacles;
function preload(){
  fox_img = loadImage("assets/penquin.png")
  backgroundpic = loadImage("assets/background_img.jpg");
  food_1 = loadImage("assets/food.jpg");
  food_2 = loadImage("assets/food-2.jpg");
  obstacle_1 = loadImage("assets/obstacle-1.jpg");
  obstacle_2 = loadImage("assets/obstacle-2.jpg");
}

function setup(){
  createCanvas(1500,800)
  baby_fox = createSprite(900,300,90,90);
  baby_fox.addImage(fox_img)
  baby_fox.scale = 0.1
}




function draw(){
  background(backgroundpic);
  if(keyDown("up")){
    baby_fox.y = baby_fox.y-2
  }

  if(keyDown("down")){
    baby_fox.y = baby_fox.y+2
  }

  if(keyDown("right")){
    baby_fox.x = baby_fox.x+2
  }

    if(keyDown("left")){
    baby_fox.x = baby_fox.x-2
  }

  food(); 
  
  drawSprites();
}

  function food(){
    if(frameCount % 100 === 0){
      foods = createSprite(30,round(random(60,300)),40,40);
    foods.velocityX=5;
    var rand=Math.round(random(1,2));
    switch(rand){
      case 1: foods.addImage(food_1);
      break;
      case 2: foods.addImage(food_2);
      break;
      default:break
    }
    foods.scale=0.1
    }
  }