import React,{useState} from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import "./App.css";

function Balance() {
  const [transactions, setTransactions] = useState([]);


  function fetcher() {
    fetch("http://localhost:3000/transactions")
      .then((resp) => resp.json())
      .then((result) => {
        // console.log(result)
        setTransactions(result);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("server is down!!");
      });;
  }


  React.useEffect(() => {
    fetcher();
  }, []);



  function handleSubmit(obj) {
    // console.log(obj);
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...obj, amount: parseInt(obj.amount) }),
    })
      .then(() => fetcher());
  }


  
  function handleDeletion(id) {
    fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    }).then(() => fetcher());
  }

// console.log(transactions)
  return (
    <div>
      <TransactionForm submit={handleSubmit} />
      <TransactionList
        transactions={transactions}
        handleDeletion={handleDeletion}
      />
    </div>
  );
}

export default Balance;