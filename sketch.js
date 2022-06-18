var towerImg, tower;
var doorImg, door, doorsGroup;
var vase, vaseImg;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var vaseGroup
var deathSound

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  vaseImg = loadImage("vase.png")
  deathSound = loadSound("deathsound.mp3")

}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  player = createSprite(300,400);
  player.addImage("ghost",ghostImg)
  player.scale=0.40

  vaseGroup = new Group();
}

function draw() {
  background(200);
  
  if (gameState==="play"){
    bigmamavase();

    if(tower.y > 400){
        tower.y = 300
      }
      drawSprites();
  
      if(keyDown("w")){
        player.y=player.y - 5
      }
      if(keyDown("d")){
        player.x=player.x + 5
      }
  
      if(keyDown("a")){
        player.x=player.x - 5
      }
      if(keyDown("s")){
        player.y=player.y + 5
      }
      
      //player.velocityY=player.velocityY + 0.5

      if(vaseGroup.isTouching(player)){
        player.destroy();
        vaseGroup.destroyEach();
        gameState="end"
        deathSound.play()
      }
  }
if (gameState==="end"){
  stroke("white")
  fill("white")
  textSize(40)
  text("gameover",150,300)
}
 

}


function bigmamavase() {
if(frameCount%40===0){
  vase = createSprite(random(100,500),0)
  vase.velocityY = 5
  vase.addImage("vase", vaseImg)
  vase.scale=0.15
  vase.depth= player.depth
  player.depth=player.depth + 1
  vaseGroup.add(vase)
}
}

