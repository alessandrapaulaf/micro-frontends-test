import ReactDOM from "react-dom/client";

import "./index.css";
import { Suspense } from "react";
import React from "react";

const Button = React.lazy(() => import("button_mf/Button"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: my-mf-apps</div>
      <div>Framework: react-19</div>
      <Button />
    </div>
  </Suspense>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
