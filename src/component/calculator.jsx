import React from "react";
import "./calculator.css"

export default function Calculator() {
  return (
    <div className="calculator">
      <div className="display">
        <div>50</div>
        <div>+</div>
        <div>10</div>
        <div>=</div>
        <div>500</div>
        <hr />
      </div>
      <div className="btns">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>.</button>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>%</button>
        <button>^</button>
        <button>&#8730;</button>
        <button>=</button>
        <button>C</button>
      </div>
    </div>
  )
}
