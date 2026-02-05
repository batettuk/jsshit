// const orders = [
//   {
//     id: 1,
//     user: "Bat",
//     items: 3,
//     total: 120,
//   },

//   { id: 2, user: "Sara", items: 5, total: 300 },
//   { id: 3, user: "Bold", items: 1, total: 40 },
// ];
// if (orders[0].total > orders[1].total) {
//   console.log("Order 1");
// } else if (orders[1].total > orders[2].total) {
//   console.log("Order 2");
// } else {
//   console.log("Order 3");
// }

// console.log(orders);

// console.log(orders[0].total);
// console.log(orders[1].total);
// console.log(orders[2].total);

// console.log(orders[0].items > 2);
// console.log(orders[1].items > 2);
// console.log(orders[2].items > 2);
// const movies = [
//   { title: "Inception", year: 2010, rating: 8.8 },
//   { title: "Interstellar", year: 2014, rating: 8.6 },
//   { title: "Dune", year: 2021, rating: 8.1 },
// ];
// console.log(movies[0].year > 2015);
// console.log(movies[1].year > 2015);
// console.log(movies[2].year > 2015);
// const appUsage = [
//   { app: "Instagram", minutes: 120 },
//   { app: "YouTube", minutes: 200 },
//   { app: "Duolingo", minutes: 30 },
// ];
// console.log(appUsage[0].minutes + appUsage[1].minutes + appUsage[2].minutes);
// const results = [
//   { subject: "Math", score: 92 },
//   { subject: "Physics", score: 85 },
//   { subject: "English", score: 78 },
// ];
// const scores = results.map(({ score }) => score);
// if (scores[0] > 90) {
//   console.log("Math A");
// } else if (scores[0] > 80) {
//   console.log("Math B");
// } else {
//   console.log("Math C");
// }

// if (scores[1] > 90) {
//   console.log("Physics A");
// } else if (scores[1] > 80) {
//   console.log("Physics B");
// } else {
//   console.log("Physics C");
// }

// if (scores[2] > 90) {
//   console.log("English A");
// } else if (scores[2] > 80) {
//   console.log("English B");
// } else {
//   console.log("English C");
// }
// console.log(results[0].score + results[1].score + results[2].score);
// if (results[0].score > 80) {
//   console.log("Math passed");
// }
// if (results[1].score > 80) {
//   console.log("Physics passed");
// }

// if (results[2].score > 80) {
//   console.log("English fked");
// }
// if (results[0].score > results[1].score) {
//   console.log("Math higher");
// } else if (results[1].score > results[2].score) {
//   console.log("Physics higher");
// } else {
//   console.log("English higher");
// }
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let fruits = ["apple", "banana", "mango", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// const cars = ["BMW", "Audi", "Mercedes", "Toyota", "Fiat"];
// for (let i = 0; i <= 1000; i = i + 2) {
//   console.log(i);
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// let sht = 0;
// for (let i = 10; i >= 0; i--) {
//   //   console.log(i);
//   sht = sht + i;
// }

// console.log(sht);
// let sht = 0;
// let i = 10;
// while (i >= 0) {
//   sht = sht + i;
//   i--;
// }
// console.log(sht);
// let is = 0;
// let i = 10;
// while (i > 0) {
//   console.log(i);
//   is = is + i;
//   i--;
// }
// let numbers = [1, 2, 4, 6, 3, 9];

// let undur = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > undur) {
//     undur = numbers[i];
//   }
// }

// console.log(undur);
// let i = 0;

// while (i <= 100) {
//   console.log(i);
//   i++;
// }
// let i = ["apple", "banana", "mango", "orange"];
// while (i.length > 0) {
//   console.log(i);
//   i++;
// }
// let i = 30;
// while (i > 0) {
//   if (i % 2 === 0) {
//     console.log(i, "even");
//   } else {
//     console.log(i, "odd");
//   }
//   i--;
// }
// let i = 50;
// while (i >= 0) {
//   if (i % 3 === 0) {
//     console.log(i, "3t huva");
//     i--;
//   } else {
//     console.log("nohh");
//     i--;
//   }
// }
// let i = [1, 3, 5, 8, 9, 11];
// while (i.length > 0) {
//   if (i[0] % 2 === 0) {
//     console.log(i[0], "even");
//   }

//   i.shift();
// }
// let person = { name: "Alice", age: 25, city: "New York" };
// for (let i = 0; i < Object.keys(person).length; i++) {
//   console.log(Object.keys(person)[i] + ":", Object.values(person)[i]);
// }
// let i = [5, 3, 6, 9, 10];
// while (i.length > 0) {
//   if (i.length % 3 === 0 && i.length % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i.length % 3 === 0) {
//     console.log("fizz");
//   } else if (i.length % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log("fizzbuzz");
//   }
//   if (i.length % 3 === 0 && i.length % 5 === 0) {
//     console.log("fizzbuzz");
//   }
//   i.shift();
// }
// let numbers = [5, 8, 12, 20, 25, 30, 35];

// let max = numbers[0];
// let i = 1;

// while (i < numbers.length) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   i++;
// }
// console.log(max);
// let originalArray = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [];

// let i = 0;
// while (i < originalArray.length) {
//   if (!uniqueArray.includes(originalArray[i])) {
//     uniqueArray.push(originalArray[i]);

//   }
//   i++;
// }

// console.log(uniqueArray);
// let qr = 1;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }

// let qr = 2;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }

// let qr = 3;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 4;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 5;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 6;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 7;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 8;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 9;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// let qr = 10;
// let i = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(qr + "*" + i + "=" + qr * i);
// }
// for (let index = 1; index <= 10; index++) {
//   for (let indexs = 1; indexs <= 10; indexs++) {
//     let sum = index * indexs;
//     console.log(index + "*" + indexs + "=" + sum);
//   }
//
//
// let numbers = [1, 2, 3, 4, 5];
// let i = numbers.map((num) => num * num);
// {
//   console.log(i);
// }

// let people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 35 },
//   { name: "Charlie", age: 28 },
// ];

// let finds = people.find((person) => person.age > 30);

// console.log(result);
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let put = numbers.filter((num) => num % 2 === 0);
// console.log(put);
// let fruits = ["apple", "banana", "cherry", "date"];
// let a = fruits.some((fruit) => fruit.includes("a"));
// console.log(a);
// let numbers = [1, 2, 3, 4, 5];
// let sm = numbers.some((num) => num);
// console.log(sm);
// let people = [
//   { name: "Alice", age: 25 },

//   { name: "Bob", age: 35 },

//   { name: "Charlie", age: 40 },

//   { name: "Dave", age: 28 },
// ];
// let finds = people.filter((person) => person.age > 30);
// console.log(finds);

// let users = [
//   { name: "Ariuka", email: "ariuka@gmail.com" },
//   { name: "Tugsoo", email: "tugsoo@gmail.com" },
//   { name: "Zoloo", email: "zoloo@yahoo.com" },
// ];
// let us = users.map((user) => user.email);
// console.log(us);
// let nums = [1, 2, 3, 4, 5, 6, 7];
// let odd = nums.filter((num) => num / 2 !== 0);
// // console.log(odd);
// let users = [
//   { name: "Bat", age: 16 },
//   { name: "Bold", age: 19 },
//   { name: "Saraa", age: 22 },
// ];
// let a = users.find((user) => user.age > 18);
// console.log(a);
// let scores = [70, 85, 90, 100, 95];
// let a = scores.filter((score) => score >= 100);
// console.log(a);
// let people = [
//   { name: "Tsoomoo", age: 25 },
//   { name: "Naraa", age: 30 },
//   { name: "Bataa", age: 17 },
// ];
// let a = people.every((ppl) => ppl.age > 18);
// console.log(a);
// let students = [
//   { name: "Ariunaa", score: 75 },
//   { name: "Munkh", score: 82 },
//   { name: "Bolor", score: 90 },
//   { name: "Tugs", score: 68 },
// ];
// let a = students.filter((stud) => stud.score > 80);
// console.log(a);
// let names = ["bat", "saraa", "erdene"];

// names.toUpperCase();
// let products = [
//   { name: "Laptop", discount: false },
//   { name: "Phone", discount: true },
//   { name: "TV", discount: false },
// ];
// let a = products.filter((prd) => (prd.discounts = true));
// console.log(a);
// let items = [
//   { name: "Pen", price: 20 },
//   { name: "Notebook", price: 50 },
//   { name: "Bag", price: 120 },
// ];
// let a = items.filter((pr) => pr.price < 100);
// console.log(a);
// let nums = [3, 7, 12, 5, 9];
// let a = nums.filter((num) => num > 5);
// console.log(a);
// let numbers = [1, 2, 3, 6, 9];
// let fid = numbers.some((num, index) => {
//   return numbers.indexOf(num) !== index;
// });
// console.log(fid);
// const arr = ["a", "b", "a", "c", "b", "a"];
// const result = {};

// for (let i = 0; i < arr.length; i++) {
//   const item = arr[i];

//   if (result[item]) {
//     result[item]++;
//   } else {
//     result[item] = 1;
//   }
// }

// console.log(result);
// let arr = [1, 2, 3, 4, 5];
// let a = arr.reduce((acc, Cur) => {
//   return acc + Cur;
// }, 0);
// console.log(a);
// let arr = [5, 12, 3, 21];
// let a = arr.reduce((acc, Cur) => {
//   return acc > Cur ? acc : Cur;
// }, 0);
// console.log(a);
// let arr = [8, 2, 10, 1];
// let a = arr.reduceRight((acc, Cur) => {
//   return acc < Cur ? acc : Cur;
// });
// console.log(a);
// let arr = [1, 2, 8, 4, 6];
// let a = arr.reduce((acc, cur) => {
//   return cur % 2 === 0 ? acc + cur : acc;
// }, 0);
// console.log(a);
// let arr = [1, 2, 3, 4, 5];
// let a = [];
// let v = arr.reduce((acc, dd) => {
//   if (dd % 2 === 0) {
//     a.push(dd);
//   }
//   return acc;
// }, 0);
// console.log(v, a);
// let arr = ["h", "e", "l", "l", "o"];
// let a = arr.reduceRight((hh, mn) => hh + mn, "");
// console.log(a);
// let arr = [10, 2, 1];
// let a = arr.reduceRight((hn, nh) => hn - nh);
// console.log(a);
// const users = [
//   { name: "Bat", age: 20 },
//   { name: "Bold", age: 30 },
//   { name: "Saraa", age: 25 },
// ];
// let a = users.reduce((ago, ds) => {
//   return ago + ds.age / 3;
// }, 0);
// console.log(a);
// const items = [
//   { name: "Apple", category: "fruit", price: 3 },
//   { name: "Carrot", category: "vegetable", price: 2 },
//   { name: "Banana", category: "fruit", price: 4 },
// ];
// let a = items.reduce((an, item) => {
//   if (!an[item.category]) {
//     an[item.category] = 0;
//   }
//   an[item.category] += item.price;
//   return an;
// }, {});
// console.log(a);
// const words = ["hi", "hello", "goodbye", "hey"];
// let a = words.reduce((acc, word) => {
//   return acc.length < word.length ? word : acc;
// }, "");
// console.log(a);
