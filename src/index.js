import React from "react";
import ReactDOM from "react-dom/client";
const Main = React.lazy(() => import("./pages/main"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
