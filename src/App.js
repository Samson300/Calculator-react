import React, { Component } from "react";
import "./App.css";
import KeyPad from "./components/KeyPad";
import Output from "./components/Output";

class App extends Component {

    state = {
        result: ""
    }

    buttonPressed = (buttonName) => {
        if (buttonName === "=") {
            this.calculate();
        } else {
        this.setState({
            result: this.state.result + buttonName
        });
        }
    }

    calculate = () => {
        try {this.setState({
            result: eval(this.state.result)
        });} catch(e){
            this.setState({
                result: "error"
            })
        }
    }


    render() {
        return (
            <div className="App">
                <div className="calc-body">
                    <Output result={this.state.result}/>
                    <KeyPad buttonPressed={this.buttonPressed} />
                </div>
            </div>
        )
    }
}

export default App;