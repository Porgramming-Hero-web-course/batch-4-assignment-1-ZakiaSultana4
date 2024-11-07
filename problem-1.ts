function sumArray(numberArray: number[]) {
    let summation = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue)
    return summation
}

// console.log(sumArray([1, 2, 3, 4, 5]));