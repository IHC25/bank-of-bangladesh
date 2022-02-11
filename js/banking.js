function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const inputAmountText = input.value;
  const inputAmount = parseFloat(inputAmountText);
  // clear input field
  input.value = "";
  return inputAmount;
}

function updateTotalField(totalFieldId, currentTotalAmount) {
  const totalAmount = document.getElementById(totalFieldId);
  const previousTotalAmountText = totalAmount.innerText;
  const previousTotalAmount = parseFloat(previousTotalAmountText);
  const newTotalAmount = previousTotalAmount + currentTotalAmount;
  totalAmount.innerText = newTotalAmount;
}

function updateBalanceField(amount, isAdd) {
  const balanceTotal = document.getElementById("balance-total");
  const previousBalanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalText);
  if (isAdd == true) {
    const newBalanceTotal = previousBalanceTotal + amount;
    balanceTotal.innerText = newBalanceTotal;
  } else {
    const newBalanceTotal = previousBalanceTotal - amount;
    balanceTotal.innerText = newBalanceTotal;
  }
}

// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited
    const depositAmount = getInputValue("deposit-input");
    // update deposit total
    updateTotalField("deposit-current", depositAmount);
    // update account balance
    updateBalanceField(depositAmount, true);
  });

//   handle withdraw handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get the amount to withdraw
    const withdrawAmount = getInputValue("withdraw-input");
    // update withdraw total
    updateTotalField("withdraw-total", withdrawAmount);
    // update account balance
    updateBalanceField(withdrawAmount, false);
  });
