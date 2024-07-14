import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import All from "./Pages/All";
import Career from "./Pages/Career";
import CyberSecurity from "./Pages/CyberSecurity";
import DataScience from "./Pages/DataScience";
import FullStack from "./Pages/FullStack";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/career" element={<Career />} />
          <Route path="/cyberSecurity" element={<CyberSecurity />} />
          <Route path="/dataScience" element={<DataScience />} />
          <Route path="/fullStack" element={<FullStack />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
