let item = {
    str: "anjali",
    reverse: function () {
        let revStr = [];
        for (let i = this.str.length - 1; i >= 0; i--) {
            revStr.push(this.str[i]);
        };
        console.log(revStr);
    },
    vowels : function(){
        let count = 0;
        for (let i = 0; i < this.str.length; i++) {
            
            if (this.str[i] === 'a' || this.str[i] === 'e' || this.str[i] === 'i' || this.str[i] === 'o' || this.str[i] === 'u') {
                count++;
            }
        }
        console.log(count)    
    }

}
item.reverse();
item.vowels();