//1. Виведення інформації
//
// console.log('I start');
// alert('today is 30.01.2023');
// document.write('<h1>hello IT</h1>');

//2. Змінні
//
//2.1 let,var, const
// let a; - декларація змінної
// а = 100; - ініціалізація змінної
// let a = 100; - декларація та ініціалізація одночасно
// ембедет object - вбудований обєкт
//{
// let a = 100
// }
// console.log(a); - фігурні дужки це блок ініціалізації, вони будують видимість або scope- область видимості
// let a = 100;
// console.log(a);
//
// 2.2 різниця між let і var
// - var з однаковою назвою можна створити, а let - ні
// - змінна let не буде видна за межами блоку ініціалізації
//
// {
// var a = 300;
// let c = 250;
// }
// console.log(c);
//
//змінну const не можна перевизначати, вона стала
//
// const PI = 3.14;
// PI = 2.14;

//3.Типи даних:
//3.1 базові типи:
// console.log(100,100.22); // - числа, числа з плаваючою крапкою
// console.log('string'); // - стрінгове значення, напис, слова. (`string`) - лапки наз. бекквоти, темплейт стрінг
// console.log('true') // - булові типи, true = 1  або false = 0
// console.log(5>6); // "< > <= >= == != === !=="- відноситься до булового типу
// console.log([1,2,5,8,true,'sfuefgu']);// масив
//
//- Звернення до елементів масиву
//           0 1 2  3       4         5        - всі індексуються з 0
//                                 0   1  2
// let array = [1,2,4,true,'freedom',[11,22,33]];
// console.log(array);
// console.log(array[4]);
// console.log(array[5][1]);
//
// console.log({name: 'Julia' , age: 32}); // обєкт - опис, характеристика чогось
//
//- Звернення до елементів обєкта
//             ключ,проперті,value,поля
// let user = {name: 'Julia' , age: 32};
// console.log(user);
// console.log(user.name);
// console.log(user['age']);
//
// console.log(undefined) // - undefined - тип даних
//
// let a;
// console.log(a);// якщо змінна непроініціалізована, то вона дорівнює undefined
//
// console.log(null); // - тип даних, являється заглушкою зазвичай до ссилочних типів даних, примітив
//
// console.log(NaN); // тип даних, не число, число з плаваючою крапкою,яке не дорівнює жодному числу з пл. крапкою
// console.log(typeof NaN); // перевірка типу даних
//
//- кастомні типи: будуть створюватись в процесі розробки

// 4. Стандартні оператори
// let result = 10+30;
// console.log(result);
// console.log(10%3); // ділення по модулю, залишається остача 1, можна визначати кратність
// console.log((10+10)*2); // пріоритетність операції згідно математики
// //
// // let a = 2 ;
// // a++; // оператор інкременту, збільшує на одиницю
// //a--; // оператор декремент, зменшує на одиницю
// // console.log(a);
// //
// // let a = 1;
// // let b = a++; // пріоритетність операції, тому 2 1, b приймає поточне значення a тому 1
// // console.log(a,b);
// //
// let a = 1;
// let b = ++a; // пріоритетність операції, тому 2 2, спочатку збільшуємо а, а потім b
// // console.log(a,b);
// //
// // a = a +100;
// // a += 100; // cкорочений запис / шорт хенд
// // console.log(a);
// //
// console.log(a ** 2); // піднести до степеня
//
// let str1 = "hello";
// let str2 = "world";
// console.log(str1 + ' ' + str2); // конкатинація
// //          інтерполяція
// console.log(`${str1} ${str2}`) //часто не використовувати, тому що іде зайве навантаження і довго думає сайт
// console.log(str1 * str2);
// console.log(str1+100+200); // все стрінга
// console.log(str1+(100+200)); //в такому випадку рахує
// console.log(+'10500'); // + робить стрінгу числом
// console.log(!!'hello'); // !! привести до булового значення
// console.log(!!''); // false емпті стрінг
// console.log(!!0); // false
// console.log(!!null); // false
// console.log(!!undefined); // false
// console.log(!!NaN); // false
// console.log(!![]); // true
// console.log(!!{}); // true
// console.log(!!' '); // true
// console.log(!!'0'); // true

// 5. Булові змінні
//
// console.log(5 > 6);
// console.log(5 != 6);
// console.log(5 == '5'); // true ліва і права частина прирівнюється до стрінги, стрінги порівнюються за аскікодами - числове представлення своїх внутрішніх символів
// console.log(5 === '5'); // тоді іде порівняння числа зі стрінгою

// 6. Звернення одночасно до масива і обєкта

// let users = [
//     {name: 'Julia', age: 32},
//     {name: 'Andry', age:31},
// ];
// console.log(users[1].age)

// let cars = [
//     {
//         brand : 'Volvo',
//         model: 'S60',
//         color : 'blue',
//         image: 'https://media.ed.edmunds-media.com/volvo/s60/2023/oem/2023_volvo_s60_sedan_recharge-t8-ultimate-bright_fq_oem_1_815x543.jpg'
//     },
//     {
//         brand : 'Volkswagen',
//         model: 'Jetta',
//         color : 'white',
//         image: 'https://www.ccarprice.com/products/Volkswagen_Jetta_GLI_Autobahn_2021.jpg'
//     },
// ];
// for (const car of cars){
//     // console.log(car);
// document.write(
//     `<div>
// <h2>${car.brand} ${car.model}</h2>
// <img src="${car.image}" alt="">
// </div>
// `
// )
// }
//
