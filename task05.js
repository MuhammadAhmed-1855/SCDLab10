//Muhammad Ahmed, 20I-11855, SE-P

function find(x) {
    const numArray = [1, 2, 13, 4, 5, 16, 7, 8, 19];
    const n = numArray.length;

    if(n === 0) {
        return("Array is empty.")
    }
    for(let i=0; i<n; i++) {
        if(numArray[i] === x) {
            return("Element is present.");
        }
    }
    return("Element is not present.");
}

module.exports = find;