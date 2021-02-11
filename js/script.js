console.log('Задание №1');
console.log('\n');

let a = prompt('Введите число');
let b = prompt('Введите число');
let c = prompt('Введите число');
function calculating(a, b, c){
    console.log((a - b) / c);
}
calculating(a, b, c);
console.log('\n');


console.log('Задание №2');
console.log('\n');

let num = prompt('Введите число');
function cube(num) {
	return num * num * num;
}
let result = cube(num);
console.log(result);

function squad(num) {
	return num * num;
}
result = squad(num);
console.log(result);
console.log('\n');


console.log('Задание №3');
console.log('\n');

a = prompt('Введите число');
b = prompt('Введите число');
function min(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
    
}
result = min(a, b);
console.log(result);

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    
}
result = max(a, b);
console.log(result);


console.log('Задание №4');
console.log('\n');

let num1 = prompt('Введите первую цифру из диапазона чисел');
    num2 = prompt('Введите вторую цифру из диапазона чисел');
function createArr(num1, num2) {
    let arr = [];
    for(i = num1; i <= num2; i++){
        arr.push(i);
    }
    return arr;
}
result = createArr(num1, num2);
console.log(result);
console.log('\n');


console.log('Задание №5');
console.log('\n');

a = prompt('Введите число для проверки на чётность');
function isEven(a) {
    if(a % 1 != 0 || (a == "" && a != 0)) alert(`${a} - не целое число`);
    return (a % 2 === 0);
    
}
console.log(isEven(a));
console.log('\n');

console.log('Задание №6');
console.log('\n');

arr = [4, 43, 67, -2, -32, 43, -43, 54, 0, -54, 4, 20];
function Even(arr) {
    let arrEven = [];
    for(i = 0; i < arr.lenght; i++);
        if(isEven(arr[i]))
            arrEven.push(arr[i]);
    return arrEven;
}
console.log(Even(arr));
console.log('\n');


console.log('Задание №7');
console.log('\n');
let symbol = prompt('символ');
function hefren(n){
  for(let i = 1; i <= n; i++){
    let m = '';
    for(let j = 0; j < i; j++){
      m+= symbol == undefined || symbol.length-1 || symbol == ' ' ? i : symbol;
    };
    console.log(m+'\n')
  }
}
hefren(prompt('число'))
console.log('\n');


console.log('Задание №8');
console.log('\n');
function writeTriangle(rows, isReverse) {
    const indexes = new Array(rows).fill(0).map((_, i) => i);
    if (isReverse) indexes.reverse();
    for (let i of indexes) {
        const spaces = ' '.repeat(rows - 1 - i);
        console.log(spaces + '*'.repeat(1 + i*2) + spaces);
    }
} 
const n = +prompt('Введите число строк:');
writeTriangle(n);
if (confirm('Вывести перевёрнутый?')) writeTriangle(n, true);
console.log('\n');


console.log('Задание №9');
console.log('\n');
function getFibArray(N){
    const arr = [];
    for (let i = 0; i< N; i++) {
        if (i === 0 || i === 1) arr[i] = 1;
        else arr[i] = arr[i-1] + arr[i-2]
    }
    return arr;
}
console.log(getFibArray(1000));
console.log('\n');


console.log('Задание №10');
console.log('\n');
t = prompt('Введите число');
function sumDigits(t) {
     let sum = String(t).split('').reduce((r, v) => (r += +v), 0);
     console.log(sum);
     if (sum > 9)
      sum = sumDigits(sum);
     return sum;
    }
console.log(sumDigits(t));
console.log('\n');


console.log('Задание №11');
console.log('\n');
arr = [5, 667, 54, 6, 3, -9, 56, 32];
function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
console.log(func(arr));
console.log('\n');


console.log('Задание №12');
console.log('\n');
function topBottomRamka(length){
    var ramka = "";
    for (var i=0; i<length; i++){
        ramka += "*";
    }
    console.log(ramka);
}

var stroki = [];
stroki.push("Домашняя работа \"Функции\"");

var groupN = prompt("Введите номер группы");
stroki.push("Выполнил студент гр." + groupN);

var familia = prompt("Введите фамилию");
var imya = prompt("Введите имя");
var otchestvo = prompt("Введите отчество");
var fio = familia + ' ' + imya + ' ' + otchestvo;
stroki.push(fio);

var dlinaRamki = 0;
for (var i=0; i<stroki.length;i++){
    if (dlinaRamki < stroki[i].length){
        dlinaRamki = stroki[i].length;
    }
}

dlinaRamki += 2;

topBottomRamka(dlinaRamki);
for (var i=0; i<stroki.length; i++){
    var resultString = "*";
    for (var j=0; j<dlinaRamki;j++){
        if (stroki[i][j] === undefined){
            if (j === dlinaRamki-2){
                resultString += '*';
            }
            else{
                resultString += ' ';
            }
        }
        else{
            resultString += stroki[i][j];
        }
    }
    console.log(resultString);
}
topBottomRamka(dlinaRamki);