import Headder from "./Headder";
import Menubar from "./Menubar";
import "./App.css";
import Home from "./Components/Home";
import Personal from "./Components/Personal";
import Educational from "./Components/Educational";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Certificates from "./Components/Certificates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Headder></Headder>
        <Menubar></Menubar>
        <Routes>
          {/* <Route path="/" element={<App></App>}></Route> */}
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Personal" element={<Personal></Personal>}></Route>
          <Route
            path="/Educational"
            element={<Educational></Educational>}
          ></Route>
          <Route path="/Projects" element={<Projects></Projects>}></Route>
          <Route path="/Skills" element={<Skills></Skills>}></Route>
          <Route
            path="/Certificates"
            element={<Certificates></Certificates>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
