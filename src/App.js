import Footer from "./components/Footer/footer";
import Frontpage from "./components/Frontpage/frontpage";

import Gallaria from "./components/Projects/Gallaria";
import Terrateas from "./components/Projects/Terrateas";
import Capwizzards from "./components/Projects/Capwizzards";
import Projectmanager from "./components/Projects/Projectmanager";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
      <Routes>
          <Route path='/' element={<Frontpage />}/>
          <Route path="/gallaria" element={<Gallaria />} />
          <Route path="/terrateas" element={<Terrateas />} />
          <Route path="/capwizzards" element={<Capwizzards />} />
          <Route path="/projectmanager" element={<Projectmanager />} />
        </Routes>
  
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
