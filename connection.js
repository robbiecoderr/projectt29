class Connection 
{
    constructor(a,b){
var options={
        bodyA:a,
        pointB:b,
        length:10,
        stiffness:0.04

}
this.connection=Constraint.create(options)
World.add(world,this.connection)

    }
    display()
    {
if (this.connection.bodyA!=null)
{


var a=this.connection.bodyA.position
var b=this.connection.pointB
stroke (48,22,8)
strokeWeight(5)
line (a.x, a.y, b.x, b.y)
    }
    }
breakConnection(){

 this.connection.bodyA=null   
}
}