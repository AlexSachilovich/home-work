//Task 1 Show ChessBoard #

// function displayOddLine() {
//   oddLine = " # # # # #";
//   console.log(oddLine);
// }

// function displayEvenLine() {
//   evenLine = "# # # # #";
//   console.log(evenLine);
// }

// function displayChessBoard(amountLinesAddOdd = 5) {
//   for (let i = 0; i < amountLinesAddOdd; i++) {
//     displayOddLine();
//     displayEvenLine();
//   }
// }

// displayChessBoard(4);

//Task 2 ANKETA

// let firstNameUser;
// let lastNameUser;
// let middleNameUser;
// let ageUser;
// let ifPensionUser;

// do {
//   firstNameUser = prompt("Введите вашу фамилию");
// } while (!Number.isNaN(Number(firstNameUser)));

// do {
//   lastNameUser = prompt("Введите ваше имя");
// } while (!Number.isNaN(Number(lastNameUser)));

// do {
//   middleNameUser = prompt("Введите ваше отчество");
// } while (!Number.isNaN(Number(middleNameUser)));

// do {
//   ageUser = Number(prompt("Сколько вам лет?"));
// } while (ageUser > 100 || Number.isNaN(Number(ageUser)) || ageUser == 0);

// let gender = confirm("Ваш пол-мужской?");
// if (gender) {
//   gender = "мужской";
// } else {
//   gender = "женский";
// }

// if (
//   (gender == "мужской" && Number(ageUser) >= 62) ||
//   (gender == "женский" && Number(ageUser) >= 57)
// ) {
//   ifPensionUser = "да";
// } else {
//   ifPensionUser = "нет";
// }

// alert(
//   ` ваше ФИО: ${firstNameUser} ${lastNameUser} ${middleNameUser} \n ваш возраст в годах: ${ageUser} \n ваш возраст в днях: ${
//     ageUser * 365
//   } \n через 5 лет вам будет: ${
//     ageUser + 5
//   } \n ваш пол: ${gender} \n вы на пенсии: ${ifPensionUser}`
// );

// let line = "";

// for (let outside = 0; outside < 8; outside++) {
//   for (let inside = 0; inside < 8; inside++) {
//     if ((outside + inside) % 2 == 0) {
//       line += "#";
//     } else {
//       line += " ";
//     }
//   }
//   line += "\n";
// }

// console.log(line);

const arr = [1, 4, 34, 566, [34, 56], 65, 34, [[34], [54]]];
