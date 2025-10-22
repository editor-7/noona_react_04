import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 박스 2개 (타이틀,사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4.컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강 비기면-검은색)

const choice = {
  rock: {
    name: "바위",
    img: "🪨",
    emoji: "🪨"
  },
  scissors: {
    name: "가위",
    img: "✂️",
    emoji: "✂️"
  },
  paper: {
    name: "보",
    img: "📄",
    emoji: "📄"
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    return choice[final];
  };
  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer tie
    // user == rock, computer == "scissors" user 이긴거지
    // user == "rock" computer == paper   user 진거지
    // user == scissors computer paper    user 이긴거지
    // user == scissors computer rock     user 진거지
    // user == paper computer rock   user 이긴거지
    // user paper computer scissors user 진거지

    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "바위")
      return computer.name === "가위" ? "win" : "lose";
    else if (user.name === "가위")
      return computer.name === "보" ? "win" : "lose";
    else if (user.name === "보")
      return computer.name === "바위" ? "win" : "lose";
  };
  return (
    <div className="app-container">
      <div className="game-header">
        <h1 className="game-title">🎮 나만의 가위바위보 게임 🎮</h1>
        <p className="game-subtitle">컴퓨터와 승부해보세요!</p>
      </div>
      <div className="main">
        <Box title="👤 나" item={userSelect} result={result} />
        <Box title="🤖 컴퓨터" item={computerSelect} result={result} />
      </div>
      <div className="button-container">
        <button className="game-button scissors" onClick={() => play("scissors")}>
          ✂️ 가위
        </button>
        <button className="game-button rock" onClick={() => play("rock")}>
          🪨 바위
        </button>
        <button className="game-button paper" onClick={() => play("paper")}>
          📄 보
        </button>
      </div>
    </div>
  );
}

export default App;
