class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.0075,
      length : 300
    }
    this.rope = Constraint.create(options);
    this.pointB = pointB;
    World.add(world, this.rope);
  }
  attach(body) {
    this.rope.bodyA = body;
  }
  fly() {
    this.rope.bodyA = null;
  }
  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      stroke(48, 22, 8);
      strokeWeight(0);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }
}
