const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var canvas;
var player, playerBase;
var bird , birdImg ;
var bGroup;



function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  birdImg = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };


  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player);

  playerArcher = new PlayerArcher(340 , playerBase.position.y - 112 , 120 , 120);


  bGroup = new Group();
}



function draw() {
  background(backgroundImg);


  Engine.update(engine);
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150);
  image(playerimage,player.position.x,player.position.y,50,180);

  playerArcher.display(width - 500 , height - 250);

  cBird();

  drawSprites()
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}


function cBird(){
  if(frameCount % 150 === 0){
    bird = createSprite(width-1800 , Math.round(random(height - 750 , height - 50)));
    bird.addAnimation("cBird",birdImg);
    bird.velocityX = 4;
    bird.scale = 0.3;

    bird.lifetime = 800;

    bGroup.add(bird);
  }
}