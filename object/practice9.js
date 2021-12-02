// product cart object

let name = ["Rice", "Dal", "Salt"];
let quantity = [2, 3, 1];
let price = [60, 50, 20];


let user = {
    data :[],
    total : function(){
        let sum = 0;
        for (let i = 0; i < this.data.length; i++) {
            sum += this.data[i].quantity * this.data[i].price;
        }
        return sum ;
    }
}

for (let i = 0; i < name.length; i++) {
   
    let u = {}
    u.name = name[i];
    u.quantity = quantity[i];
    u.price = price[i]

    user.data.push(u)
}

console.log(user);
console.log("TOTAL ~ ", user.total());