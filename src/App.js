import { useState, useEffect } from "react";
import PlayBox from "./component/PlayBox";
import Result from "./component/Result";
import { Pattern } from "./component/Pattern";
function App() {
  const [result, setResult] = useState({
    winner: "none",
    state: "",
    status: false,
  });
  const [turn, setaTurn] = useState("X");

  const [xWin, setXwin] = useState(0);
  const [oWin, setOwin] = useState(0);
  const [tie, setTie] = useState(0);

  const [matrix, setMatrix] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    if (result.status) {
      if (result.winner === "X") {
        setXwin(xWin + 1);
      } else if (result.winner === "O") {
        setOwin(oWin + 1);
      } else if (result.state === "tie") {
        setTie(tie + 1);
      }
    }
  }, [result]);

  useEffect(() => {
    winner();
  }, [matrix]);

  // set board state:
  const handleChange = (index) => {
    let copy = [...matrix];

    if (copy[index] === "" || copy[index] === null) {
      if (turn === "X") {
        copy[index] = "X";
        setaTurn("O");
      } else {
        copy[index] = "O";
        setaTurn("X");
      }
      setMatrix(copy);
    }
  };

  // check winner :
  const winner = () => {
    Pattern.forEach((currentPattern) => {
      let count = 0;
      const trn = turn === "X" ? "O" : "X";
      currentPattern.forEach((patternValue) => {
        let count_tie = 0;
        matrix.forEach((stateValue, idx) => {
          if (trn === stateValue && idx === patternValue) {
            count++;
          }

          if (count === 3) {
            setResult({ winner: trn, state: "won", status: true });
            return;
          }

          if (stateValue === "X" || stateValue === "O") {
            count_tie++;
          }

          if (count_tie === 9) {
            setResult({ winner: "none", state: "tie", status: true });
            return;
          }
        });
      });
    });
  };

  // restart:
  const resetMatrix = () => {
    setMatrix([null, null, null, null, null, null, null, null, null]);
    setResult({ winner: "none", state: "", status: false });
  };

  return (
    <>
      <PlayBox
        xWin={xWin}
        oWin={oWin}
        tie={tie}
        turn={turn}
        setTie={setTie}
        matrix={matrix}
        setMatrix={setMatrix}
        handleChange={handleChange}
        winner={winner}
        resetMatrix={resetMatrix}
      />
      {result.status ? (
        <Result
          result={result}
          setResult={setResult}
          resetMatrix={resetMatrix}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
