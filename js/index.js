let sumOfTotalPrice = 0;

function clickCard(target) {
  const cardClickedContainer = document.getElementById("select-container-list");

  const cardTitle =
    target.parentNode.childNodes[1].childNodes[3].childNodes[3].innerText;

  const li = document.createElement("li");
  // li.innerText = cardTitle;
  li.innerText = cardTitle;

  cardClickedContainer.appendChild(li);

  const cardPrice =
    target.parentNode.childNodes[1].childNodes[3].childNodes[5].innerText.split(
      " "
    )[0];

  sumOfTotalPrice = parseFloat(sumOfTotalPrice) + parseFloat(cardPrice);
  console.log(parseFloat(sumOfTotalPrice));
  const TotalPrice = document.getElementById("total-price");
  TotalPrice.innerText = sumOfTotalPrice.toFixed(2);
  const couponButton = document.getElementById("cuopon-btn");

  //make purchase button code
  const buyButton = document.getElementById("purchase-btn");
  if (sumOfTotalPrice > 0) {
    buyButton.removeAttribute("disabled");
  }

  //product copoun part apply button
  if (sumOfTotalPrice >= 200) {
    couponButton.removeAttribute("disabled");
    console.log("touched");
  } else {
    couponButton.setAttribute("disabled");
  }
}

//purchase button

//coupon button
document.getElementById("cuopon-btn").addEventListener("click", function () {
  const couponInputFiled = document.getElementById("coupon-input-field");
  const couponInputFiledValue = couponInputFiled.value;

  if (couponInputFiledValue === "" || couponInputFiledValue === " ") {
    alert("enter value");
    return;
  }

  if (couponInputFiledValue === "SELL200") {
    // console.log("you got dicsount");
    const dicsountPrice = document.getElementById("discount-price");
    const sumOfTotalDiscountPrice = sumOfTotalPrice * 0.2;

    dicsountPrice.innerText = sumOfTotalDiscountPrice.toFixed(2);

    const finalTotalPrice = document.getElementById("final-total-price");
    finalTotalPrice.innerText = (
      sumOfTotalPrice - sumOfTotalDiscountPrice
    ).toFixed(2);
    couponInputFiled.value = "";
  } else {
    alert("Enter The Right Code");
    couponInputFiled.value = "";
  }
});
