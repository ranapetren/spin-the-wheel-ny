let wheel = document.querySelector(".wheel");

let spinBtn = document.querySelector(".spinBtn");

let value = Math.ceil(Math.random() * 3600);

function spin() {
  wheel.style.transform = "rotate(" + value + "deg)";
  value += Math.ceil(Math.random() * 3600);
}

spinBtn.onclick = function () {
  spin();
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    spin();
  }
});
