import React from 'react'
import TransactionList from './TransactionList';

function Expense({ transactions,transactionObj, handleDeletion }) {
  
  // onclick = removes from transactions
  

  const { id, date, amount } = transactionObj;
  return (
    <div onClick={() => handleDeletion(id)}>
      <TransactionList
        transactions={transactions}
        handleDeletion={handleDeletion}
      />
      <tr>
        <td>{date}</td>
        <td>{amount}</td>
      </tr>
    </div>
  );
}

export default Expense;