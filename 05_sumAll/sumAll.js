const sumAll = function(numb1, numb2) {
    let finalSum = 0;
    if ((numb1>0&&numb2>0) && (typeof numb1 == 'number' && typeof numb2 == 'number')) {
        if (numb1 < numb2) {
            for (i=0; i<=numb2; i++) {
                finalSum +=i;
            }
        }
        else if(numb1 > numb2) {
            for (i=0; i<=numb1; i++) {
                finalSum +=i;
            }
        }
    }
    else {
        return "ERROR";
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
