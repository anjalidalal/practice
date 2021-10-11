var rectangle = {
    length : 20,
    breadth : 40,
    num : 2,
    area : function(){
        console.log("Area is " + (this.length * this.breadth))
    },
    perimeter : function(){
        console.log("Perimeter is " + this.num*(this.length + this.breadth))
    }

}
//console.log(rectangle.breadth)
rectangle.area()
rectangle.perimeter()
//console.log("Area is" + rectangle.area())
