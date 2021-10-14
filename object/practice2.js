var item = {
    data: [
        {marks: 20, name: "anjali"},
        {marks: 30, name: "sheetal"},
        {marks: 10, name: "mansi"}
    ],
    average : function(){
        let sum = 0;
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i].marks;
        }
        console.log("AVERAGE IS " + (sum/2))
    },
    maximum : function(){
        let max = 0;
        let name = "";
        for (let i = 0; i < this.data.length; i++) {
            if (max < this.data[i].marks) {
                max = this.data[i].marks;
                name = this.data[i].name;
            }
        }
        console.log({max, name})
    },
    minimum : function(){
        let min = Infinity;
        let name ="";
        for (let i = 0; i < this.data.length; i++) {
            if (min > this.data[i].marks) {
                min = this.data[i].marks;
                name = this.data[i].name;
            }
        } 
        console.log({min, name});
    }
}
item.average();
item.maximum();
item.minimum();