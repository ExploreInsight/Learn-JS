function updateClock() {
  let currentDate = new Date();

  //extract the time params
  let currentHour = currentDate.getHours();
  let currentMin = currentDate.getMinutes().toString().padStart(2, 0);
  let currentSec = currentDate.getSeconds().toString().padStart(2, 0);

  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  // Arrays for day names and month names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let weekDay = daysOfWeek[currentDate.getDay()];
  let monthName = monthsOfYear[currentMonth];

  // 12 hour format with am and pm
  let rep = currentHour >= 12 ? "PM" : "AM";

  let newHour = currentHour % 12 || 12;

  currentHour = newHour.toString().padStart(2, 0);

  document.getElementById(
    "clock"
  ).textContent = `${currentHour}:${currentMin}:${currentSec} ${rep}`;
  
  document.getElementById(
    "date"
  ).textContent = `${weekDay}, ${currentDay} ${monthName} ${currentYear}`;
}

// setInteral for continues update
setInterval(updateClock, 1000);
//Invoking for immediate display

updateClock();
