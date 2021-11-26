/*
stands: são as prateleiras
blocks: são os blocos que temos que derrubar no jogo
Objetivo: complete o jogo de lançar uma pedra para derrubar os objetos
*/

//crie uma classe de Estilingue (não precisa das imagens, só o mecanismo de arrastar e lançar), como vimos na aula 28

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Bodie = Matter.body;

var engine, world;
var ground;
var stand1,stand2;
var polygon_img;
var polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //crie outra prateleira com blocos aqui
  stand2 = new Stand(700,200,200,10);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //segundo andar
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //topo
  blocks9 = new Block(700,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);                              
  /*crie um corpo Matter para ser a pedra.
  não esqueça de adicioná-lo ao mundo*/
  estilingue = new Estilingue(polygon,{x:100,y:200});
 
  //crie um objeto da classe estilingue, use-o para ligar o corpo da pedra e um pontoB

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  text("Arraste o polígono para destruir os blocos",300,30);
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 
  //faça o display da sua segunda prateleira com blocos
  fill(188,67,67);
  stand2.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  estilingue.display();
  fill("gold");
  imageMode(CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  
  //use o image() para adicionar a imagem polygon_img (já carregada) ao seu corpo de pedra
  //lembre-se de ajustar o imageMode() para center

  //faça o display do estilingue


}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

//adicione o evento de mouseReleased() para lançar a pedra nas pirâmides de blocos, usando o método voar()
//lembre-se de criar o método voar() na sua classe (definindo bodyA como null)
function mouseReleased(){
  estilingue.fly();
}


//adicione opções aos blocos, teste e se certifique de que os blocos caem quando são atingidos