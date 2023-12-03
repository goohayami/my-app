"use client";
import "../../globals.css";
import { useState } from "react";
import { Quiz, rezult } from "./Quizes";

export default function New() {
  const [points, setPoints] = useState([]);
  const [rezutlText, setRezultText] = useState("");
  const [i, setI] = useState(0);
  const len = Quiz.length;

  const clickBtn = (e) => {
    console.log(e.target.textContent);
    const num = Number(Quiz[i].answers.indexOf(e.target.textContent));

    points.push(Quiz[i].point[num]);
    console.log(points);
    totalNum();

    if (i < len - 1) {
      function setint() {
        setI(i + 1);
      }
      setTimeout(setint, 800);
    } else {
      console.log("not ok");
    }
  };

  function totalNum() {
    let sum = points.reduce(function (a, b) {
      return a + b;
    });
    console.log(sum);
    console.log(i);
    if (i === len - 1 && sum < 5) {
      setRezultText(rezult[0]);
      final();
    } else if (i === len - 1 && sum < 10) {
      setRezultText(rezult[1]);
      final();
    } else if (i === len - 1 && sum < 15) {
      setRezultText(rezult[2]);
      final();
    } else if (i === len - 1 && sum < 20) {
      setRezultText(rezult[3]);
      final();
    } else if (i === len - 1 && sum < 34) {
      setRezultText(rezult[4]);
      final();
    }
  }

  function final() {
    const div = document.querySelector(".ans-container");
    div.classList.add("hide");

    document.querySelector(".quiz-title").textContent = "あなたの結果は・・・";
  }

  return (
    <>
      <div className="new main-container">
        <h1>新しい診断テスト</h1>
        <h2 className="quiz-title"> {Quiz[i].quiz}</h2>
        <div className="ans-container">
          {Quiz[i].answers.map((ans, i) => (
            <li className="new-list" key={i}>
              <button className="new btn" onClick={clickBtn} key={ans[i]}>
                {ans}
              </button>
            </li>
          ))}
        </div>
        <p className="rezult-text">{rezutlText}</p>
      </div>
    </>
  );
}
