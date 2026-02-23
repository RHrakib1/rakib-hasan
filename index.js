function sum(number1, number2) {
    const mainValue = number1 + number2;
    console.log("The Data is a :", number1, number2, mainValue)
}
// sum(10, 50);

function multipal(num1, num2, num3) {
    mostnumber = num1 * num2 * num3;
    console.log(mostnumber);
}
// multipal(2, 8, 6)

const value21 = (ab, bc) => (ab + bc)


console.log(value21(10, 20));



const names = ['rakib', 'hasan', 'tarin', 'torabi', 'rahman'];
console.log(...names);
console.log(names);

const baynumber = [2555555, 10, 3, 85, 111, 5520, 787840, 1000122, 50]

const bytotal = Math.max(...baynumber);
console.log(bytotal);


const first = [1, 2, 4, 5, 7]
const second = first;
second.push(10);
console.log('the first number is a :', first);
console.log('the second number is a :', second);


const pothom = [1, 2, 3, 4, 5, 6, 7];
const ses = [...pothom];
ses.push(100);
console.log('ses number aita :', ses);
console.log('pothom number aita :', pothom);

const rakibfun = (a, c, v, z) => a + c + v + z;
const digit = [10, 5, 78, 62];
console.log(rakibfun(...digit))

const sonkha = [45, 89, 24, 38, 16, 10]

const totalValue = sonkha.map(number => number - 2)
console.log('map value is a :', totalValue);