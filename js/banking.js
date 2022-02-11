function getInputValue() {
  const depositInput = document.getElementById("deposit-input");
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText);
  // clear the deposit input field
  depositInput.value = "";
  return depositAmount;
}

// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited
    const depositAmountTotal = getInputValue();

    // update deposit total
    const depositCurrent = document.getElementById("deposit-current");
    const previousDepositAmountText = depositCurrent.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositAmount = previousDepositAmount + depositAmountTotal;
    depositCurrent.innerText = newDepositAmount;

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
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAmount = withdrawInput.value;
    // update withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    const previousWithdrawTotal = withdrawTotal.innerText;
    const newWithdrawTotal =
      parseFloat(previousWithdrawTotal) + parseFloat(withdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;
    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal =
      parseFloat(previousBalanceTotal) - parseFloat(withdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear the withdraw input field
    withdrawInput.value = "";
  });
