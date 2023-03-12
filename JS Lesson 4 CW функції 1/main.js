//Функції - шаблон, куди запаковується код і можна виводити купу раз по одному і тому шаблону різні значення/аргументи

// function listcreator (a) {
//     document.write(`<ul>`);
//     document.write(`<li>item ${a}</li>`);
//     document.write(`<li>item ${a}</li>`);
//     document.write(`<li>item ${a}</li>`);
//     document.write(`<li>item ${a}</li>`);
//     document.write(`</ul>`);
// }
// listcreator('hello');
// listcreator('world');

// function listcreator2 (a,b,c,d){
//     document.write(`<ul>`);
//     document.write(`<li>item ${a}</li>`);
//     document.write(`<li>item ${b}</li>`);
//     document.write(`<li>item ${c}</li>`);
//     document.write(`<li>item ${d}</li>`);
//     document.write(`</ul>`);
// }
// listcreator2('item1','item2','item3','item4'); // аргументи виводяться попорядку

// function listcreator3(size) { //щоб вивести скільки завгодно li, але дані функції закінчуються undefined і ніяких даних не видають для подальшого використання
//     document.write('<ul>');
//     if (size ===  60) {
//         for (let i = 0; i < size; i++) {
//             document.write(`<li>item ${i + 1}</li>`)
//         }
//     } else {
//         document.write('doesnt work');
//     }
//
//     document.write('</ul>');
// }
//
// listcreator3(20);
// listcreator3(60);
//

// function calc(a, b) { // дана функція через return виводить результат,який надалі можна використовувати
//     let res = a + b;
//     return res;
// }
//
// let result = calc(10, 30);
// console.log(result);

// function calc2() { // у випадку якщо не має даних аргумента
//     console.log(arguments);
// }
//
// calc2(10, 20, 30); //псевдомасив, не поводить себе як повністю як масив,не має такого функціоналу
// calc2(40, 50, 60);

// function calc3() {
//     let res = 0;
//     for (const argument of arguments) {
//         res = res + argument;
//     }
//     return res;
// }
//
// let res1 = calc3(10, 20, 30);
// let res2 = calc3(40, 50, 60);
// console.log(res1, res2);
//               дефолтна ініціалізація,тобто аргумент по дефолту буде +
// function calc4(action = '+', a, b)
// function calc4(action, a, b) {
//     let result;
//     if (action === '+') {
//         result = a + b;
//     } else if (action === '-') {
//         result = a - b;
//     }
//     return result;
// }
//
// let calculatorRes = calc4 ('+', 10, 10);
// console.log(calculatorRes);

//Наприклад, потрібно перевірити чи а і b є числами
//
// function calc4(action, a, b) { // але це довга і складна конструкція
//     let result;
//     if (action === '+') {
//         if (typeof a === 'number' && typeof b === 'number') {
//             result = a + b;
//          } else {
//             result = 0;
//         }
//     } else if (action === '-') {
//         if (typeof a === 'number' && typeof b === 'number') {
//             result = a - b;
//         }
//     }
//     return result;
// }
//
// let calcRes = calc4('+', 'world', 20);
// console.log(calcRes)

// function numberCheker(a, b) { // це скорочена версія в порівнянні з попередньою
//     if (typeof a === 'number' && typeof b === 'number') { // можна ще скоротити код
//         return true;
//     } else {
//         return false;
//     }
// }
// function numberCheker(a, b) {
//     return typeof a === 'number' && typeof b === 'number'; //Alt+Shift+Enter - скорочує код,робить його чистішим
// }

// function calc4(action, a, b) {
//     let result;
//     if (action === '+' && numberCheker(a, b)) { //типу ембедед фанкшин,але не зовсім функція використовується в середені функції
//         result = a + b;
//     } else if (action === '-' && numberCheker(a, b)) {
//         result = a - b;
//     }
//     return result;
// }
//
// let calculatorRes = calc4('+', 10, 10);
// console.log(calculatorRes);

//Також цікава штука, неважливо де ми оголошуємо функцію, вона всеодно буде працювати
//Браузер робить таку дію,яка називається hosting/сплеття, тобто функція деб не знаходилась, для інтерпретатора піднімається вгору