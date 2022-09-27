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
  const [percentage, setPercentage] = useState(false);
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

  const plusMinus = () => {
    if (a && !signCheck) {
      setA(String(a * -1));
      setMain(String(a * -1));
    } else if (a && b && sign && signCheck) {
      setB(String(b * -1));
      setMain(String(a + sign + b * -1));
    }
  };

  const numPress = (num) => {
    if (a && b && sign && answer) {
      reset();
      setA(String(num));
      setMain(String(num));
      return;
    }

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

    //if onSign Pressed.
    if (a && b && symbol) {
      setMain(math + symbol);
      setSign(symbol);
      setA(math);
      setB("");
      setAnswer("");
      if (!symbol) {
        setSignCheck(false);
      }
    } else {
      setAnswer("");
      setA(math);
      setB("");
      // setMain(math + sign + b);
      setMain(math);
      setSignCheck(false);
      setSign("");
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
    } else if (sign && main.charAt(0) !== "-") {
      const copy = main.replace(regex, symbol);
      setSign(symbol);
      setMain(String(copy));
      return;
    } else if (sign && main.charAt(0) === "-") {
      const copy = main.slice(1).replace(regex, symbol);
      setSign(symbol);
      setMain(String("-" + copy));
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
    setPercentage(false);
  };

  const deleteNum = () => {
    if (!signCheck) {
      setA(String(a.slice(0, -1)));
      setMain(String(main.slice(0, -1)));
    } else {
      if (!b && sign) {
        setMain(String(main.slice(0, -1)));
        setSign("");
        setSignCheck(false);
      }
      setB(String(b.slice(0, -1)));
      setMain(String(main.slice(0, -1)));
    }
  };

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <div style={{ display: "none" }}>
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
          {/* <TextField
            value={percentage}
            label="%"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          /> */}
        </div>
        <div>
          <TextField
            onChange={onMain}
            // label="main"
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
            value={main}
            disabled
          />
          {/* <TextField
            onChange={onAnswer}
            value={answer}
            id="outlined-hidden-label"
            variant="outlined"
            size="small"
          /> */}
        </div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <Button
                  style={{ width: "-webkit-fill-available" }}
                  onClick={reset}
                  variant="contained"
                  color="error"
                >
                  C
                </Button>
              </td>
              <td>
                <Button onClick={deleteNum} variant="contained">
                  del
                </Button>
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
                <Button onClick={plusMinus} variant="contained">
                  +/-
                </Button>
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
