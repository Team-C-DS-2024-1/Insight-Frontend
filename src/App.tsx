import Main from "./components/Main";
import Test from "./components/Test";
import Browser from './components/Browser';

//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Browser setTitle={(x) => console.log(x)} setCategory={(x) => console.log(x)}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
