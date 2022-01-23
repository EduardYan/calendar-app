/**
 * Some utils functions for use
 */

/**
 
 * @param {string} message The message for show in a alert
 */
function showAlert(message) {
  alert(message);
}

/*
 * @return The new list of html elements, selecting for day and null classes
 * */
function getDaysList() {
  const daysList = []; // list for save the days

  const normalDays = document.querySelectorAll(".day");
  const nullDays = document.querySelectorAll(".null");

  // adding each element
  for (let i = 0; i < normalDays.length; i++) {
    daysList.push(normalDays[i]);
  }

  // adding each element
  for (let i = 0; i < nullDays.length; i++) {
    daysList.push(nullDays[i]);
  }

  return daysList;
}

/*
 * @return The new list of html elements, selecting for weekday class
 * */
function getWeekDays() {
  const newWeekDaysList = []; // list for save the days

  const weekDaysList = document.querySelectorAll(".weekday");

  // adding each element
  for (let i = 0; i < weekDaysList.length; i++) {
    newWeekDaysList.push(weekDaysList[i]);
  }

  return newWeekDaysList;
}

// return a list with the threes buttons
const selectButtons = () => {
  
  // getting
  const back = document.getElementById("back");
  const follow = document.getElementById("follow");

  // list for save
  const listButtons = [
    back,
    follow
  ];


  return listButtons;

}


function validateMonth() {

  const buttonsList = selectButtons();

  const monthCurrent = document.querySelector(".month").innerText;
  
  // validating for set a link
  if (monthCurrent == "January") {
    // chagin the url for each link
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/12")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/2")

  } else if (monthCurrent == "February") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/1")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/3")

  } else if (monthCurrent == "March") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/2")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/4")

  } else if (monthCurrent == "April") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/3")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/5")

  } else if (monthCurrent == "May") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/4")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/6")

  } else if (monthCurrent == "June") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/5")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/7")

  } else if (monthCurrent == "July") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/6")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/8")

  } else if (monthCurrent == "August") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/7")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/9")

  } else if (monthCurrent == "September") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/8")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/10")

  } else if (monthCurrent == "October") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/9")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/11")

  } else if (monthCurrent == "November") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/10")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/12")

  } else if (monthCurrent == "December") {
    const buttonBack = buttonsList[0];
    buttonBack.setAttribute("href", "/month/11")
    const buttonFollow = buttonsList[1];
    buttonFollow.setAttribute("href", "/month/1")

  } else {
    console.log('The month not is valid')
  }

}

/*
 * Create the a elements in form of buttons
 * */
function generateButtons() {


  // classes for set
  const styleClasses = "btn btn-success"
  const styleClassesMain = "btn btn-primary"

  // getting the view for show
  const view = document.querySelector(".buttons-view");

  const buttonMain = document.createElement("a");
  buttonMain.innerText = "Main";
  buttonMain.setAttribute("href", "/");  // link
  buttonMain.className = styleClassesMain;

  const buttonBack = document.createElement("a");
  buttonBack.innerText = "Back";
  buttonBack.setAttribute("id", "back");
  buttonBack.className = styleClasses;

  const buttonFollow = document.createElement("a");
  buttonFollow.innerText = "Follow";
  buttonFollow.setAttribute("id", "follow");
  buttonFollow.className = styleClasses;

  // adding the elements
  view.append(buttonMain, buttonBack, buttonFollow);

  validateMonth(); // validating for change

}


// export only some functions for use in app.js
export {
  showAlert,
  getDaysList,
  getWeekDays,
  generateButtons
};
