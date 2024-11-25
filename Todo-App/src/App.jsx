import "./App.css";
import Navbar from "./Components/Navbar";
// import Header from "./Components/Header";
// import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>{/* <Route path="/" element={<Navbar />} /> */}</Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
