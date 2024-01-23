import React, { useState } from "react";
import Total from "./components/Total";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("dataKey"))||[]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");


  return (
    <div className="container">
      <Total data={data} />
      <List data={data} setData={setData} />
      <Form
        amount={amount}
        text={text}
        setText={setText}
        setAmount={setAmount}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default App;
