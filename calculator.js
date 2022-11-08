//Muhammad Ahmed, 20I-11855, SE-P

function sum(x, y) {
    return( x + y );
}

function sub(x, y) {
    return( x - y );
}

function mul(x, y) {
    return( x * y );
}

function div(x, y) {
    if(y===0) {
        return("undefined");
    }
    return( x / y );
}

module.exports.sum = sum;
module.exports.sub = sub;
module.exports.mul = mul;
module.exports.div = div;