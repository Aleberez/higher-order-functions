// @ts-check

import half from './src/half.js';

export default half;

// first task

const firstTaskArr = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

function showEveryPerson(arr) {
  return arr.forEach((person) => {
    console.log(`Привет, ${person}`);
  });
}

showEveryPerson(firstTaskArr);

// second task

const secondTaskArr = [1, 2, 3, 4, 5];

function multiplyBy10(arr) {
  return arr.map((number) => number * 10);
}

console.log(multiplyBy10(secondTaskArr));

// third task

const thirdTaskArr = [5, 12, 8, 130, 44];

function showNumbersMoreThen10(arr) {
  return arr.filter((number) => number > 10);
}

console.log(showNumbersMoreThen10(thirdTaskArr));

// fourthTaskArr

const fourthTaskArrOfObj = [{ name: 'Иван', age: 23 }, { name: 'Мария', age: 18 }, { name: 'Алексей', age: 32 }, { name: 'Ольга', age: 24 }, { name: 'Сергей', age: 17 }, { name: 'Анна', age: 21 }];

function countMoreThen18YearsOld(arrWithObj) {
  return arrWithObj
    .filter((personObj) => personObj.age > 18)
    .map((personObj) => `${personObj.name} (${personObj.age} лет)`);
}

console.log(countMoreThen18YearsOld(fourthTaskArrOfObj));

// fifth task

const fifthTaskArrOfObj = [{ product: 'Телефон', price: 50000, quantity: 1 }, { product: 'Чехол', price: 1500, quantity: 2 }, { product: 'Зарядное устройство', price: 2500, quantity: 1 }];

function countTotalCostOfGoods(arrWithObj) {
  const totalPrice = arrWithObj.reduce(
    (acc, salesObj) => acc + salesObj.price,
    0,
  );
  return `Общая стоимость продаж: ${totalPrice}`;
}

console.log(countTotalCostOfGoods(fifthTaskArrOfObj));
