import React from 'react';
import { GraduationCap, Target, User } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import portfolioData from '../data/portfolioData.json';

const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900">Who I Am</h3>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              {about.description}
            </p>

            <div className="pt-6">
              <h4 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Career Goals
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {about.careerGoals}
              </p>
            </div>
          </div>

          {/* Right Side - Education Card */}
          <div className="space-y-6">
            <Card className="p-6 border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">Education</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">
                      {about.education.degree}
                    </h4>
                    <p className="text-lg text-blue-600 font-medium mb-1">
                      {about.education.university}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">{about.education.year}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {about.education.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">3.58</div>
                <div className="text-slate-600 font-medium">GPA</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-slate-600 font-medium">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;