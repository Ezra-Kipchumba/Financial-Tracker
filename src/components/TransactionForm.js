import React, { useState } from 'react'

function TransactionForm({ submit }) {
  
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
  return (
    <div className="form-container">
      <form className="user-form">
        <div className="inline-fields">
          <input
            className="user-input-date"
            type="date"
            name="date"
            onBlur={handleChange}
          />
          {/* <input
            type="text"
            name="description"
            placeholder="Description"
            onBlur={handleChange}
          /> */}
          <input
            className="user-input"
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
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