import React from "react";

const Form = ({ text, amount, setText, setAmount, data, setData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || amount === "") return ;

    const newData = [
      ...data,
      {
        id: Date.now(),
        text,
        amount,
      },
    ];

    setData(newData);
    localStorage.setItem("dataKey", JSON.stringify(newData));
    setText("");
    setAmount("");
  };

  return (
    <div className="form-container">
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>Text</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter text..."
          value={text}
        />
        <label>Amount (negative-expense, positive-income)</label>
        <input
          onChange={(e) => setAmount(parseInt(e.target.value))}
          type="number"
          placeholder="Enter amount..."
          value={amount}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
};

export default Form;
