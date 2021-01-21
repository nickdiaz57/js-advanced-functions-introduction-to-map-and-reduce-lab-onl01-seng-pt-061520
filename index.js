function mapToNegativize(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]*(-1))
    }
    return result
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]*2)
    }
    return result
}

function mapToSquare(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]*arr[i])
    }
    return result
}

function reduceToTotal(arr, start=0) {
    let result = start
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]
    }
    return result
}

function reduceToAllTrue(arr) {
    let isTrue = true
    for (let i = 0; i < arr.length; i++) {
        if(!arr[i]) {
            isTrue = false
        }
    }
    return isTrue
}

function reduceToAnyTrue(arr) {
    let isTrue = false
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]) {
            isTrue = true
        }
    }
    return isTrue
}