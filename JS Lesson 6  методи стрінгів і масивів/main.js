Лекція 6 Методи стрінги та масисивів

6.1 Методи стрінги

let str = 'okten hello ';
console.log(str.length);
console.log(str[2]);
let concat = str.concat('!!!'); //добавляє до стрінги
console.log(concat);
console.log(str.toUpperCase());//до верхнього регістру
console.log(str.toLowerCase()); //до нижнього регістру
console.log(str.trim());//забирає всі лишні регістри
let email = 'asd@com';
console.log(email.endsWith('com'));//показує на що закінчується, типу тру або фолс
console.log(email.startsWith('asd'));//показує на що починається
console.log(email.charAt(2));//покаже назву індекса
console.log(email.indexOf('a'));//навпаки
console.log(str.replaceAll('o', '!'));//заміняє
console.log(str.trim().replaceAll('o', '!!')); //забирає лишні пробіли і заміняє
console.log(str.slice(1, 4));//нарізає з 1-го індекса по 4-тий не включно
console.log(str.split(' '));//нарізає на елементи масиву
console.log(str.substr(1, 2));//нарізає з 1 два індекси_

Методи масиву

let numbers = [11, 22, 33, 44, 55, 66, 77];

console.log(Array.isArray(numbers));//перевірка чи масив
let push = numbers.push("Hello");//добавляє в кінець масиву
console.log(numbers, push);
console.log(numbers, numbers.unshift("World"));//добавляє на початок
console.log(numbers.pop());//вирізає останній елемент масиву
console.log(numbers.shift());//вирізає перший елемент масиву
let concat = numbers.concat(['sdfsdf', 'sasf']);//зєднує два масиви
console.log(concat);
console.log(numbers.slice(1, 4));//вирізає з 1-го до 4-го не включно
console.log(numbers, numbers.splice(1, 2, 'afaf', 'afa'));//починає з 1-го індексу і вирізає 2 елемента, ш також можна відразу замінити вирізані елементи іншими

numbers.forEach(function (value) {
    console.log(value);
}) //колбек функція,яка виводить кожен елемент масиву

let filterArray = numbers.filter((item, index) => {
    if (item % 2 === 0) {
        return true;
    } else {
        return false
    }
});
console.log(filterArray);

let map = numbers.map(value => {
    return value*2
});
console.log(map);//перетворює одні дані в інші