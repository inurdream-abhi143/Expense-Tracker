import { useState } from "react";

import "./App.css";
import Header from "./components/Header";

function App() {
  const [income, setIncome] = useState(10000);
  const [expense, setExpense] = useState(5000);

  return (
    <>
      <div className="container">
        <div className="expense-container">
          <Header key={1} income={income} expense={expense} />

          <div className="expense-store">
            <h2 className="In">
              Income <span>$ {income}</span>
            </h2>
            <h2 className="Ex">
              Expense
              <span>$ {expense}</span>
            </h2>
          </div>
          <div className="addremove">
            <form>
              <label htmlFor=""></label>
              <select className="select">
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              <input
                type="text"
                placeholder="Enter Description"
                className="input"
              />
              <input
                type="text"
                placeholder="Enter the Amount"
                className="input"
              />
              <button className="btn">Add Transaction</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
