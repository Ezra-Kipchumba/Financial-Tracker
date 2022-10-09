import React, { useState } from 'react'

function TransactionForm({ submit,transactionObj }) {
  
  const [formData, setFormData] = useState({});
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function getSubmitData(e) {
    e.preventDefault();
    submit(formData);
  }

 const [first, setfirst] = useState(0);

 const addChange = (event) => {
  const sumArr = event.target.value.split(",");
  const sum = sumArr.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  }, 0);
   console.log(sum)
  if (sum) {
    setfirst(sum);
  }
 };

  // const sumAll = transactionObj?.map((datum) => datum.amount).reduce((a, b) => a + b);
  // console.log(sumAll)

  const res = transactionObj?.map((transact) => transact.amount)
    .reduce((acc, transact) => acc + transact);
  console.log(res);
  return (
    <div className="form-container">
      <h1>Balance</h1>
      <h1>${first}</h1>
      <form className="user-form">
        <div className="inline-fields">
          <input
            className="user-input"
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            onChange={addChange}
            onBlur={handleChange}
          />
          <input
            className="user-input-date"
            type="date"
            name="date"
            onBlur={handleChange}
          />
        </div>
        <button
          className="user-input-button"
          type="submit"
          onClick={getSubmitData}
        >
          Add New Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;