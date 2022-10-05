import React from 'react'

function Expense({transactionObj, handleDeletion}) {
  // onclick = removes from transactions
  // Delete method on API
  const { id, date, amount } = transactionObj;
  return (
    <div onClick={() => handleDeletion(id)}>
      {date}
      {amount}
    </div>
  );
}

export default Expense;