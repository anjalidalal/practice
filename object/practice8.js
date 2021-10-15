let names = ["Mansi", "Sheetal", "Anjali", "Rohit"];
let ages = [28, 33, 29, 31];
let users = [];

for (let i = 0; i < names.length; i++) {
  var user = {};
  user.name = names[i];
  user.age = ages[i];

  users.push(user);
}

console.log(users);

for (let i = 0; i < users.length; i++) {
  var usr = users[i];
  if (usr.age > 30) {
    console.log(usr.name);
  }
}
