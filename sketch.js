//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

var engine, world;
var chao;

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  var chao_options = {
    isStatic: true,

  }

  chao = Bodies.rectangle(200,589,400,20,chao_options);
  World.add(world,chao);


}

function draw() {
  background("black");  

  stroke("lightgreen");
  strokeWeight(2);
  noFill();
  rectMode(CENTER);
  rect(chao.position.x,chao.position.y,400,20);

  Engine.update(engine);


}
