import React, { useState } from "react";
import "./styles.css";
import Bar from "./components/Bar";
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort
} from "./components/sorting";

function App() {
  const [nums, resetNums] = useState([]);
  const [start, setStart] = useState(false);
  const [sorting, setSorting] = useState(false);

  function generate() {
    document.getElementById("text").textContent = "";
    let arr = [];
    let num = Math.floor((document.documentElement.clientWidth * 0.9) / 6);
    for (let i = 1; i <= num; i++) {
      let x = Math.floor(Math.random() * 495 + 5);
      arr.push(x);
    }
    resetNums(arr);
    setStart(true);
  }

  function sort() {
    let arr = nums,
      c;
    const bars = document.getElementsByClassName("Bar");
    let num = document.getElementById("ddl").value;
    if (num === "0") {
      alert("Please choose a sorting algorithm!");
      return;
    }
    setSorting(true);
    setStart(false);
    if (num === "1") c = bubbleSort(arr, bars, resetNums);
    else if (num === "2") c = selectionSort(arr, bars, resetNums);
    else if (num === "3") c = insertionSort(arr, bars, resetNums);
    else if (num === "4") c = mergeSort(arr, bars, resetNums);
    else if (num === "5") c = quickSort(arr, bars, resetNums);
    console.log(c);
    setTimeout(() => {
      setSorting(false);
      document.getElementById("text").textContent = `Time: ${c / 1000} s`;
    }, c * 1);
  }

  return (
    <div className="App">
      <div className="header">Sorting Visualizer</div>
      <div className="container">
        {nums.map((num, index) => {
          return <Bar num={num} key={index} id={index} />;
        })}
      </div>
      <p id="text"></p>
      {!sorting && (
        <button className="generate_Button" onClick={generate}>
          <span>Generate new Array</span>
        </button>
      )}
      {!sorting && start && (
        <select id="ddl">
          <option value="0" selected="selected">
            Choose algorithm
          </option>
          <option value="1">Bubble Sort</option>
          <option value="2">Selection Sort</option>
          <option value="3">Insertion Sort</option>
          <option value="4">Merge Sort</option>
          <option value="5">Quick Sort</option>
        </select>
      )}
      {sorting && (
        <div class="spinner-box">
          <div class="pulse-container">
            <div class="pulse-bubble pulse-bubble-1"></div>
            <div class="pulse-bubble pulse-bubble-2"></div>
            <div class="pulse-bubble pulse-bubble-3"></div>
          </div>
        </div>
      )}
      {start && (
        <button id="sortButton" onClick={sort}>
          <span>Visualize</span>
        </button>
      )}
    </div>
  );
}

export default App;
