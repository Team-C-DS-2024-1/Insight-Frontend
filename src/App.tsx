import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookInfo from "./pages/BookInfo";
import DiscoverBooks from "./pages/DiscoverBooks";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books/:isbn" element={<BookInfo/>} />
        <Route path="/discover" element={<DiscoverBooks/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
