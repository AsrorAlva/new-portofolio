import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import { Toaster } from "./components/ui/toaster";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/notfound";
import Resume from "./pages/resume";
import Blog from "./pages/Blog";
import Cheetseet from "./pages/Cheetseet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} /> {/* <-- penting */}
          <Route path="*" element={<NotFound />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cheetsheet" element={<Cheetseet />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
