import React from 'react';
import Expense from './Expense';

function TransactionsList({ transactions, handleDeletion }) {
  
  return (
    <table>
      <thead>
        <tr>
          <th className="tabledate">Date</th>
          <th className="tableamount">Amount</th>
        </tr>
        {transactions?.map((transactionObj) => (
          <Expense
            key={transactionObj.id}
            handleDeletion={handleDeletion}
            transactionObj={transactionObj}
          />
        ))}
      </thead>
    </table>
  );
}

export default TransactionsList;