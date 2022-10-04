import React, { useEffect, useState } from 'react'

function TransactionList() {
    const [transactions, setTransactions] = useState([]);
    // function fetcher() {
        useEffect(() => {
            fetch("http://localhost:8002/bots")
              .then((res) => res.json())
              .then(setTransactions);
        },[])
    // }
    function listTransactions(transaction) {
      console.log(transaction);
      setTransactions(transactions.map((b) => (b.id === transaction.id ? { ...b, confirm: true } : b)));
    }
    function removeTransaction(transaction) {
      console.log(transaction);
      setTransactions(transactions.map((b) => (b.id === transaction.id ? { ...b, aconfirm: false } : b)));
    }
    function deleteTransaction(transaction) {
      // console.log("Transaction Deleted")
      setTransactions(transactions.filter((b) => b.id !== transaction.id));
    }
    return (
      <div>
        {/* <YourBotArmy */}
          transactions={transactions.filter((b) => b.confirm)}
          rremoveTransaction={removeTransaction}
          deleteTransaction={deleteTransaction}
        {/* /> */}
        {/* <BotCollection */}
          transactions={transactions}
          listTransactions={listTransactions}
          deleteTransaction={deleteTransaction}
        {/* /> */}
      </div>
    );
}

export default TransactionList;