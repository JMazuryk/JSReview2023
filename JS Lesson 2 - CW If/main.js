// Логічний вираз - IF
// let a = prompt('How old are you?');
// let b = 'male';
// if (a >= 32){
//     document.write('You can move ahead');
//     if (b === 'female') {
//         document.write('<img src="https://cdn.britannica.com/35/157835-050-0CD3A8A5/Jennifer-Lopez-2010.jpg" alt="">');
//     } else if ( b === 'male') {
//         document.write('<img src ="https://faroutmagazine.co.uk/static/uploads/2022/12/Ben-Affleck-names-the-biggest-22regret22-of-his-career.jpg" alt="">')
//     } else {
//         document.write('hlkhkhj')
//     }
//
// } else {
//     document.write("You can't move ahead");
// }
//
// Cntrl + Alt + L - рівняє коде
// && - логічний енд, і
// || - логічний оператор or, або
//
// let a = prompt('How old are you?');
// let b = 'female';
//
// if ( a >=32 && b === "male") {
//     document.write('<img src ="https://faroutmagazine.co.uk/static/uploads/2022/12/Ben-Affleck-names-the-biggest-22regret22-of-his-career.jpg" alt="">');
// } else if (a >=32 && b === "female"){
//     document.write('<img src="https://cdn.britannica.com/35/157835-050-0CD3A8A5/Jennifer-Lopez-2010.jpg" alt="">');
// }
//
// // true && false дасть false +-=-
// // true || false дасть true
// // true || false && false дасть false
// // true || (false && false) дасть true

// Логічний вираз - Switch - використовується у фільтрації на сайті
//
// let value = 'wefwf';
// switch (value){
//     case 'a':
//         console.log('case 1');
//         break;
//     case 'b':
//         console.log('case 2');
//         break;
//     case 'c':
//         console.log('case 3');
//         break;
//     default:
//         console.log('else');
// }

//Швидке приведення даних - використовується з роботою локалсторедж
//
// let xxx = null;
// if (xxx) {              // xxx - не потрібно ставити !!, воно відразу приводить до булового значення
//     console.log('true');
// } else {
//     console.log('false');
// }
//
// let xxx = '';
// if (!xxx) {
//   xxx = '100500';
// }
// console.log(xxx);
//
// let xxx = '' || '10500'; // ліва сторона кастується до false і тоді береться друга частина як дефолтна
// console.log(xxx);
//
// let xxx = 'sff' || '10500'; // ліва сторона кастується до true, тру і фалсе, тоді тру
// console.log(xxx);

//Тернарний оператор
//
// let xxx = !!'' ? 1 : 2; // треба читати як речення,якщо ліва частина true, то буде один, в іншому випадку два
// console.log(xxx);