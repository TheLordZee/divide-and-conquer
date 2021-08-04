function findRotatedIndex(arr, tar) {
    let startIndex = 0
    let endIndex = arr.length - 1
    let rotIndex
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2)
        if(arr[currIndex] === tar){
            return currIndex
        }else if(arr[currIndex + 1] < arr[currIndex]){
            rotIndex = currIndex;
            break;
        }else if(arr[currIndex + 1] > arr[currIndex]){
            endIndex = currIndex - 1
        }
    }
    if(!rotIndex){
        startIndex = 0
        endIndex = arr.length - 1
        while(startIndex <= endIndex){
            let currIndex = Math.floor((endIndex + startIndex)/2)
            if(arr[currIndex] === tar){
                return currIndex
            }else if(arr[currIndex + 1] < arr[currIndex]){
                rotIndex = currIndex;
                break;
            }else if(arr[currIndex + 1] > arr[currIndex]){
                startIndex = currIndex + 1
            }
        }   
    }
    startIndex = 0
    endIndex = rotIndex
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2)
        if(arr[currIndex] === tar){
            return currIndex
        }else if(arr[currIndex] < tar){
            startIndex = currIndex + 1
        }else if(arr[currIndex] > tar){
            endIndex = currIndex - 1
        }
    }
    startIndex = rotIndex
    endIndex = arr.length - 1
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2)
        if(arr[currIndex] === tar){
            return currIndex
        }else if(arr[currIndex] < tar){
            startIndex = currIndex + 1
        }else if(arr[currIndex] > tar){
            endIndex = currIndex - 1
        }
    }
    return -1
}

module.exports = findRotatedIndex