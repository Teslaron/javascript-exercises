const repeatString = function(a, b) {
    let c = "";
    for (let i=0; i < b; i++) {
        c += a;
    }
    if (b < 0) {
    return 'ERROR'
    }
    else {
    return c;    
    }
};
// Do not edit below this line
module.exports = repeatString;
