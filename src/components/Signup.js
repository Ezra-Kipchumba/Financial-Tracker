import React, { useState } from 'react'

function Signup() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setPhoneNumber] = useState("");
    
  const [submittedData, setSubmittedData] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
    function handlePhoneNo(event) {
        setPhoneNumber(event.target.value);
    }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = { name: name, email: email , number: number};
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setName("");
    setEmail("");
    setPhoneNumber("");
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.name} {data.email} {data.number}
      </div>
    );
  });

  return (
    <div id="forms">
      <form
        onSubmit={handleSubmit}
      >
        <label>Name</label>
        <input type="text" onChange={handleNameChange} value={name} />
        <label>Enter Email Address</label>
        <input type="text" onChange={handleEmailChange} value={email} />
        <label>Input Phone Number</label>
        <input type="number" onChange={handlePhoneNo} value={number} />

        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Signup