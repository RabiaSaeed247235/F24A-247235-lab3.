const numbers = [2, 3, 5];

function addNumbers(list) {
    let sum = 0;
    let position = 0;

    while (position < list.length) {
        sum += list[position];
        position++;
    }

    return sum;
}

function findLargest(list) {
    let largest = list[0];
    let position = 1;

    while (position < list.length) {
        if (list[position] > largest) {
            largest = list[position];
        }
        position++;
    }

    return largest;
}

function countAboveFirst(list) {
    const first = list[0];
    let count = 0;
    let position = 1;

    while (position < list.length) {
        if (list[position] > first) {
            count++;
        }
        position++;
    }

    return count;
}

console.log(addNumbers(numbers));
console.log(findLargest(numbers));
console.log(countAboveFirst(numbers));

function showResults() {
    document.getElementById("total").textContent = addNumbers(numbers);
    document.getElementById("big").textContent = findLargest(numbers);
    document.getElementById("above").textContent = countAboveFirst(numbers);
}

document.getElementById("show").addEventListener("click", showResults);
