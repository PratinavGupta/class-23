class BALL {
    constructor() {
        var prop = { restitution: 1 }
        this.bod = Bodies.circle(200, 200, 10, prop);
        World.add(world, this.bod);
    }

    display() {
        ellipse(this.bod.position.x, this.bod.position.y, 40);
    }

}