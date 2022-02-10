// handle deposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //   get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;

    // update deposit total
    const depositCurrent = document.getElementById("deposit-current");
    const previousDepositAmount = depositCurrent.innerText;
    const newDepositAmount =
      parseFloat(previousDepositAmount) + parseFloat(depositAmount);
    depositCurrent.innerText = newDepositAmount;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = balanceTotal.innerText;
    const newBalanceTotal =
      parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = "";
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
