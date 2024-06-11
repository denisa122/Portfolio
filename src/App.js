import Footer from "./components/Footer/footer";
import Frontpage from "./components/Frontpage/Frontpage";

import Gallaria from "./components/Projects/Gallaria";
import Terrateas from "./components/Projects/Terrateas";
import Capwizzards from "./components/Projects/Capwizzards";
import Projectmanager from "./components/Projects/Projectmanager";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("App component rendered");
  
  return (
    <HashRouter>
      <div className="App">
        
      <Routes>
          <Route path="/" element={<Frontpage />} /> 
          <Route path="/gallaria" element={<Gallaria />} />
          <Route path="/terrateas" element={<Terrateas />} />
          <Route path="/capwizzards" element={<Capwizzards />} />
          <Route path="/projectmanager" element={<Projectmanager />} />
        </Routes>
  
        <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
