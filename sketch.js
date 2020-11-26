const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,ground,rope1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,ball;


function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,585,1200,20);
    //creating boxes
    box1 = new BoxClass(1000,100,140,70);
    box2 = new BoxClass(1000,160,140,70);
    box3 = new BoxClass(1000,220,140,70);
    box4 = new BoxClass(1000,290,140,70);
    box5 = new BoxClass(1000,360,140,70);
    box6 = new BoxClass(1000,420,140,70);
    box7 = new BoxClass(1000,470,140,70);
    box8 = new BoxClass(1000,540,140,70);
    box9 = new BoxClass(800,100,140,70);
    box10 = new BoxClass(800,160,140,70);
    box11 = new BoxClass(800,220,140,70);
    box12 = new BoxClass(800,290,140,70);
    box13 = new BoxClass(800,360,140,70);
    box14 = new BoxClass(800,420,140,70);
    box15 = new BoxClass(800,470,140,70);
    box16 = new BoxClass(800,540,140,70);
    box17 = new BoxClass(800,100,140,70);
    box18 = new BoxClass(700,100,140,70);
    box19 = new BoxClass(700,100,140,70);
    box20 = new BoxClass(700,100,140,70);
    ball = new BALL(200,200,80,80);
    rope1 = new Rope(ball.body,{x:500,y:50});
   
}

function draw(){
   background(180);
    Engine.update(engine);
   ground.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   ball.display();
   rope1.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}
function mouseReleased(){
    rope1.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(ball.body,{x:200,y:200});
        rope1.attach(ball.body);
    }
}

