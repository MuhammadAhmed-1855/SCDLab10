
function sumCheck(x, y, z) {
    let sum = 0;
    z = z - 1;
    if(z<=0) {
        return("Below z are not any natural numbers.")
    }
    while(z!==1) {
        if(z%x===0 || z%y===0) {
            sum = sum + z;
        }
        z = z -1;
    }
    return(sum);
}

module.exports = sumCheck;