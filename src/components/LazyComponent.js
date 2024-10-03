import React, { Suspense, lazy } from "react";

const LazyImage = lazy(() => import("./LazyImage"));

const LazyComponent = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyImage />
  </Suspense>
);

export default LazyComponent;
