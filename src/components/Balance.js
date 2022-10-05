import React from "react";
import TransactionList from "./TransactionList";
import Search from "./Search";
import TransactionForm from "./TransactionForm";
// import { flushSync } from "react-dom";

function Balance() {
  const [transactions, setTransactions] = React.useState([]);
  const [copyTransactions, setCopytransaction] = React.useState([]);
  function fetcher() {
    fetch("")
      .then((resp) => resp.json())
      .then((result) => {
        setCopytransaction(result);
        setTransactions(result);
      });
  }

  React.useEffect(() => {
    fetcher();
  }, []);

  function handleSubmit(obj) {
    console.log(obj);
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...obj, amount: parseInt(obj.amount) }),
    }).then(() => fetcher());
  }

  function handleChange(event) {
    let searching = event.target.value.toLowerCase();
    setTransactions(
      copyTransactions.filter((val) =>
        val.description.toLowerCase().includes(searching)
      )
    );
  }
  function handleSort(e) {
    let criteria = e.target.textContent.toLowerCase();
    function compare(a, b) {
      if (a[criteria].toLowerCase() < b[criteria].toLowerCase()) {
        return -1;
      }
      if (a[criteria].toLowerCase() > b[criteria].toLowerCase()) {
        return 1;
      }
      return 0;
    }
    console.log("Hello");

    setTransactions([...transactions.sort(compare)]);
  }
  function handleDeletion(id) {
    fetch(`http://localhost${id}`, {
      method: "DELETE",
    }).then(() => fetcher());
  }
  return (
    <div>
      <Search handleChange={handleChange} />
      <TransactionForm submit={handleSubmit} />
      <TransactionList
        transactions={transactions}
        handleSort={handleSort}
        handleDeletion={handleDeletion}
      />
    </div>
  );
}

export default Balance;