import React, { memo, useState } from "react";

export default memo(function TestComponentClass2() {
  return <div>test</div>;
});

export const TestComponentClass3 = () => {
  const render = () => {
    for (let i = 0; i < 1000; i++) {
      return <TestComponentClass />;
    }
  };

  return <div>{render()}</div>;
};

export const TestComponentClass = () => {
  const [state, setState] = useState("");
  return (
    <div>
      {setState("")}
      <TestComponentClass2 state={state} />
    </div>
  );
};
