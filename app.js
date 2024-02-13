// 1)Quyidagi massivdagi barcha odamlarni yoshlarining o’rtacha qiymatini chiqaruvchi getAverageAge(arr) nomli funksiya yozing.

// const people = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function getAverageAge(arr) {
//   let allAge = 0;
//   arr.forEach((item) => {
//     allAge += item.age;
//   });
//   return allAge / people.length;
// }
// const result = getAverageAge(people);

// console.log(result);

// 2)Massiv ichidagi har bir objectga isMarried nomli property qo’shilsin. Agar object yoshi 25 dan kichi bo’lsa isMarried ga false, aks holda true qiymat o’zlashtirilsin.

// const person = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];

// function isMarried(arr) {
//   arr.forEach((person) => {
//     if (person.age > 25) {
//       person.isMarried = true;
//     } else person.isMarried = false;
//   });
//   return arr;
// }

// console.log(isMarried(person));

//

// 3)Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(arr) nomli funksiya yozing. (for)

// const person = [
//   { name: "Abdulaziz", age: 33 },
//   { name: "Erkin", age: 22 },
//   { name: "Temur", age: 34 },
//   { name: "Sardor", age: 20 },
// ];
// function getNameMaxMinAge(arr) {
//   let max = 0;
//   let min = 0;

//   let minName = "";
//   let maxName = "";

//   for (let item of arr) {
//     if (item.age > max) {
//       max = item.age;

//       maxName = item.name;
//     } else if (min === 0 || min >= item.age) {
//       min = item.age;

//       minName = item.name;
//     }
//   }
//   return { minName, maxName };
// }

// let result = getNameMaxMinAge(person);
// console.log(result);

//

// 4)Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// function alreadyRead(books) {
//   books.forEach((book) => {
//     if (book.alreadyRead == true) {
//       console.log(`${book.author} ning ${book.title}
//       kitobi o'qilgan`);
//     } else {
//       console.log(`${book.author} ning ${book.title}
//       kitobi o'qilmagan`);
//     }
//   });
// }

// alreadyRead(books);

//5)GPA ni hisoblovchi dastur tuzing.GPA = (grade1 * kredit1 + grade2 * kredit2 + ...) / (kredit1 + kredit2 + ...)

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function calculateGPA(grades) {
//   let points = 0;
//   let credits = 0;
//   for (const item of grades) {
//     points += item.grade * item.kredit;
//     credits += item.kredit;
//   }

//   const gpa = points / credits;
//   return gpa;
// }

// const result = calculateGPA(grades);
// console.log(`GPA:`, result.toFixed(2));

//

//6)Quyidagi massivdagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping, shuningdek, objectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// function getAverageAge(arr) {
//   let allProtcent = 0;
//   arr.forEach((item) => {
//     allProtcent += item.protcent;
//   });
//   return allProtcent / pupils.length;
// }
// const result = getAverageAge(pupils);

// console.log(result.toFixed(2));

//7)grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// function price(arr) {
//   arr.forEach((pupils) => {
//     if (pupils.protcent > 90 && pupils.protcent < 100) {
//       pupils.price = 5;
//     } else if (pupils.protcent > 80 && pupils.protcent < 90) {
//       pupils.price = 4;
//     } else if (pupils.protcent > 70 && pupils.protcent < 80) {
//       pupils.price = 3;
//     } else {
//       pupils.price = 2;
//     }
//   });
//   return arr;
// }

// console.log(price(pupils));

//

//8.isPassed propertyga protcent 70 dan o'tsa va teng bo’lsa true, aks holda false qiymat o'zlashtirilsin.
// // const pupils = [
// //   {
// //     name: "Elbek",
// //     protcent: 95,
// //   },
// //   {
// //     name: "Zafar",
// //     protcent: 78,
// //   },
// //   {
// //     name: "Aziz",
// //     protcent: 83,
// //   },
// //   {
// //     name: "Jasur",
// //     protcent: 88,
// //   },
// //   {
// //     name: "Bobur",
// //     protcent: 66,
// //   },
// //   {
// //     name: "Kamron",
// //     protcent: 75,
// //   },
// // ];

// // function isPassed(arr) {
// //   arr.forEach((pupils) => {
// //     if (pupils.protcent >= 70) {
// //       pupils.protcent = true;
// //     } else {
// //       pupils.protcent = false;
// //     }
// //   });
// //   return arr;
// // }

// // console.log(isPassed(pupils));

//9)Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang.

// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// function exam(arr) {
//   let examTrue = 0;
//   let examFalse = 0;
//   arr.forEach((pupils) => {
//     if (pupils.protcent >= 70) {
//       examTrue++;
//     } else {
//       examFalse++;
//     }
//   });
//   console.log(
//     `${examTrue} ta odam imtihondan muvaffaqiyatli o'tdi ${examFalse}ta odam afsuski imtihondan o'ta olmadi`
//   );
//   return arr;
// }
// exam(pupils);

//10)Objectning kalitlaridan va qiymatlaridan iborat bo'lgan massiv tuzing.

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// const resultArray = [];

// for (const key in obj) {
//   resultArray.push(key, obj[key]);
// }

// console.log(resultArray);

//
