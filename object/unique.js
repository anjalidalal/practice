let str = "masi";
function uniqueness(str){
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
           obj[str[i]] = obj[str[i]] + 1;
        } 
        else{
           obj[str[i]] = 1;
        }
    }
    console.log(obj);
    for (let key in obj) {
        if (obj[key] == 1) {
            console.log("Unique");
        }
        else{
            console.log("No")
        }
    }
    
}
uniqueness(str)