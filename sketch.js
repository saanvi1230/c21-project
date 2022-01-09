const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;



var ball;
var leftSide;
var rightSide;
var radius=40;




function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);


 	var balls_option = {
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2,

}

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2, balls_option)
    World.add(world,ball);


	
	Engine.run(engine);
	rectMode(CENTER);
  ellipseMode(RADIUS);
  
}


function draw() {
  
  background(0);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();
ellipseMode(RADIUS);
ellipse (ball.position.x,ball.position.y,20);
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

	}
}
