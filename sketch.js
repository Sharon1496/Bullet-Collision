
var wall, thickness;
var bullet,speed, weight,bulletImage;

function preload()
{
	bulletImage = loadImage("the-bullet-png-22.png");
}

function setup() {
  createCanvas(1600, 400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(40,70);

    bullet=createSprite(50,200,60,10);  
	bullet.velocityX = speed;
	//bullet.shapeColor="white";
	bullet.addImage("bullet",bulletImage);
	bullet.scale = 0.3;
	bullet.setCollider("circle",0,0,30);
	
    wall=createSprite(1200, 200, 30, height/2);  
    wall.shapeColor=color(230,230,230);
  
}


function draw() {
  background(0);  

  if(Collision(bullet, wall))
  {
  	bullet.velocityX=0;
  	var damage = (0.5 * weight * speed* speed) / (thickness * thickness * thickness);

	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
		
	}

	else if(damage<10)
	{
		wall.shapeColor=color(0,255,0);
	}
	
  }
  drawSprites();
}


function Collision(bullet_obj, wall_obj)
{
	if (bullet_obj.collide(wall_obj))
	{
		return true
	}
	return false;
}


