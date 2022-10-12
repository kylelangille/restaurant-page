import _ from "lodash";
import "./style.css";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "world"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());

console.log(`Working`);
