import React from "react";
import Presentation from "./likeButton/Presentation";
import GlobalStyles from "./theme/GlobalStyles";

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyles />
      <Presentation />
    </>
  );
};

export default App;
