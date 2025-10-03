import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Filter, Github, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  const { projects } = portfolioData;
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = React.useState('All');


  const categories = ['All', ...new Set(projects.flatMap(p => p.category))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.includes(selectedCategory));


  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:translate-x-[-2px] transition-transform duration-300" />
            <span className="text-slate-600 group-hover:text-blue-600 transition-colors">Back to Home</span>
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 text-center flex-1">All Projects</h1>
          <div className="w-24"></div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-slate-600" />
            <h2 className="text-lg font-semibold text-slate-900">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={`${selectedCategory === cat ? 'bg-blue-600 text-white' : 'border-slate-300 hover:border-blue-500 hover:text-blue-600'}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-slate-200 hover:border-blue-200 bg-white cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {Array.isArray(project.category) ? project.category[0] : project.category}
                    </Badge>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-blue-200 text-blue-700 hover:bg-blue-50">{tech}</Badge>
                  ))}
                </div>

                {/* Buttons Code & Demo */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-300 hover:border-blue-500 hover:text-blue-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.githubUrl) {
                        window.open(project.githubUrl, '_blank');
                      } else {
                        navigate('/notfound');
                      }
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" /> Code
                  </Button>

                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (project.liveUrl) {
                        window.open(project.liveUrl, '_blank');
                      } else {
                        navigate('/notfound');
                      }
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> Demo
                  </Button>
                </div>
              </CardContent>
            </Card>

          ))}

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
