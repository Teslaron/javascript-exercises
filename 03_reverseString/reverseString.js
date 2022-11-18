const reverseString = function(string) {
let stringlength = string.length;
let reverse = "";
    for (let i=stringlength; i > -1; i--) {
        reverse += string.substr(i, 1);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
