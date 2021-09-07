const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var background ;

function preload(){
  bgImg= loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
  createSprite(400, 200, 50, 50);

if (frameCount% 50 ===0){
  for (var i=0;i<200;i++){
    Snow.push(new createSnow(random(0,800),random(0,800)));
  }
}


}

function draw() {
  background(bgImg);  
  drawSprites();
}