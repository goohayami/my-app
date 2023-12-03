"use client";
import { useState } from "react";
import { quiz } from "../Sindan/Hairetu";
import { rezult } from "../Sindan/Kekka";

export default function Quiz() {
  //   const [point, setPoint] = useState(0);
  const [iNum, setInum] = useState(0);
  const [rezultText, setRezurtText] = useState("");
  const len = quiz.length;

  //   合計の配列
  const [pointNum, setPontNum] = useState([]);

  //   ボタンクリックした時の動作
  const forword = (e) => {
    if (iNum < len - 1) {
      setInum(iNum + 1);

      calNum(e);
    } else if (iNum === len - 1) {
      calNum(e);

      document.querySelector(".ans-container").textContent =
        "あなたの結果は・・・";
      document.querySelector(".q-conteiner").classList.add("hide");
      console.log(pointNum);

      totalSum();
    }
  };

  function totalSum() {
    let sum = pointNum.reduce(function (a, b) {
      return a + b;
    });
    if (sum < 5) {
      setRezurtText(rezult[0]);
    } else if (sum < 9) {
      setRezurtText(rezult[1]);
    } else if (sum < 12) {
      setRezurtText(rezult[2]);
    } else {
      setRezurtText(rezult[3]);
    }
  }

  //   答えに応じたポイントの加算
  const calNum = (e) => {
    if (e.target.textContent === quiz[iNum].ans1[0]) {
      pointNum.push(Number(quiz[iNum].ans1[1]));
    } else if (e.target.textContent === quiz[iNum].ans2[0]) {
      pointNum.push(Number(quiz[iNum].ans2[1]));
    } else if (e.target.textContent === quiz[iNum].ans3[0]) {
      pointNum.push(Number(quiz[iNum].ans3[1]));
    }
  };

  return (
    <>
      <div className="quiz main-conteiner">
        <h1>〇〇診断テスト</h1>
        <div className="q-conteiner">{quiz[iNum].q}</div>
        <div className="ans-container">
          <button className="quiz btn" onClick={forword}>
            {quiz[iNum].ans1[0]}
          </button>
          <br />
          <button className="quiz btn" onClick={forword}>
            {quiz[iNum].ans2[0]}
          </button>
          <br />
          <button className="quiz btn" onClick={forword}>
            {quiz[iNum].ans3[0]}
          </button>
        </div>
        <p>{rezultText}</p>
      </div>
    </>
  );
}
