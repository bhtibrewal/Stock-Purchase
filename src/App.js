import "./styles.css";
import { useState } from "react";
var initialPrice, quantity, currentPrice;
export default function App() {
  const [output, setOutput] = useState(" ");
  const [theme, setTheme] = useState({
    backgroundColor: "lightslategray"
  });

  function calcLoss() {
    var loss = (initialPrice - currentPrice) * quantity;
    var lossPercent = (loss / initialPrice) * 100;
    if (lossPercent >= 50)
      setTheme({
        backgroundColor: "red"
      });
    else
      setTheme({
        backgroundColor: "lightslategray"
      });
    return [loss, lossPercent];
  }
  function calcProfit() {
    var profit = (currentPrice - initialPrice) * quantity;
    var profitPercent = (profit / initialPrice) * 100;
    if (profitPercent >= 50)
      setTheme({
        backgroundColor: "green"
      });
    else
      setTheme({
        backgroundColor: "lightslategray"
      });
    return [profit, profitPercent];
  }
  function clickHandler() {
    if (initialPrice <= 0 || currentPrice <= 0 || quantity <= 0) {
      alert("Please enter a valid price and quantity");
    } else {
      if (initialPrice > currentPrice) {
        var loss = calcLoss();
        setOutput(`Loss: ${loss[0]} Loss Percent: ${loss[1]}`);
      } else if (initialPrice < currentPrice) {
        var profit = calcProfit();
        setOutput(`Profit: ${profit[0]} Profit Percent: ${profit[1]}`);
      } else setOutput("No pain No gain!");
    }
  }

  return (
    <div className="App" style={theme}>
      <h1>Stock Purchase</h1>
      <div>
        <label>
          Initial Price
          <input
            type="number"
            onChange={(e) => {
              initialPrice = Number(e.target.value);
            }}
          />
        </label>
        <label>
          Quantity of Stocks
          <input
            type="number"
            onChange={(e) => {
              quantity = Number(e.target.value);
            }}
          />
        </label>
        <label>
          Current Price
          <input
            type="number"
            onChange={(e) => {
              currentPrice = Number(e.target.value);
            }}
          />
        </label>
      </div>
      <button onClick={clickHandler}>Calculate</button>
      <div>{output}</div>
    </div>
  );
}
