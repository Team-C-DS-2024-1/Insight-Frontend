import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
