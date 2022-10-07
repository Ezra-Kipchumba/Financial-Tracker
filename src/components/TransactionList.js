import React from 'react';
import Expense from './Expense';

function TransactionsList({ transactions, handleDeletion }) {
  
  return (
    <table>
      <tbody>
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
      </tbody>
    </table>
  );
}

export default TransactionsList;