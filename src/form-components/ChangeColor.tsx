import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];
    const [colorIndex, setColorIndex] = useState(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <form>
                {COLORS.map((color) => (
                    <Form.Check
                        key={color}
                        type="radio"
                        name="color"
                        label={color}
                        value={color}
                        checked={colorIndex === color}
                        onChange={(x) => {
                            setColorIndex(x.target.value);
                        }}
                    />
                ))}
            </form>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: colorIndex,
                    textAlign: "center",
                    width: "100px",
                    height: "100px",
                    lineHeight: "100px",
                    color: "white",
                    marginTop: "10px",
                }}
            >
                {colorIndex}
            </div>
        </div>
    );
}
