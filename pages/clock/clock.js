/**
 * Date.getSeconds() and its other functions
 * return a number like "3" for 3 seconds, or "30" for 30 seconds.
 * Most digital clocks look like "12:09:03" instead of "12:9:3"
 * so we want to tack on the extra zero at the front.
 * @param {number} hourOrMinuteOrSecond A number for the current hour, minute, second.
 * @returns {string} of the fixed time
 */
const addExtraZero = (hourOrMinuteOrSecond) => {
  const value = hourOrMinuteOrSecond.toString();
  if (value.length === 1) {
    return "0" + value;
  }
  return value;
};

/**
 * Convert the Date.getHours() from 24-hour to 12-hour format
 * as we want to display AM/PM at the end of the clock.
 * @param {number} hour The current hour in 24-hour format
 * @returns {number} the hour in 12-hour format
 */
const convertTo12HourFormat = (hour) => {
  if (hour >= 12) {
    return hour - 12;
  } else {
    return hour;
  }
};

/**
 * Use the 24-hour time to figure out if we're in AM or PM.
 * @param {number} hour The current hour in 24-hour format
 * @returns {string} AM or PM
 */
const getTimePeriod = (hour) => {
  if (hour >= 12) {
    return "PM";
  } else {
    return "AM";
  }
};

/**
 * A function to update the HTML to display the current time.
 * @returns {void} No return value.
 */
const runClock = () => {
  // Run this code block at every 1000 millisecond interval
  // https://www.w3schools.com/jsref/met_win_setinterval.asp
  setInterval(() => {
    // Get the current date/time from the JavaScript "Date" object
    const currentDate = new Date();
    // Get the current hour and convert it to 12-hour format,
    // then add the extra zero,
    // then store it in the currentHours variable
    const currentHours = addExtraZero(
      convertTo12HourFormat(currentDate.getHours())
    );
    const currentMinutes = addExtraZero(currentDate.getMinutes());
    const currentSeconds = addExtraZero(currentDate.getSeconds());
    const currentPeriod = getTimePeriod(currentDate.getHours());

    // An example for logging out some data to the browser console.
    // Useful for debugging so we know everything we've done so far is right.
    console.log("Logging variables ...", {
      currentHours,
      currentMinutes,
      currentSeconds,
      currentPeriod,
    });

    // Change the hour, minute and second elements' text to display the variables.
    containerEl = document.querySelector("#hour");
    containerEl.innerText = currentHours;

    containerEl = document.querySelector("#minute");
    containerEl.innerText = currentMinutes;

    containerEl = document.querySelector("#second");
    containerEl.innerText = currentSeconds;

    containerEl = document.querySelector("#period");
    containerEl.innerText = currentPeriod;
  }, 1000);
};

// The above function declarations won't run on their own unless called, so call it!
runClock();
