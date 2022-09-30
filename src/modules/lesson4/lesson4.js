const arr = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8];
let sum = 0;

function getSum(array) {
  for (const element of array) {
    if (Array.isArray(element)) getSum(element);
    else {
      sum += element;
    }
  }
}

getSum(arr);
console.log(sum);
