const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1, box2, box3, box4;
var ball;


function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ground_options = { isStatic: true }

    ground = Bodies.rectangle(200, 390, 500, 20, ground_options);
    World.add(world, ground);
    box1 = new BOX(100, 300, 40, 40, "red");
    box2 = new BOX(130, 200, 50, 50, "yellow");
    box3 = new BOX(random(50, 350), random(50, 350), 50, 50, "blue");
    box4 = new BOX(random(50, 350), random(50, 350), 50, 50, "orange");

    ball = new BALL();
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ball.display();
}