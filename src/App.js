import React, { Component } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";

class App extends Component {

    state = {
        result: ""
    }

    buttonPressed = (buttonName) => {
        this.setState({
            result: buttonName
        });
    }

    render() {
        return (
            <div>
                <Output result={this.state.result}/>
                <KeyPad buttonPressed={this.buttonPressed} />
            </div>
        )
    }
}

export default App;