module.exports = function reverse(n) {
    let str = n < 0 ? String(-n) : String(n);
    return +str.split("").reverse().join("");
};
