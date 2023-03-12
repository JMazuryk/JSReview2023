// // - Є змінна х, якій ви надаєте довільне числове значення.
// //   Якщо змінна x дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
// let x = +prompt('type a number'); // + для того, щоб привести стрінгу до числа
// if ( x === 0 ){
//     console.log('Virno');
// } else {
//     console.log('Ne virno');
// }

// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = +prompt('What time is it?');
// if (time >=0 && time <= 15) {
//     console.log('first quarter');
// } else if (time >=15 && time <=30){
//     console.log('second quarter');
// } else if (time >= 31 && time <= 60) {
//     console.log('third quarter');
// }

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
// switch (+prompt('What day is it?')){
//     case 1:
//         console.log('fffdfdfdf');
//         break;
//     case 2:
//         console.log('yyyyyyyyy');
//         break;
//     case 3:
//         console.log('oooooo');
//     case 4:
//         console.log('pppppppp');
//         break;
//     case 5:
//         console.log('llllll');
//         break;
//     case 6:
//         console.log('eeeeeeeee');
//         break;
//     case 7:
//         console.log('qqqqq');
//         break;
//     default:
//         console.log('???')
// }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
// //     Також потрібно врахувати коли введені рівні числа.

// let x = 0;
// let y = 0;
// if (x > y) {
//     console.log('x');
// } else if (x < y) {
//     console.log('y');
// } else if (x === y){
//     console.log('equel');
// }