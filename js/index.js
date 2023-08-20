let sumOfTotalPrice = 0;
function clickCard(target) {
  const cardClickedContainer = document.getElementById("select-container");

  const cardTitle =
    target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;

  //   console.log(cardTitle);
  const li = document.createElement("li");
  li.innerText = cardTitle;
  cardClickedContainer.appendChild(li);

  const cardPrice =
    target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(
      " "
    )[0];

  sumOfTotalPrice = parseFloat(sumOfTotalPrice) + parseFloat(cardPrice);
  console.log(parseFloat(sumOfTotalPrice));
  const TotalPrice = document.getElementById("total-price");
  TotalPrice.innerText = sumOfTotalPrice;
  const couponButton = document.getElementById("cuopon-btn");
  if (sumOfTotalPrice >= 200) {
    couponButton.removeAttribute("disabled");
    console.log("touched");
  } else {
    couponButton.setAttribute("disabled");
  }
}
