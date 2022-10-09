import React from 'react'
// import TransactionList from './TransactionList';

function Expense({ transactions,transactionObj, handleDeletion }) {
  // onclick = removes from transactions

  const { id, date, amount } = transactionObj;
  // console.log(transactionObj)
  // const sumAll = transactions?.map((transaction) => transaction.amount)
  //  .reduce((a, b) => parseInt(a) + parseInt(b));
  // console.log(sumAll)

  return (
    <table>
      <tbody transactions={transactions}
        >
        <tr>
          <td>{date}</td>
          <td>{amount}</td>
          <td onClick={() => handleDeletion(id)}>
            <button className="btn">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
  //   <table>
  //     {transactions?.map((transactionObj) => {
  //       return (
  //         <tbody>
  //           <tr key={transactionObj.id}
  //             transactions={transactions}
  //             handleDeletion={handleDeletion}
  //             transactionObj={transactionObj}>
  //             <th>Amount</th>
  //             <th>Date</th>
  //           </tr>
  //           <tr>
  //             <td>{date}</td>
  //             <td>{amount}</td>
  //             <td onClick={() => handleDeletion(id)}><button>Delete</button></td>
  //           </tr>
  //         </tbody>);
  //     })}

  //   </table>
  // );
}

export default Expense;