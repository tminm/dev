import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routers from "./router";

const App = memo(() => {
  return (
    <div>
      <div className="main">{useRoutes(routers)}</div>
    </div>
  );
});

export default App;
