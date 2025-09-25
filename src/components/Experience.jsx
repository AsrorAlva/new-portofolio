import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Experience = () => {
  const { experience } = portfolioData;

  const getTypeColor = (type) => {
    const colors = {
      'Internship': 'bg-green-100 text-green-800 border-green-200',
      'Research': 'bg-purple-100 text-purple-800 border-purple-200',
      'Freelance': 'bg-blue-100 text-blue-800 border-blue-200',
      'Leadership': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[type] || 'bg-slate-100 text-slate-800 border-slate-200';
  };

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A journey through internships, research, leadership roles, and freelance projects that have shaped my expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-slate-200 hover:border-blue-200">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-blue-600 font-medium mb-1">
                            {exp.company}
                          </p>
                        </div>
                        <Badge className={`${getTypeColor(exp.type)} border`}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Meta Information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 mb-3">
                          <Briefcase className="w-4 h-4 text-blue-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-slate-600">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Empty space for alternating layout on desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white p-6 rounded-xl shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{experience.length}</div>
              <div className="text-sm text-slate-600">Experiences</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">2+</div>
              <div className="text-sm text-slate-600">Years Active</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">4</div>
              <div className="text-sm text-slate-600">Different Roles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;