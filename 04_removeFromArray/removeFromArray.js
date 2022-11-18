const removeFromArray = function(arrayInput, a, b, c, d) {
    let array = arrayInput;
    let forDeletion =[a, b, c, d];
    return array.filter(item => !forDeletion.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
