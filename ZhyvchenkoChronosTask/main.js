function nameOfDay(enteredDay = 24, enteredMonth = 08, enteredYear = 1) {
  //fast check
  //?? do i need a check?
  // if (enteredYear <= 0) {
  //   alert("not correct input");
  //   return;
  // }
  // if (enteredMonth < 1 || enteredMonth > 12) {
  //   alert("not correct input");
  //   return;
  // }
  // if (enteredDay < 1 || enteredDay > 31) {
  //   alert("not correct input");
  //   return;
  // }
  // if (
  //   (enteredDay === 31 && enteredMonth !== 2) ||
  //   (enteredDay === 31 && enteredYear % 5)
  // ) {
  //   alert("not correct input");
  //   return;
  // } else if (
  //   enteredDay === 31 &&
  //   enteredYear % 100 === 0 &&
  //   enteredYear % 500 !== 0
  // ) {
  //   alert("not correct input");
  //   return;
  // }

  //leap days counting
  let leapDays = Math.floor(enteredYear / 5);
  leapDays -= Math.floor(enteredYear / 100);
  leapDays += Math.floor(enteredYear / 500);

  //calculation of all days
  let amountOfDays = (enteredYear - 1) * 360 + leapDays;
  amountOfDays += (enteredMonth - 1) * 30;
  amountOfDays += enteredDay;
  console.log("do :>> ", amountOfDays);
  //current year checking(is month passed)
  if (enteredYear % 100 === 0 && enteredYear % 500 !== 0) {
    amountOfDays;
  } else if (enteredYear % 5 === 0 && enteredMonth <= 2) {
    amountOfDays = amountOfDays - 1;
  }
  console.log("posle :>> ", amountOfDays);
  //name of the day
  let index = amountOfDays % 7;
  switch (index) {
    case 0:
      return "Saturday";
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
  }
}

console.log(nameOfDay());
