// For testing purposes, the duration is set to only a few seconds
const durationOfWork = 5;
const durationOfBreak = 3;

// Set the initial values for these variables. These will be checked and updated by your code.
let isBreakTime = false;
let timer = durationOfWork;

/**
 * This function decrements the timer and lets us know when it's work or break time.
 * HINTS:
 * - https://www.w3schools.com/js/js_if_else.asp
 * - https://www.w3schools.com/js/js_comparisons.asp
 * - https://www.w3schools.com/js/js_arithmetic.asp
 * - https://www.w3schools.com/js/js_assignment.asp
 */
const runTimer = () => {
  // If the timer is greater or equal to 0
  // then set the timer to 1 second less
  //
  // If the timer is less than 0 and isBreakTime true
  // then set isBreakTime to false
  // and set the timer to durationOfWork
  //
  // If the timer is less than 0 and isBreakTime false
  // then setIsBreakTime to true
  // and set the timer to durationOfBreak
  //
};

/*
 * This function updates the HTML to display the timer
 * and displays either "Work time!" or "Break time!"
 * HINTS:
 * - https://www.w3schools.com/jsref/prop_html_innerhtml.asp
 * - https://www.w3schools.com/howto/howto_js_add_class.asp
 * - https://www.w3schools.com/howto/howto_js_remove_class.asp
 */
const updateHtml = () => {
  // Show the value of the timer in the "#second" HTML element
  // If currently isBreakTime
  // Add the ".hidden" CSS class to the "#work-time" element
  // and remove the ".hidden" CSS class from the "#break-time" element
  //
  // If currently NOT isBreakTime
  // Add the ".hidden" CSS class to the "#break-time" element
  // and remove the ".hidden" CSS class from the "#work-time" element
  //
};

/*
 * This function runs the Pomodoro timer and flips the sign to show
 * "Work time!" or "Break time!" depending on how many seconds have passed.
 */
const runPomodoro = () => {
  setInterval(() => {
    updateHtml();
    runTimer();
  }, 1000);
};

runPomodoro();
