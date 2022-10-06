import React from 'react';
import Expense from './Expense';

function TransactionsList({ transactions, handleDeletion }) {
  
  return (
    <div>
      <h3 className="tabledate">Date</h3>
      <h3 className="tableamount">Amount</h3>
      {transactions.map((transactionObj) => (
        <Expense
          key={transactionObj.id}
          handleDeletion={handleDeletion}
          transactionObj={transactionObj}
        />
      ))}
    </div>
  );
}

export default TransactionsList;