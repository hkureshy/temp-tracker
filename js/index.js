const temp = new TempTracker();

const temprature = document.getElementById("value");
const highest = document.getElementById("highest");
const lowest = document.getElementById("lowest");
const average = document.getElementById("average");

highest.innerHTML = temp.highest;
lowest.innerHTML = temp.lowest;
average.innerHTML = temp.average;

function handleClick() {
  const value = temprature.value;

  if (value !== "") {
    temp.tempratures = parseInt(value);

    highest.innerHTML = temp.highest;
    lowest.innerHTML = temp.lowest;
    average.innerHTML = temp.average;
    temprature.value = '';
  }
}
