import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// What if instead of dispatching the value directly, we dispatch the type of action that occurred? 
// That way, based on the type of action, our reducer can decide how to update the state.
function reducer(state, action) {
  if (action === 'increment') {
    return state + 1
  } else if (action === 'decrement') {
    return state - 1
  } else if (action === 'reset') {
    return 0
  } else {
    throw new Error()
  }
}

function Counter() {
  const [count, dispatch] = React.useReducer(
    reducer,
    0
  )

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>
        +
      </button>
      <button onClick={() => dispatch('decrement')}>
        -
      </button>
      <button onClick={() => dispatch('reset')}>
        Reset
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);