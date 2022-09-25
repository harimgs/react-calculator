import "./App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <input></input>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Button variant="contained">C</Button>
              </td>
              <td>
                <Button variant="contained">()</Button>
              </td>
              <td>
                <Button variant="contained">%</Button>
              </td>
              <td>
                <Button variant="contained">÷</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">7</Button>
              </td>
              <td>
                <Button variant="contained">8</Button>
              </td>
              <td>
                <Button variant="contained">9</Button>
              </td>
              <td>
                <Button variant="contained">X</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">4</Button>
              </td>
              <td>
                <Button variant="contained">5</Button>
              </td>
              <td>
                <Button variant="contained">6</Button>
              </td>
              <td>
                <Button variant="contained">-</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">1</Button>
              </td>
              <td>
                <Button variant="contained">2</Button>
              </td>
              <td>
                <Button variant="contained">3</Button>
              </td>
              <td>
                <Button variant="contained">+</Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button variant="contained">+/-</Button>
              </td>
              <td>
                <Button variant="contained">0</Button>
              </td>
              <td>
                <Button variant="contained">.</Button>
              </td>
              <td>
                <Button variant="contained">=</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
