
function removeDuplicates(numberArray: number[]): number[] {

    let removeDuplicate = numberArray.reduce<number[]>((accumulator, currentValue) => {
        if (!accumulator.includes(currentValue)) {
            accumulator.push(currentValue);
        }
        return accumulator;
    }, []);

    return removeDuplicate;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));