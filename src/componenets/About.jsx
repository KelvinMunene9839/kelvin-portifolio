import React from 'react';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-dark-50 mb-16 animate-fade-in">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                <img src={profileImg} alt="Kelvin Munene" className="w-full h-full object-cover rounded-full" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-12 h-12 text-dark-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bio and Interests */}
          <div className="animate-slide-up animation-delay-200">
            <p className="text-dark-300 text-xl mb-8 leading-relaxed">
              I'm Kelvin Munene, a Full Stack Developer based in Kigali, Rwanda. I specialize in building scalable and efficient applications using modern technologies like Flutter for mobile, React for frontend, Node.js and Flask for backend, and Firebase for real-time data management. Passionate about creating robust solutions that solve real-world problems.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-dark-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-dark-50 font-semibold text-lg mb-1">Investor Management System</h3>
                  <p className="text-dark-400">web based react app investor platform with Node.js backend for comprehensive investor management.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-dark-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-dark-50 font-semibold text-lg mb-1">Expenses Management App</h3>
                  <p className="text-dark-400">Mobile app for tracking expenses for individuals or companies using Flutter and Firebase.</p>
                </div>
              </div>


            </div>

            {/* Education */}
            <div className="pt-8 border-t border-dark-700">
              <h3 className="text-2xl font-semibold text-dark-50 mb-4">Education</h3>
              <div className="bg-dark-700 p-6 rounded-lg">
                <h4 className="text-dark-50 font-medium mb-2">High School Diploma in Software Development</h4>
                <p className="text-dark-300 mb-2">École Secondaire Saint Joseph La Travailleuse</p>
                <p className="text-dark-400">2023 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
