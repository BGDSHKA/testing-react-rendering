import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

const Wrapper = () => {
  return (
    <div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default Wrapper;
