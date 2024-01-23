import React from "react";
import deleteBtn from "../assets/close-red-icon.webp";

const List = ({ data, setData }) => {
  const deleteData = (idToDelete) => {
    const updatedData = data.filter((item) => idToDelete !== item.id);
    setData(updatedData);
    localStorage.setItem("dataKey", JSON.stringify(updatedData));
  };

  return (
    <div className="list-container">
      <h3>History</h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <div>
              <span>{item.amount}</span>
              <img
                onClick={() => deleteData(item.id)}
                src={deleteBtn}
                className="delete-list"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
