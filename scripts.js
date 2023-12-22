let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
let value = Math.ceil(Math.random() * 3600);

const wheelItems = [
  {
    id: 1,
    name: "item1",
    img: "./assets/william.png",
    type: "task",
    color: "linear-gradient(#e66465, #9198e5)",
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
    color: "linear-gradient(#e66465, #9198e5)",
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
    color: "linear-gradient(#e66465, #9198e5)",
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
    color: "linear-gradient(#e66465, #9198e5)",
  },
  {
    id: 8,
    name: "item8",
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
    div.innerHTML = `<div id="task"><img src="${item.img}" />${item.id}</div>`;
  } else {
    div.innerHTML = `<div id="fireball">${item.id}</div>`;
  }

  wheel.appendChild(div);
}

function spin() {
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
  const extraRotations = 360 * (3 + Math.floor(Math.random() * 5)); // 3 to 5 extra full rotations
  const finalAngle = value + angleToRotate + extraRotations;

  // Update the wheel
  wheel.style.transform = "rotate(" + finalAngle + "deg)";
  value = finalAngle; // Update the current value

  // Output the selected item
  console.log("Selected Item Index:", selectedItemIndex + 1); // +1 for display purposes
}

spinBtn.onclick = function () {
  spin();
};

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    spin();
  }
});
