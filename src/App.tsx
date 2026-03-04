import React from "react";
import { Button } from "react-bootstrap";
//import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>this is a test</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. My name is Owen Cook
            </p>
            <p>Some scenery I saw</p>
            <img
                src="src/Mountains.jpg"
                alt="Wide shot of black hawk mountain"
            />
            <p>Hobbies</p>
            <ul>
                <li>Avid rock climber</li>
                <li>Power lifting/ going to the gym</li>
                <li>Playing video games</li>
                <li>Cooking</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <div>
                <Row>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "50%",
                            height: "100px",
                        }}
                    >
                        Left
                    </Col>
                    <Col
                        style={{
                            backgroundColor: "red",
                            width: "50%",
                            height: "100px",
                        }}
                    >
                        Right
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default App;
