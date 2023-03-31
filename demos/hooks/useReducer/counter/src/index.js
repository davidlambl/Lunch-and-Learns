import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function reducer (state, value) {
  return state + value
}

function Counter() {
  // useReducer returns an array 
  // with the first element being the state
  // and the second element being a dispatch function which when called, will invoke the reducer.
  const [count, dispatch] = React.useReducer(
    reducer,
    0
  )

  return (
    <>
      {/* When invoked, whatever you pass to dispatch will be passed as the second argument to the reducer 
      (which we've been calling value). The first argument (which we've been calling state) will be passed 
      implicitly by React and will be whatever the previous state value was.  */}
      <h1>{count}</h1>
      <button onClick={() => dispatch(1)}>
        +
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);