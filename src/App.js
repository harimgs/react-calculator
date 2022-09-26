import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function App() {
  const [main, setMain] = useState("");
  const [answer, setAnswer] = useState("");
  const [sign, setSign] = useState("");
  const [signCheck, setSignCheck] = useState(false);
  const [a, setA] = useState("");
  const [b, setB] = useState("");

  const onMain = (e) => {
    setMain(e.target.value);
  };
  const onA = (e) => {
    setA(e.target.value);
  };
  const onB = (e) => {
    setB(e.target.value);
  };
  const onSign = (e) => {
    setSign(e.target.value);
  };
  const onAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const numPress = (num) => {
    setMain(main + num);
    if (!signCheck) {
      setA(a + num);
    } else {
      setB(String(b) + String(num));
    }
  };

  const calcAnswer = (sign, symbol = "") => {
    let math;
    switch (sign) {
      case "+":
        math = String(Number(a) + Number(b));
        break;
      case "-":
        math = String(Number(a) - Number(b));
        break;
      case "*":
        math = String(Number(a) * Number(b));
        break;
      case "÷":
        math = String(Number(a) / Number(b));
        break;
      default:
        return;
    }
    setAnswer(math);
    if (a && b && signCheck) {
      setMain(math + symbol);
      setSign(symbol);
      setA(math);
      setB("");
      if (!symbol) {
        setSignCheck(false);
      }
    }
  };

  const onSignPress = (symbol) => {
    let regex = /[+/\-/*/÷]/i;

    if (regex.test(main) && b) {
      calcAnswer(sign, symbol);
      return;
    }

    if (!main) {
      return;
    } else if (sign) {
      const copy = main.replace(regex, symbol);
      setSign(symbol);
      setMain(copy);
      return;
    }
    if (!signCheck) setSignCheck(true);
    setSign(symbol);
    setMain(main + symbol);
  };

  const reset = () => {
    setMain("");
    setAnswer("");
    setSign("");
    setA("");
    setB("");
    setSignCheck(false);
  };

  const deleteNum = () => {
    if (!signCheck) {
      setA(a.slice(0, -1));
      setMain(main.slice(0, -1));
    } else {
      if (!b && sign) {
        setMain(main.slice(0, -1));
        setSign("");
        setSignCheck(false);
      }
      setB(b.slice(0, -1));
      setMain(main.slice(0, -1));
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <div>
          <TextField
            value={a}
            onChange={onA}
            label="a"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          />
          <TextField
            value={sign}
            onChange={onSign}
            label="sign"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          />
          <TextField
            value={b}
            onChange={onB}
            label="b"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          />
        </div>
        <hr />
        <div>
          <TextField
            onChange={onMain}
            label="main"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
            value={main}
          />
          <TextField
            onChange={onAnswer}
            value={answer}
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          />
          <Button onClick={deleteNum} variant="contained">
            del
          </Button>
        </div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Button onClick={reset} variant="contained">
                  C
                </Button>
              </td>
              <td>
                <Button variant="contained">()</Button>
              </td>
              <td>
                <Button variant="contained">%</Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    onSignPress("÷");
                  }}
                  variant="contained"
                >
                  ÷
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  onClick={() => {
                    numPress(7);
                  }}
                  variant="contained"
                >
                  7
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(8);
                  }}
                  variant="contained"
                >
                  8
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(9);
                  }}
                  variant="contained"
                >
                  9
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    onSignPress("*");
                  }}
                  variant="contained"
                >
                  X
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  onClick={() => {
                    numPress(4);
                  }}
                  variant="contained"
                >
                  4
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(5);
                  }}
                  variant="contained"
                >
                  5
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(6);
                  }}
                  variant="contained"
                >
                  6
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    onSignPress("-");
                  }}
                  variant="contained"
                >
                  -
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button
                  onClick={() => {
                    numPress(1);
                  }}
                  variant="contained"
                >
                  1
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(2);
                  }}
                  variant="contained"
                >
                  2
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(3);
                  }}
                  variant="contained"
                >
                  3
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    onSignPress("+");
                  }}
                  variant="contained"
                >
                  +
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">+/-</Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(0);
                  }}
                  variant="contained"
                >
                  0
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    numPress(".");
                  }}
                  variant="contained"
                >
                  .
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => {
                    calcAnswer(sign);
                  }}
                  variant="contained"
                >
                  =
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
