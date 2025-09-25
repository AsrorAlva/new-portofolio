import React from 'react';
import { Progress } from './ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import * as Icons from 'lucide-react';
import portfolioData from '../data/portfolioData.json';

const Skills = () => {
  const { skills } = portfolioData;

const getIcon = (iconName) => {
  // Kalau path diawali dengan "/" → render gambar dari /public
  if (iconName && iconName.startsWith("/")) {
    return (
      <img
        src={iconName}
        alt={iconName}
        className="w-6 h-6 object-contain"
      />
    );
  }

  // Kalau bukan → pakai lucide-react
  const IconComponent = Icons[iconName];
  return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
};


  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A combination of technical expertise and essential soft skills that drive successful project outcomes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <Card className="p-6 border-2 border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icons.Code className="w-5 h-5 text-white" />
                </div>
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.hardSkills.map((skill, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="font-medium text-slate-900">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="p-6 border-2 border-slate-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-semibold text-slate-900 flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <Icons.Heart className="w-5 h-5 text-white" />
                </div>
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {skills.softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                      {getIcon(skill.icon)}
                    </div>
                    <span className="font-medium text-slate-900 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white p-6 rounded-xl shadow-md">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{skills.hardSkills.length}</div>
              <div className="text-sm text-slate-600">Technical Skills</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">{skills.softSkills.length}</div>
              <div className="text-sm text-slate-600">Soft Skills</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">1+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;