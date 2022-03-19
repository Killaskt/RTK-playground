import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counter/counter";

function App() {
    const { count } = useSelector((state) => state.counter);
    const [yolo, setYolo] = useState(0);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <h1> {count} people are learning react</h1>
                <div>
                    <button onClick={() => dispatch(increment())}>
                        INCREMENT
                    </button>
                    <button onClick={() => dispatch(decrement())}>
                        DECREMENT
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
