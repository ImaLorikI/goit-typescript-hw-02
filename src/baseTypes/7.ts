/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum weekDays {
  Monday = 1,
  Tuesday=2,
  Wednesday=3,
  Thursday=4,
  Friday=5,
  Saturday=6,
  Sunda=7
}

function isWeekend(status: weekDays) {
  if (status === weekDays.Saturday || status === weekDays.Sunda) {
    return true;
  } else {
    return false;
  }
}


export {};
