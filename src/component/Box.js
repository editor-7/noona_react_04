import React from "react";

const Box = (props) => {
  let result;
  if (
    props.title === "🤖 컴퓨터" &&
    props.result !== "tie" &&
    props.result !== ""
  ) {
    // 카드가 computer카드인가? && 결과가 비긴건 아닌가? && props.result에 값이 있는가?
    result = props.result === "win" ? "lose" : "win";
  } else {
    // 위의 경우가 아니라면 props 로 전달된 결과를 그대로 쓴다.
    result = props.result;
  }
  if (props.title === "🤖 컴퓨터") {
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <h2 data-testid="item-name">{props.item && props.item.name}</h2>
      <div className="item-display">
        {props.item ? (
          <div className="emoji-display">{props.item.emoji}</div>
        ) : (
          <div className="waiting-display">❓</div>
        )}
      </div>
      <h2 className="result-text">
        {result === "win" && "🎉 승리!"}
        {result === "lose" && "😢 패배..."}
        {result === "tie" && "🤝 무승부"}
        {result === "" && "준비중..."}
      </h2>
    </div>
  );
};

export default Box;
