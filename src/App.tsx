import React from "react";
import "./styles/style.scss";

import { Home, About, Contact } from "./pages";

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default App;
