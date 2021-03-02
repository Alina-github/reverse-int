module.exports = function reverse (n) {

    if (n < 0) { n = -n;} 

    n = Number(n.toString()
    .split('')
    .reverse()
    .join(''));

    return n;
    }
