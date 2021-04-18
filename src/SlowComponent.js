import React from "react";

function SlowComponent() {
  let now = Date.now();
  while (Date.now() - now < 100) {}
  return <div>Slow component here!</div>;
}

export default SlowComponent;
