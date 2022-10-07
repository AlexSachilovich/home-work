// task 1

// const vegetables = [
//     "Капуста",
//     "Репа",
//     "Редиска",
//     "Морковка"
// ];

// const arr1 = vegetables.map(copyArr);

// function copyArr (element, index, array) {
//          return index = array[index];
//     }

// console.log(arr1);

// task 2

// const vegetables = [
//     "Капуста",
//     "Репа",
//     "Редиска",
//     "Морковка"
// ];

// let str1 = vegetables.join(",");
// let str2 = vegetables.toString();

// console.log(str1);
// console.log(str2);

// task 3

// const num = prompt("Введите число");

// let num2 = num.split([,]).map(colonOdd).join("");

// function colonOdd(element, index, array) {
//   if ((Number(array[index]) % 2 !== 0) & (Number(array[index + 1]) % 2 !== 0)) {
//     return (array[index] += ":");
//   } else return array[index];
// }

// console.log(num2);

// task 4

// const str = "КаЖдЫй ОхОтНиК";

// function changeRegistr (string) {
//     let arr = string.split([,]);
//         return arr.map(iterator);
// };

// function iterator (element, index, array) {
//     if (element == element.toUpperCase()) {
//        return element.toLowerCase();
//     } if (element == element.toLowerCase()) {
//         return element.toUpperCase();
//     }
// };

// const str2 = changeRegistr(str);
// console.log(str2);

// task 5

// const array = [2, 23, 3, 2, 23, 546, 567, 3, 45, 23];

// const getNewArr = (arr) => {
//   const tempArr = [];
//   arr.forEach((item) => {
//     if (!tempArr.includes(item)) {
//       tempArr.push(item);
//     }
//   });
//   return tempArr;
// };

// console.log(getNewArr(array));

// task 6

// const arr1 = [1,2,3,4,5];
// const arr2 = [4,5,6];

// const arr3 = arr1.map( function (element, index) {
//     if (!arr2[index] || typeof arr2[index] !== "number") return element;
//     return element += arr2[index];
// })

// console.log(arr3);
