import React, { Component } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";

class App extends Component {
    render() {
        return (
            <div>
                <Output result="Calculator"/>
                <KeyPad />
            </div>
        )
    }
}

export default App;