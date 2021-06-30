class polygon  {
    constructor(x,y){
      polygon = Bodies.circle(50,200,20);
      World.add(world,polygon);
      
      this.image = loadImage("sprites/polygon.png");

      slingShot = new Slingshot(this.polygon,{ x: 100, y:200});
    }
  
    display() {
       ImageMOde(CENTER)
       this.image(polygon_img, polygon.position.x, polygon.position.y, 40 ,40)
    }
  }
  