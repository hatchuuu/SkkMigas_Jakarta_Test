function filterAndSort(arr) {
    return arr.filter(num => num % 3 !== 0).sort((a, b) => a - b);
}

const numberArray = [12, 5, 9, 8, 15, 7, 20, 18, 1, 10];
const result = filterAndSort(numberArray);
console.log(result);
