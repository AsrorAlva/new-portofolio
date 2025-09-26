import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import Footer from '../components/Footer';
import portfolioData from '../data/portfolioData.json';
import { Badge } from '../components/ui/badge';

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id);
  const project = portfolioData.projects.find(p => p.id === projectId);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    import(`../data/projectDetails/${id}.json`)
      .then((data) => setDetails(data))
      .catch(() => setDetails(null));
  }, [id]);

  if (!project) return <div className="p-12 text-center text-red-500">Project not found</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <Link to="/projects" className="flex items-center gap-2 text-blue-600 hover:underline">
            <ArrowLeft className="w-5 h-5" /> Back to Projects
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4 text-slate-900">{project.title}</h1>
        <p className="text-slate-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <Badge key={idx} variant="outline" className="text-xs border-blue-200 text-blue-700">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Detail JSON */}
        {details && (
          <>
            {details.longDescription && <p className="text-slate-600 mb-4">{details.longDescription}</p>}
            {details.features && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Features / Responsibilities:</h3>
                <ul className="list-disc list-inside text-slate-600">
                  {details.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
            {details.screenshots && (
              <div className="flex flex-wrap gap-4 mt-6">
                {details.screenshots.map((img, idx) => (
                  <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} className="w-full md:w-1/2 rounded-lg shadow-md" />
                ))}
              </div>
            )}
          </>
        )}

        {/* Links */}
        <div className="flex gap-4 mt-6">
          <Button
            variant="outline"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            View Code
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            Live Demo
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
