import React from "react";

import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { TodoProvider } from "./contexts/TodoContext";

const App = () => {
  return (
    <>
      <TodoProvider>
        <MainContainer />
        <Footer />
      </TodoProvider>
    </>
  );
};

export default App;
