//Цикли - робить одну і ту саму дію декілька раз, беруться дані з масиву і виводяться

//1.FOR
//
// document.write('<ul>');
//
// for (let i = 0; i < 100 ; i++) { // 1-ше надаємо початкове значення змінній 2-ге виконуємо умову 3-тє виводимо консоль 4-те збільшуємо на 1 по ункременту і так далі
//     document.write('<li>item</li>');
// }
//
// document.write('</ul>');
//
// document.write('<ul>');
// for (let i = 0; i < 100; i++) { //використовуємо інтерполяцію,щоб надати конкректне значення i-го елемента
//     document.write(`<li> item ${i}</li>`);
// }
// document.write('</ul>');

// За допомогою циклів ітерують масиви
//
// let menu = ['file','edit','View','Run']
//
// document.write ('<ul>');
//
// for (let i = 0; i < menu.length; i++){
//     document.write(`<li>${menu[i]}</li>`);
// }
// document.write('</ul>');

// let cars = [
//     {
//         brand: 'Volvo',
//         model: 'S60',
//         price: 12000,
//         color: 'blue',
//         image: 'https://media.ed.edmunds-media.com/volvo/s60/2023/oem/2023_volvo_s60_sedan_recharge-t8-ultimate-bright_fq_oem_1_815x543.jpg'
//     },
//     {
//         brand: 'Volkswagen',
//         model: 'Jetta',
//         price: 8000,
//         color: 'white',
//         image: 'https://www.ccarprice.com/products/Volkswagen_Jetta_GLI_Autobahn_2021.jpg'
//     },
// ];

// for (let i = 0; i < cars.length; i++) { // hot key - itar  for (let i = 1; i < cars.length-1; i++) - передостання
//     let car = cars[i];
//     if (car.price < 9000) {
//         document.write(`<li class="target"> ${car.brand} ${car.model} ${car.price} <img src="${car.image}" alt=""></im></li>`)
//     }
// }

// for (let car of cars) { // hot key - iter цикл, що ітерється від початку до кінця
//     if (car.price < 9000) {
//          document.write(`<li class="target"> ${car.brand} ${car.model} ${car.price} <img src="${car.image}" alt=""></im></li>`)
//     }
// }

// 2. While - використовується,коли буде паттерн - ітератор
//
// document.write('<ul>')
// let i = 0;
// while (i < cars.length) {
//     let car = cars[i];
//     document.write(`<li class="target"> ${car.brand} ${car.model} ${car.price} <img src="${car.image}" alt=""></im></li>`)
//     i++;
// };
//
// document.write('</ul>')  <elt dbrjhbcnjdedfnbcб

// 3. Do - While - коли хочеш отримати інфу, то спочатку отримуєш дані,а потім перевіряєш, цикл з предвиконанням
//
// do {
//     console.log('all info');
// } while (false);

// 4. For in - цикл,що ітерує обєкт - асоціативний масив hot key - itin

let user = {  // об'єкт часто називають асоціативними масивами
    name: 'Julia',
    age: 32,

};
for (let key in user){
    console.log(key, user['name']);
}