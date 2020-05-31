const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies

var player1;
var player2;
var enemy1;
var ground;

function preload(){
  image =loadImage("Battleground2/Bright/Battleground2.png");
  bg =loadImage("Battleground2/Bright/bg.png");
 candeliar =loadImage("Battleground2/Bright/candeliar.png");
  columns = loadImage("Battleground2/Bright/columns&falgs.png");
   dragon= loadImage("Battleground2/Bright/dragon.png");
  floor= loadImage("Battleground2/Bright/floor.png");
  mountains=loadImage("Battleground2/Bright/mountaims.png");
  wall=loadImage("Battleground2/Bright/wall@windows.png");

}
function setup(){
  background(bg);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(200,390,400,30);
  player1= new Player(200,50);
  }
function draw(){

  Engine.update(engine);

  player1.display();
  ground.display();
  if (keyWentDown(RIGHT_ARROW)){
    player1.body.velocity.x=20;
    player1.body.velocity.y=0;
 }
drawSprites();
}


