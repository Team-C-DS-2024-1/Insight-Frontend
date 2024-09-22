import Main from "./components/Main";
import Test from "./components/Test";

//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import DiscoverBooks from "./pages/DiscoverBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/BookInfo" element={<BookInfo/>} />
        <Route path="/discover" element={<DiscoverBooks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
