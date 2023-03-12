//Функції. Як функції працюють з примітивними і ссилочними типами даних. Записи функцій, як вираз
//Рекурсія. Колбеки

//Як функції працюють з примітивними і ссилочними типами даних.

// let asd = 0; //примітив
// function increment(num) {
//     num++;
// }
//
// increment(asd);
// console.log(asd); // буде 0, тому що примітив проходить через функцію і функція помирає) робиться тільки копія початкових даних

// let asd = {val:0}; // ссилочний тип даних
// function increment2 (obj){
//     obj.val++;
// }
// increment2(asd);
// console.log(asd); // буде 1, тому,що функція виконується
//
// //коли працюємо з ссилочними типами даних, не завжди потрібно робити return, тому що обєкт змінить свій стан сам

//Фанкшин експрешин/Функціональний вираз
//
// let foo = function () {
//     console.log('World');
// }
// foo();

//Різниця між стандартною функцією в тому,що у функціональному виразі важлива послідовнисть дій і не має хостінгу.
//Тому,якщо записати по-іншому функцію, вона не буде працювати
//
// foo();
// let foo = function () {
//     console.log('World');
// }

//Фанкшин Декларейшин - це стандартний запис функції.
//
// function calc(){
//     document.write('sfsefs')
// }
// calc();

//Стрілочний запис функції
// let foo = () => console.log('work');
//
// //Якщо декілька дій
//
// let foo = () => {
//     console.log('sdfesf');
//     console.log('fsef');
// }
//
// let calc = (a, b) => {
//     return a + b;
// }
// let calcRes = calc(10, 20);
// console.log(calcRes);

//Можна записати скорочено - чистий код
//
// let calc1 = (a, b) => a + b;
// console.log(calc1(10, 10));

// Self Involve function - функція,що сама себе викликає
//
// (function (asd){
//     console.log(asd)
// }('hello'))

//Рекурсія - функція викликає сама себе
// function rec(i,limit) {
//     i++;
//     console.log(i);
//     if (i > limit) {
//         return;
//     }
//     rec(i,limit);
// }
//
// rec(0,50);

//Колл бек функції - перевага в тому що можна будь які завдання для функції, на основі колбеків працюють всі івенти
//
// function calculator(action, a, b) { //замість аргументу створюється функція, в даному випадку action
//     return action(a, b);
// }
//
// console.log(calculator(function (a, b) {
//     return a + b // усі завдання з функцією встановлюються при виведенні
// }, 10, 20));
//Колбеки - робота з масивами приклад:
// let filter = users.filter(function (user){
//     return user.age>30
// });
// console.log(filter); // вишукана конструкція
//
// let filter =[];
// for (const user of users) {
//     if (user.age>30){
//         filter.push(user);
//     }
// }
// console.log(filter) //простий запис - означає те саме

//Стрілочна форма запису
calculator((a, b) => a + b, 10, 20);
calculator()
