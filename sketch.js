const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 var paperball,box1,box2, box3,ground,bottom;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	bottom = createSprite(515,659,260,20);
	//Create the Bodies Here.
	


	paperball = new Paper();
	box1 = new Dustbin(390,600,20,150);
	box2 = new Dustbin(515,659,260,20);
	box3 = new Dustbin(650,600,20,150);
	ground = new Ground();
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  box1.display();
  box3.display();
  bottom.display();
  ground.display(); 
  drawSprites();
  bottom.shapeColor = "225,225,225";
  //paperball.collide(bottom);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:78.25,y:-78.25});
  
	
	  }
}



