import React, { useState, useEffect } from "react";

const About = () => {
  const [count, setCount] = useState(1);
  const [thing, setThing] = useState(100);

  useEffect(() => {
    setThing(thing-1)
    console.log("Use Effect Running");
  }, [count]);
  return (
    <div className="container bg-red ">
      <div className="bg-blue display-flex fd-column jc-center ai-center">
        <div>{count}</div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <div>{thing}</div>
      </div>
    </div>
  );
};

export default About;
