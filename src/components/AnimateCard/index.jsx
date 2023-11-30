import React, { useState } from "react";
import { Animate } from "react-move";
import CardSection from "../CardSection"

const MovingDiv = () => {
  // Create a state variable for the data prop
  const [data, setData] = useState([{ key: "div", x: 0 }]);

  // Define a function that updates the data prop
  const moveDiv = (value) => {
    setData([{ key: "div", x: value }]);
  };

  // Define a function that renders the div
  const renderDiv = (data) => {
    return (        
      <div key={'asd'}
        style={{
            width: "100px",
            height: "100px",
            backgroundColor: "blue",
            transform: `translateX(${data.x}px)`,
            transition: 'transform 1s'
        }}
        >
      </div>
    );
  };

  return (
    <div>
      <button onClick={() => moveDiv(2000)}>Move</button>
      <button onClick={() => moveDiv(0)}>back</button>
      <Animate
        data={data}
        start={(data) => ({
          x: 0, // The initial position of the div
        })}
        update={(data) => ({
          x: [data.x, 1000], // The final position of the div and the duration of the animation
        })}
        enter={(data) => ({
          x: [0], // The loop position of the div
        })}
      >
        {() => {
          return <div key={'div'}>{data.map(renderDiv)}</div>;
        }}
      </Animate>
    </div>
  );
};

export default MovingDiv;