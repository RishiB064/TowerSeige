const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

function setup() 
{
  createCanvas(800,400);
  
  platform = new Ground(200,300,50,600);

  engine = Engine.create();
  world = engine.world;

}

function draw() 
{
  background("black");

  Engine.update(engine);

    platform.display();
  drawSprites();
}