// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-4">
      <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
      <p className="text-xl text-slate-600 mb-6">Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 flex items-center gap-2 rounded-lg">
          <ArrowLeft className="w-4 h-4" /> Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
