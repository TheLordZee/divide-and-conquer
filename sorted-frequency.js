function sortedFrequency(arr, tar) {
    let startIndex = 0;
    let endIndex = arr.length - 1;
    let firstInst
    let lastInst
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2);
        if(arr[currIndex] > tar){
            endIndex = currIndex - 1;
        }else if(arr[currIndex] < tar){
            startIndex = currIndex + 1;
        };
        if(arr[currIndex] === tar && arr[currIndex - 1] === tar){
            endIndex = currIndex - 1;
        }else if(arr[currIndex] === tar && arr[currIndex - 1] !== tar){
            firstInst = currIndex
            break;
        }
    };
    if(!firstInst){
        return -1
    }
    startIndex = 0;
    endIndex = arr.length - 1;
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2);
        if(arr[currIndex] > tar){
            endIndex = currIndex - 1;
        }else if(arr[currIndex] < tar){
            startIndex = currIndex + 1;
        };
        if(arr[currIndex] === tar && arr[currIndex + 1] === tar){
            startIndex = currIndex + 1;
        }else if(arr[currIndex] === tar && arr[currIndex + 1] !== tar){
            lastInst = currIndex
            break;
        }
    };
    return (lastInst - firstInst) + 1
}

module.exports = sortedFrequency