class BOX {

    constructor(x, y, w, h,c) {
        var prop = { restitution: 1, friction: 0.2 }
        this.body = Bodies.rectangle(x, y, w, h);
        World.add(world,this.body);
        this.wi = w
        this.he = h
        this.co=c
    }

    display() {
        
        var ang = this.body.angle;
       
        push()
        fill(this.co) 
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS)
        rotate(ang)
        rectMode(CENTER)
        rect(0, 0, this.wi, this.he);

        pop()
    }

}