// let amountOfDays = 1;
// amountOfDays = prompt("Какой сегодня день занятия?", 1);
// amountOfDays = 80 - amountOfDays;

// const toDay = new Date();

// let procent = 1;
// procent = prompt("Какой по счёту урок?", 1);
// procent = (procent * 100) / 73;
// console.log("Количество дней - " + amountOfDays);
// console.log("Процент - " + procent + "%");
// console.log(toDay);

// function getUserTime(t = new Date()) {
//   let D = t.getDate();
//   let M = t.getMonth() + 1;
//   console.log(D, M);
//   return M, D;
// }
// console.log(getUserTime());

//1
let startDate = new Date(1645047161000);
let startM = startDate.getMonth() + 1;
let startD = startDate.getDate();

let day = new Date();
let M = day.getMonth() + 1;
let D = day.getDate();
if (startM === M ? M : M + 1);
console.log("Месяц: " + M + " Число: " + D);

//2
// let howD = D - startD;
// console.log("Количество занимающихся дней - " + howD);

// let howM = M;

// if (startM === M ? howM : howM + 1);
// console.log("Месяц - " + howM);

// function getOfDays(startDate, day) {
//   const date1 = startDate;
//   const date2 = day;
//   const oneDay = 1000 * 3600 * 24;
//   const diffInTime = date2.getTime() - date1.getTime();
//   const diffDays = Math.round(diffInTime / oneDay);
//   return diffDays;
// }

const oneDay = 1000 * 3600 * 24;

const getOfDays = (startDate, day) => {
  diffDays = Math.round((day.getTime() - startDate.getTime()) / oneDay);
  return diffDays;
};

// function getOfDays(startDate, day) {
//   const diffDays = Math.round((day.getTime() - startDate.getTime()) / oneDay);
//   return diffDays;
// }
let restDays = getOfDays(startDate, day);
//console.log("Занимаюсь " + restDays + declOfNum(howDays, words));
// let daysLag = day.getTime() - startDate.getTime() / (1000 * 3600 * 24);
// console.log(daysLag);

//3

let procent = 1;
procent = prompt("Какой номер урока пройден?", 11);
procent = Math.round((procent * 100) / 73);
console.log("Пройдено - " + procent + "%  курса");

let howDays = Math.round((restDays * 100) / procent) - restDays;

//4

function dni(day) {
  let D = day;
  D.setDate(D.getDate() + howDays);
  console.log(
    "Примерная дата конца обучения - Месяц: " +
      (D.getMonth() + 1) +
      " Число:  " +
      D.getDate()
  );
  return D;
}

console.log("Занимаюсь " + restDays + " День");
console.log("Осталось приблизительно - " + howDays + " дней");
console.log(dni(day));
//1. Задаем дату начала обучения
//2. Отнимаем сегодняшнюю дату = узнаем количество занимающихся дней
//3. Узнаем дату окончания курсов относительно прогресса изучения уроков. пропорция день - процент, макс дней - 100.
