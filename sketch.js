//aliases or nameSpace
const MEngine = Matter.Engine;
const MBodies = Matter.Bodies;
const MWorld = Matter.World;

var myEngine,myWorld;
var rect1;
var ground;
function setup(){
  var canvas=createCanvas(400,400);
  //create an engine
  myEngine = MEngine.create();
  //get the world from the engine
  myWorld = myEngine.world;
  //creating physics properties
  var rectProp = {
    isStatic: false,
    restitution: 0.8
  };
  var groundprop = {
 isStatic : true

  };
  //create a rectangle
 rect1 = MBodies.rectangle(200,200,40,50,rectProp);
 ground = MBodies.rectangle(200,280,400,20,groundprop);
 //add rectangle to world
 MWorld.add(myWorld,rect1);
//add ground to world
MWorld.add(myWorld,ground);
 console.log(rect1);
}
function draw()
{
  background(0);
  MEngine.update(myEngine);
    rectMode(CENTER);
    rect(rect1.position.x,rect1.position.y,40,50);
    rect(ground.position.x,ground.position.y,400,20)
  
}
