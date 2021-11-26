class Estilingue{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.Estilingue = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(world,this.Estilingue);
    }
    fly(){
        this.Estilingue.bodyA = null;
    }
    display(){
        if(this.Estilingue.bodyA){
            var pointA = this.Estilingue.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
