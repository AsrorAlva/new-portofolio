import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function Resume() {
  return (
    <div className="flex items-center gap-4 justify-center min-h-screen bg-slate-50">
      <Button asChild className="transition-all duration-200 hover:scale-105 hover:shadow-md">
        <Link to="/resume-it">Resume IT</Link>
      </Button>

      <Button variant="secondary" asChild className="transition-all duration-200 hover:scale-105 hover:shadow-md">
        <Link to="/resume-non-it">Resume General</Link>
      </Button>
    </div>
  );
}

export default Resume;
