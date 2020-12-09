
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5, roof,rope1,rope2,rope3,rope4,rope5;
var bobDiameter;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(320,300,20);
bob2 = new Bob(360,300,20);
bob3 = new Bob(400,300,20);
bob4 = new Bob(440,300,20);
bob5 = new Bob(480,300,20);

roof = new Roof(400,100,500,30);
rope1 = new Rope(bob1.body,roof.body,10,-80)
rope2 = new Rope(bob2.body,roof.body,10,-40)
rope3 = new Rope(bob3.body,roof.body,10,0)
rope4 = new Rope(bob4.body,roof.body,10,40)
rope5 = new Rope(bob5.body,roof.body,10,80)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    console.log("hello");
   Matter.Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-100})
  }
}


