import React, {useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    const increaseNumber = () => setNumber(number + 1);
    const decreaseNumber = () => setNumber(number - 1);

    return (
        <>
            <div className="counter-container">
                <button className="btn-decrease" onClick={decreaseNumber}>-</button>
                <p className="my-p">{number}</p>
                <button className="btn-increase" onClick={increaseNumber}>+</button>
            </div>
        </>
    );
}

export default Counter