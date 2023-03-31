import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function reducer (state, value) {
  return state + value
}

function Counter() {
  const [count, dispatch] = React.useReducer(
    reducer,
    0
  )

  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={() => dispatch(1)}>
        +
      </button>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);