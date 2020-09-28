class Bob {

    constructor(x, y, radius, options) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.1
    
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius=radius;
       
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
       
        strokeWeight(1);
        stroke('black')
        fill('green');
        circle(pos.x, pos.y, this.radius);
       
      }
    }




