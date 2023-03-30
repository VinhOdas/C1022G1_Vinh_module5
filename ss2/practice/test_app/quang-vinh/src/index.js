import React from 'react';
import ReactDOM from 'react-dom/client';

const name = " Quang Vinh";
const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange"

]

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(
  <h1 style={{textAlign: "center"}}>{name} </h1>
)
root2.render(
  <div>
    <h1>List of fruits </h1>
    <ul>
      {
        fruits.map((item) => (
          <li>
            {item}
          </li>
        ))
      }
    </ul>
  </div>,
  document.getElementById('root2')
)