const btn = document.querySelector("#btn");
const table = document.querySelector(".table");
const rob = document.querySelector("#rob");
const tabr = document.querySelector(".tabr");

console.log(table);

let p = 0;

let m = 50;

let k = 0;

let l = 2;

let v = 2;

console.log(btn);

btn.addEventListener("click", function () {
  p += 1;
  table.innerHTML = "Your clicks: " + p + " cl";
});

rob.addEventListener("click", function () {
  if (p >= m) {
    k += v;
    p -= m;
    m += 50;

    rob.innerHTML = "Buy the robot " + v + " cl/sec" + " for " + m + " cl";
    tabr.innerHTML = "Robot: " + k + " b/sec";
    table.innerHTML = "Your clicks: " + p + " cl";
  }
});

function robotcl() {
  p += k;
  // m += 17
  console.log("55");
  //rob.innerHTML = 'Buy the robot ' + k + ' cl/sec' + ' for ' + m + ' cl'
  table.innerHTML = "Your clicks: " + p + " cl";
  tabr.innerHTML = "Robot: " + k + " b/sec";
}
setInterval(robotcl, 1000);
