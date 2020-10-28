const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var l1,l2,l3;
var engine, world;
var helicopterIMG, helicopterSprite,package;
var packageBody,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
    world = engine.world;	

	packageS=createSprite(width/2, 200, 10,10);
	packageS.addImage(packageIMG);
	packageS.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	l1=createSprite(370,650,200,20,{isStatic:true} );
	l1.shapeColor=color("red")
	World.add(world, l1);

	l2=createSprite(480,610,20,100);
	l2.shapeColor=color("red")

	l3=createSprite(260,610,20,100);
	l3.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {

 background(0);
packageS.x=packageBody.position.x
packageS.y=packageBody.position.y;
 drawSprites();

}

function keyPressed(){
	if(keyCode===DOWN_ARROW){
		   Matter.Body.setStatic(packageBody,false)
		  
}
}