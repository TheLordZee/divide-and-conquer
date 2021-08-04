function findRotationCount(arr) {
    let startIndex = 0
    let endIndex = arr.length - 1
    let rotIndex
    while(startIndex <= endIndex){
        let currIndex = Math.floor((endIndex + startIndex)/2)
        if(arr[currIndex + 1] < arr[currIndex]){
            rotIndex = currIndex;
            break;
        }else if(arr[currIndex - 1] > arr[currIndex]){
            rotIndex = currIndex - 1;
            break;
        }else{
            endIndex = currIndex - 1
        }
    }
    if(!rotIndex){
        startIndex = 0
        endIndex = arr.length - 1
        while(startIndex <= endIndex){
            let currIndex = Math.floor((endIndex + startIndex)/2)
            if(arr[currIndex] > arr[currIndex + 1]){
                rotIndex = currIndex;
                break;
            }else if(arr[currIndex - 1] > arr[currIndex]){
            rotIndex = currIndex - 1;
            break;
            }else{
                startIndex = currIndex + 1
            }
        }   
    }
    if(rotIndex){
        return rotIndex + 1
    }else{
        return 0
    }
}

module.exports = findRotationCount