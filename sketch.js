//Sorry this is for project 21, and not 42, I didnt know how to copy and create a new folder for this project
 //()()
//[____] 
var bullet,speed, weight;
var wall,thickness;
var speed;
var time;
var x1;
function setup() {
  createCanvas(1600,400);
  background("black");
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  
   
}
 

function draw() {
  background(255,255,255);  
  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = "gold";
  wall = createSprite(1500,200,thickness,height/2);
  //wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;
    // deformation = 0.5 * weight * speed * speed/22509;
    time = (wall.x - bullet.x)/speed;
  bullet.x=time*speed;
   
  if (hasCollied(bullet,wall)){
      bullet.velocityX = speed;

      var damage = speed * speed/(thickness*thickness*thickness);

      if (damage>10){
         wall.shapeColor = color(255,0,0);
         alert("Guess what the bullet was effective, which means it could really hurt someone, if you follow this simulations advice, get rid of it, it is to dangerous");
      }
      if (damage<10){
         wall.shapeColor = color(0,255,0);;
         alert("Guess what the bullet was ineffective, which means it is not powerful enough, take my advice, that bullet should live it days in the trash can.");
      }
      //console.log(damage);
    }
     
  //console.log(deformation);
  drawSprites();
   
}  
function hasCollied(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if (bulletRightEdge>=wallLeftEdge){
     return true;
  }
  return false
}