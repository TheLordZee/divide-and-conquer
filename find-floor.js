function findFloor(arr, tar){
    let startIndex = 0
    let endIndex = arr.length - 1
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2)
        if(arr[currIndex] > tar){
            if(arr[currIndex - 1] < tar){
                return arr[currIndex - 1]
            }
            endIndex = currIndex - 1
        }else if(arr[currIndex] > tar){
            startIndex = currIndex + 1
        }else if(arr[currIndex] === tar){
            return tar
        }
    }
    
    if(startIndex === arr.length){
        return arr[arr.length - 1]
    }else{
        return -1
    }
}

module.exports = findFloor