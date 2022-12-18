import './App.css';


import Navbar from "./pages/Navbar";      // <== IMPORT
import HomePage from "./pages/HomePage";       // <== IMPORT
import AboutPage from "./pages/AboutPage";     // <== IMPORT
import ProjectsPage from "./pages/ProjectsPage";   // <== IMPORT
import ErrorPage from "./pages/ErrorPage";         // <== IMPORT

import HomePageWithNavigate from "./pages/HomePageWithNavigate";  // <== IMPORT 

import projectsData from "./projects-data.json";    // <== IMPORT


import { Routes, Route } from "react-router-dom";  // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
      <Route  path="/" element={<HomePageWithNavigate />} />   {/* <== ADD */}

        {/* <Route path="/" element={<HomePage />} />  */}
        <Route path="/about" element={<AboutPage />} />
        <Route 
          path="/projects" 
          element={ <ProjectsPage projects={projectsData} /> } 
        />

        <Route path="*" element={ <ErrorPage /> } />   {/*  <== ADD */}        

      </Routes>
      
    </div>
  );
}

export default App;
