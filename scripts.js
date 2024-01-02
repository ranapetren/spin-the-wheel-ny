let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 3600);

const tasks = [
  "Izabella: Gå en catwalk genom rummet",
  "David och Alex: Dansa tango tillsammans",
  "Alla: Drick 3 klunkar från ditt glas",
  "William: Ta en shot",
  "Ellen och demir: Visa hur ni skulle dansat på ert bröllop",
  "Sandra och Nils: Sjung en refräng från valfri låt",
  "Minja och Leone: Visa hur ni skulle överleva en zombieapokalyps med föremål på bordet.",
  "Hanna: Ta en shot",
  "Embla: Låt som en katt",
  "Alex: Visa ditt bästa dance move",
  "Emma: Välj en färg. Alla som har något med den färgen på sig måste dricka.",
  "Emilia och Rana: Svara på fråga från Hanna",
  "Marcel: Svara på fråga från Hanna",
];

const wheelItems = [
  {
    id: 1,
    name: "item1",
    img: "./assets/william.png",
    type: "task",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 2,
    name: "item2",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
  {
    id: 3,
    name: "item3",
    type: "task",
    img: "./assets/demir.png",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 4,
    name: "item4",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
  {
    id: 5,
    name: "item5",
    type: "task",
    img: "./assets/alex.png",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 6,
    name: "item6",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
  {
    id: 7,
    name: "item7",
    type: "task",
    img: "./assets/david.png",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 8,
    name: "item8",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
  {
    id: 9,
    name: "item9",
    type: "task",
    img: "./assets/nils.png",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 10,
    name: "item10",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
  {
    id: 11,
    name: "item11",
    type: "task",
    img: "./assets/marcel.png",
    color: "linear-gradient(#c7005c, #9198e5)",
  },
  {
    id: 12,
    name: "item12",
    type: "drink",
    color:
      "linear-gradient(to right top, #ff6f01, #f79725, #f0b84e, #ecd47b, #edecac)",
  },
];

for (let i = 0; i < wheelItems.length; i++) {
  const item = wheelItems[i];
  const div = document.createElement("div");
  div.classList.add("number");

  div.setAttribute("style", `--i:${i}; --clr:${item.color}`);

  if (item.img) {
    div.innerHTML = `<div id="task"><img src="${item.img}" /></div>`;
  } else {
    div.innerHTML = `<div id="fireball"></div>`;
  }

  wheel.appendChild(div);
}

function spin() {
  document.getElementById("result").style.visibility = "hidden";

  const numberOfItems = wheelItems.length;
  const degreesPerItem = 360 / numberOfItems; // 45 degrees for each item if there are 8 items

  // Randomly select an item
  const selectedItemIndex = Math.floor(Math.random() * numberOfItems);

  // Calculate the angle to rotate to the adjusted item
  // Adding an extra 45 degrees to ensure it lands correctly
  const targetPosition =
    ((numberOfItems - selectedItemIndex) % numberOfItems) * degreesPerItem + 45;

  // Adjust for the current position of the wheel
  const currentAngle = value % 360;
  let angleToRotate = targetPosition - currentAngle;

  // Normalize the angle
  if (angleToRotate < 0) {
    angleToRotate += 360;
  }

  // Add extra rotations for a dramatic effect
  const extraRotations = 360 * (3 + Math.floor(Math.random() * 5));
  const finalAngle = value + angleToRotate + extraRotations;

  // Update the wheel
  wheel.style.transform = "rotate(" + finalAngle + "deg)";
  value = finalAngle; // Update the current value

  if (wheelItems[selectedItemIndex].type === "task") {
    const chosenTask = tasks[Math.floor(Math.random() * tasks.length)];

    document.getElementById(
      "result"
    ).innerHTML = `<div><h1>${chosenTask}</h1></>`;

    setTimeout(() => {
      // document.getElementById("result").style.visibility = "visible";
      showDiv();
      document.getElementById(
        "result"
      ).innerHTML = `<div><h1>${chosenTask}</h1></>`;
    }, 5500);
  }
}

function showDiv() {
  var div = document.getElementById("result");
  div.style.visibility = "hidden"; // Temporarily hide

  // Remove the element and reinsert it
  div.parentNode.removeChild(div);
  setTimeout(function () {
    document.body.appendChild(div);
    div.style.visibility = "visible"; // Make visible
  }, 10); // Short timeout
}

spinBtn.onclick = function () {
  spin();
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    spin();
  }
});
