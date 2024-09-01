import { useState } from "react";

import "./App.css";
import Header from "./Component/Header/Header";
import Blog from "./Component/Header/Blog/Blog";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Header/>
  <Blog/>
  
  </>;
}

export default App;
