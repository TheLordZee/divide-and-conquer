function countZeroes(arr) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2);
        if(arr[currIndex] !== 0){
            startIndex = currIndex + 1;
        }else if(arr[currIndex - 1] === 0) {
            endIndex = currIndex - 1;
        }else{
            return arr.length - currIndex
        };
    };
    if(startIndex === arr.length){
        return 0
    }else{
        return arr.length
    }
}

module.exports = countZeroes