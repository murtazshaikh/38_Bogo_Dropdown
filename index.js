"use strict";

function toggleBox(selectedBox) {
  let boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    let radio = box.querySelector(".radio-btn");
    if (box === selectedBox) {
      box.querySelectorAll(".lower-box").forEach((lowerBox) => {
        lowerBox.classList.toggle("expanded");
      });
      if (radio) radio.checked = true;
    } else {
      console.log(box, "diff");
      box.querySelectorAll(".lower-box").forEach((lowerBox) => {
        lowerBox.classList.remove("expanded");
      });
      if (radio) radio.checked = false;
    }
  });
}

const boxesData = [
  {
    heading: "1 Unit",
    discount: "10% Off",
    price: "$10.00 USD",
    originalPrice: "$24.00 USD",
    isPopular: false,
  },
  {
    heading: "2 Units",
    discount: "20% Off",
    price: "$18.00 USD",
    originalPrice: "$24.00 USD",
    isPopular: true,
  },
  {
    heading: "3 Units",
    discount: "30% Off",
    price: "16.00 USD",
    originalPrice: "$24.00 USD",
    isPopular: false,
  },
];

const boxesContainer = document.getElementById("boxes-container");

boxesData.forEach((box, index) => {
  boxesContainer.innerHTML += `
      <div class="box ${box.isPopular ? `is-popular` : ``}" >
        <div class="upper-box" onclick="toggleBox(this.parentElement)">
        ${box.isPopular ? `<div class="popular-tag">MOST POPULAR</div>` : ``}
          <input type="radio" name="unit" class="radio-btn" />
          <div class="box-content">
            <div class="left">
              <div class="unit-offer">
                <h3 class="unit-heading">${box.heading}</h3>
                <div class="offer">${box.discount}</div>
              </div>
              <div class="standard-txt">Standard Price</div>
            </div>
            <div class="right">
              <div class="offer-price">${box.price}</div>
              <div class="og-price">${box.originalPrice}</div>
            </div>
          </div>
        </div>
        <div class="lower-box">
          <table>
            <tr>
              <th></th>
              <th>Size</th>
              <th>Colour</th>
            </tr>
            <tr>
              <td>#1</td>
              <td>
                <select class="dropdown">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </td>
              <td>
                <select class="dropdown">
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>#2</td>
              <td>
                <select class="dropdown">
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </td>
              <td>
                <select class="dropdown">
                  <option>Black</option>
                  <option>White</option>
                  <option>Blue</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    `;
});
