let names = ["Rice", "Dal", "Salt"];
let quantitys = [3, 2, 1];
let prices = [60, 50, 20];

let users = {
    total : function(){
        let product = this.quantity * this.price;
        return product;
    }
};

for (let i = 0; i < names.length; i++) {
    let user = {};
    user.name = names[i];
    user.quantity = quantitys[i];
    user.price = prices[i];
    users.push(user)
    
}
//console.log(users)
//users.user