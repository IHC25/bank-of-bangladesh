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

// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited
    const depositAmount = getInputValue("deposit-input");

    // update deposit total
    // const depositCurrent = document.getElementById("deposit-current");
    // const previousDepositAmountText = depositCurrent.innerText;
    // const previousDepositAmount = parseFloat(previousDepositAmountText);
    // const newDepositAmount = previousDepositAmount + depositAmount;
    // depositCurrent.innerText = newDepositAmount;

    updateTotalField("deposit-current", depositAmount);

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal =
      parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
  });

//   handle withdraw handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get the amount to withdraw
    const withdrawAmount = getInputValue("withdraw-input");
    // update withdraw total
    // const withdrawTotal = document.getElementById("withdraw-total");
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;
    updateTotalField("withdraw-total", withdrawAmount);

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal =
      parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
  });
