var user = {
    name : "Jason",
    birth : 2002,
    age : function(year){
        console.log(year - this.birth)
    } 
}
user.age(2022)