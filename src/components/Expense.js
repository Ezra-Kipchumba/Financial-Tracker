import React from 'react'

function Expense({transactionObj, handleDeletion}) {
  // onclick = removes from transactions
  // Delete method on API
  const { id, date, description, amount } = transactionObj;
  return (
    <tr onClick={() => handleDeletion(id)}>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Expense