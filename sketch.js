var space, spaceImg;
var ship, shipImg, shipImg2, shipAnimation
var lazer, lazerImg
var alienShip, alienShipImg, alienShipImg2, alienShipGroup 

function preload() {
spaceImg = loadImage("space2.jpg")
shipAnimation = loadAnimation("ship1.png","ship2.png")
lazerImg = loadImage("lazer.png")
alienShipImg = loadImage("alien ship.png")
alienShipImg2 = loadImage("upgraded alien ship.png")
}
function setup() {
  bricks = new Group()
  canvas = createCanvas(500, 630);
  space = createSprite(250, 400, 500, 800)
  space.addImage(spaceImg)
  ship = createSprite(250,400,20, 30)
  ship.addAnimation("ship animation",shipAnimation)
  ship.scale = 0.1
alienShipGroup = new Group()
lazerGroup = new Group()
}

function draw() 
{
   background("white");
   if(alienShipGroup.collide(ship)){
    alienShip.destroy()
   }
if(space.y>1000){
  space.y=250
}
   space.velocityY=2
  if (keyDown(RIGHT_ARROW)) 
  {
  ship.x+=8
  }

    if (keyDown(LEFT_ARROW)) 
  {
    ship.x-=8   
  }
if (keyDown(UP_ARROW)){
  createLazer();
}
//createAlien()
//if(alienShipGroup.isTouching(lazer)){
  //alienShipGroup.destroyEach()
 // alienShip.destroy()
//}
if(World.frameCount%80 === 0){createBrickRow(65)}
 drawSprites()
}
function createLazer(){
  if(World.frameCount%10 === 0){
    lazer = createSprite(250,300,6,6);
    lazer.velocityY = -7;
    lazer.x = ship.x;
    lazer.addImage(lazerImg);
    lazer.scale = 0.1;
    lazer.tt = 50
    lazer.rotation = - 90
    lazerGroup.add(lazer)
  }
}
function createAlien(){
  if(World.frameCount%80 === 0){
alienShip = createSprite(25, 190, 50, 50)
alienShip.x = Math.round(random(30,470))
alienShip.addImage("image1", alienShipImg)
alienShip.addImage("image2", alienShipImg2)
alienShip.changeImage("image1")
alienShip.velocityY = 2
alienShip.scale=0.1
alienShipGroup.add(alienShip)
  }
}
function createBrickRow(y) {
  for(var c=0; c<7; c++)
  {
    var brick = createSprite(80+54*c,y,50, 25);
brick.addImage(alienShipImg);
brick.scale = 0.1
bricks.add(brick);
brick.velocity.y = 2
brick.y = 0
  }
}


