// -------------------- Current Date --------------------

const currentDate = new Date();

console.log(currentDate.toDateString());
console.log(currentDate.toString());
console.log(currentDate.toISOString());

console.log(currentDate.getDate());
console.log(currentDate.getDay());
// Sun,Mon,Tue,Wed,Thu,Fri,Sat
// 0,1,2,3,4,5,6

console.log(currentDate.getMonth());
// Jan/Feb/Mar...
// 0 based index

console.log(currentDate.getFullYear());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getMinutes());
console.log(currentDate.getTime());

const currentTimestamp = Date.now();
console.log(currentTimestamp);

// -------------------- Another Date Instance --------------------

const tarikDate = new Date();

console.log(tarikDate);
console.log(tarikDate.toString());
console.log(tarikDate.toDateString());
console.log(tarikDate.toISOString());
console.log(tarikDate.toLocaleDateString());
console.log(tarikDate.toLocaleString());
console.log(tarikDate.getDate());
console.log(tarikDate.getDay());
console.log(tarikDate.getFullYear());
console.log(tarikDate.getHours());
console.log(tarikDate.getMilliseconds());
console.log(tarikDate.getMinutes());
console.log(tarikDate.getMonth());
console.log(tarikDate.getSeconds());
console.log(tarikDate.getTime());
console.log(tarikDate.getTimezoneOffset());

// string er format a index 1 kintu date er khetre 0
// Number: 0 based start hobe
// string: 1 based start hobe

// -------------------- Custom Date from String --------------------

const customDate1 = new Date("2020-6-12");
console.log(customDate1);
console.log(customDate1.toDateString());

// year/month/date/hour/minutes/second/miliseconds

// -------------------- Custom Date using Numbers --------------------

const customDate2 = new Date(2024, 4, 28);
console.log(customDate2.toString());

// -------------------- Set Date Methods --------------------

const modifiedDate = new Date();
modifiedDate.setDate(20);
modifiedDate.setFullYear(2021);
modifiedDate.setMonth(3);
console.log(modifiedDate.toString());

// -------------------- More Date Examples --------------------

const birthDate = new Date("2003-6-07");
console.log(birthDate);
console.log(birthDate.toString());
console.log(birthDate.toDateString());
console.log(birthDate.toISOString());
console.log(birthDate.getMinutes());
console.log(birthDate.getMonth());

const timestampDate = new Date(1609459200000);
console.log(timestampDate.toDateString());

const futureDate = new Date(2025, 7, 16, 14, 2, 60);
console.log(futureDate.toDateString());
console.log(futureDate.toString());

// -------------------- Date Calculation --------------------

const todayDate = new Date();
const targetDate = new Date("2025-12-21");

console.log(targetDate - todayDate);
// difference between date is millisecond


// -------------------- Countdown Timer --------------------

const countdownStart = new Date();
const countdownEnd = new Date("2028-07-14T00:00:00");

const timeDifference = countdownEnd - countdownStart;

const totalDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
const totalHours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
const totalMinutes = Math.floor((timeDifference / (1000 * 60)) % 60);
const totalSeconds = Math.floor((timeDifference / 1000) % 60);

console.log(
  `Olympics CountDownTime: Days:${totalDays} Hour:${totalHours} Minutes:${totalMinutes} Second:${totalSeconds}`
);
