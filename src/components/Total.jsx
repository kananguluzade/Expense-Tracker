import React from "react";

const Total = ({ data }) => {
  const totalIncome = data.reduce((acc, item) => {
    return item.amount > 0 ? acc + item.amount : acc;
  }, 0);

  const totalExpense = data.reduce((acc, item) => {
    return item.amount < 0 ? acc + item.amount : acc;
  }, 0);

  const total = data.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <div className="total-con">
      <h2>Expense Tracker</h2>
      <p className="your-balance">
        YOUR BALANCE <span>{total}$</span>
      </p>
      <div className="income-expense">
        <p className="income">
          INCOME <span>{totalIncome}$</span>
        </p>
        <p className="expense">
          EXPENSE <span>{totalExpense}$</span>
        </p>
      </div>
    </div>
  );
};

export default Total;
