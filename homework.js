
// Чему равно а, почему?

let a = 0 || 'string';    /*'string'*/
let b = 1 && 'string';   /*'string'*/
let c = null || 25;          /*25*/
let d = null && 25;         /* null*/
let e = null || 0 || 35;     /*35*/
let f = null && 0 && 35;     /*null*/

// Что отобразится в консоли. Почему?

12 + 14 + '12';  /*2612 Первые два операнда - цифры, третий в строке*/
3 + 2 - '1';        /*4*/ 
'3' + 2 - 1;        /*31 Два последних операнда цифры,первый - строка*/
true + 2;            /*3 true = 1*/
+'10' + 1;           /*11*/
undefined + 2;       /*NaN*/
null + 5;            /*5*/
true + undefined;   /*NaN*/



// 1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
var myVariable = 'hidden'
myVariable == 'hidden' ? myVariable = 'visible' : myVariable = 'hidden';
console, log(myVariable);

// 2. Используя if, записать условие:
//  если переменная равна нулю, присвоить ей 1;
// если меньше нуля - строку “less then zero”;
// если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let = zerro
if (zerro == 0) {
    zerro = 1;
} else (zerro > 0) {
    zerro > "less then zero";
}else if (zerro < 0) {
    zerro *= 10;

}

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair'
//  и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: true
};

let car = {
    if(age <5) {
        console.log(NeedRepair);
        } else{
        console.log(needRepair);
    } if else{
        console.log(needRepair: true)
    }

    /* 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
    Написать условие если у item есть поле discount и там есть значение то в объекте item создать
    поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, 
    обратите внимание  что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. 
    иначе если поля discount нет то вывести просто поле price в консоль.*/

    let item = {
        name: 'Intel core i7',
        price: '100$',
        discount: '15%'
    };
    if(item = discount) {
        console.log(discount = priceWithDiscount: price - discount);
    } else(discount = null) {
        console.log(price)
    };

    // 5. Дан следующий код:

    let product {
        name: “Яблоко”,
        price: “10$”
    };

let min = 10; 
let max = 20; 
product.price = parseFloat(product.price);

if (product.price >= min && product.price <= max) {
    console.log(product.name);
} else {
    console.log('товаров не найдено');
}

/* Написать условие если цена товара больше или равна минимальной цене и
 меньше или равна максимальной цене
 то вывести в консоль название этого товара, 
 иначе вывести в консоль что товаров не найдено.*/


//  1.Записать в виде switch case следующее условие:
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
//     console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
// Записать условие, используя конструктор switch. 
// В консоли должно отразиться только одно значение.
switch ("block") {
    case "1":
        console.log("block")
} else if (a === ‘none’) {
    console.log(‘none’)
} else if (a === ‘inline’) {
    console.log(‘inline’)
} else {
    console.log(‘other’)
}
/* Записать условие, используя конструктор switch.
В консоли должно отразиться только одно значение.
Из задач по условному оператору if else выполнить задачи
1, 2 и 3 в виде тернарного оператора.*/
