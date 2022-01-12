let obj = {
    firstName : 'Anjali',
    lastName : 'Dalal',
    age : 19,
}
function copied_obj(obj) {
    let newObj = Object.assign({}, obj);
    newObj.lastName = 'Sindhu';
    newObj.age = 20;
    console.log('obj :', obj);
    console.log('newObj :', newObj);
}
copied_obj(obj)