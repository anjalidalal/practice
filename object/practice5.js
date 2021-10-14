var item = {
    arr : [1, 2, 6, 7, 3, 4, 9, 0],
    greater : function(val){
        let grnum = [];
        for (let i = 0; i < this.arr.length; i++) {    
            if (this.arr[i] > val) {
              grnum.push(this.arr[i]);   
            }    
        }
        console.log(grnum)
    },
    lesser : function(val){
        let lessNum = [];
        for (let i = 0; i < this.arr.length; i++) {
            if (this.arr[i] < val) {
                lessNum.push(this.arr[i]);
            }
        }
        console.log(lessNum);
    }
}
item.greater(5);
item.lesser(5);