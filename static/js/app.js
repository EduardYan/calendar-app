/*
 Script for show messages
*/


import {showAlert, getDaysList, getWeekDays, generateButtons} from "./utils.js";
import messages from "./data.js";

// in case a error to generate the buttons
try {
  // genearting the buttons
  generateButtons();
} catch (TypeError) {
  console.log()
}


// getting each day
const daysList = getDaysList();
const weekDaysList = getWeekDays();


// for each in alls the days
weekDaysList.forEach((weekDay) => {
  weekDay.addEventListener("click", () => {
    showAlert(`${weekDay.innerText}${messages.concatenationWeekDay}`);
  });
});


daysList.forEach((day) => {
  day.addEventListener("click", () => {
    // validating if the value is null
    if (day.innerText == "") {
      showAlert(messages.nullMessage);
    } else {
      showAlert(`${messages.concatenationDay}${day.innerText}`);
    }
  });
});


// for the learn button
const learnMoreButton = document.querySelector(".info button");

learnMoreButton.addEventListener("click", () => {
  const monthCurrent = document.querySelector(".month").innerText;
  showAlert(`This is the calendar of ${monthCurrent}`);

});
