let calc = {
    a : 125,
    b : 25,
    addition : function(){
        console.log("ADDITION IS " + (this.a + this.b))
    },
    subtraction : function(){
        console.log("SUBTRACTION IS " + (this.a - this.b))
    },
    multiplication : function(){
        console.log("MULTIPLICATION IS " + (this.a * this.b))
    },
    division : function(){
        console.log("DIVISION IS " + (this.a / this.b))
    }
}
calc.addition();
calc.subtraction();
calc.multiplication();
calc.division();