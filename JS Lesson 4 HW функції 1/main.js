// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function Pl(a, b) {
//     return a * b;
// }
// console.log(Pl(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function Pl2 (p,r){
//     return p * r * r;
// }
// console.log(Pl2(3.14,2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function Pl3(p, h, r) {
//     return 2 * p * r * h;
// }
// console.log(Pl3(3.14, 2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let arr = [1,2,3,4]; //варіант 2
// function data(array) {
//     for (const item of array) {
//         console.log(item);
//     }
// }
// // console.log([1, 2, 3, 4]); // варіант 1
// console.log(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function par(text){
//     document.write(`<p>${text}</p>`)
// }
// par('Freedom');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function f(text){
//     document.write(`<ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
// f('FREEDOM');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function f2(text, num) {
//     for (let i = 0; i < num; i++) {
//         document.write(`<ul>
// <li>${text}</li>
// </ul>`)
//     }
// }
//
// f2('Freedom', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array = [1,2,'Freedom',true];
// function f(array) {
//     document.write(`<ul>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// f(array);

// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// let users = [
//     {
//         id: 1,
//         name: 'Julia',
//         age: 32,
//     },
//     {
//         id: 2,
//         name: 'Nikolas',
//         age: 33,
//     }
// ];
// function f(users) {
//
//     document.write(`<ul>`);
//     for (const user of users) {
//         document.write(`<ul>
// <li>${user.id} ${user.name} ${user.age}</li>
// </ul>`)
//     }
//     document.write(`</ul>`);
// }
//
// f(users);

// - створити функцію яка повертає найменьше число з масиву

let arr = [1, 4, 5, 7, -2];

function task(array) {
    let min = array[0];
    for (const item of array) {
        if (item < min) {
            min = item
       }
    }
return min;
}

console.log(task(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let arr = [1,2,10];
// function f(array) {
//     for (const item of array) {
//         sum += item;
//     }
//
//     }
// f(arr);

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13









