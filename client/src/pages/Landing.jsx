import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageCircle, GraduationCap, Calculator } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-indigo-600" />,
      title: "AI Chatbot",
      description: "Get instant assistance with our intelligent chatbot for academic guidance."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      title: "University Recommendations",
      description: "Receive personalized university suggestions based on your profile and preferences."
    },
    {
      icon: <Calculator className="h-8 w-8 text-indigo-600" />,
      title: "Financial Planning",
      description: "Plan your educational expenses with our advanced financial calculator."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Navbar */}
      <nav className="bg-white/70 backdrop-blur-md border-b border-indigo-100 p-4 fixed w-full top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpg" 
              alt="Odyssey Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-light italic tracking-wider text-indigo-950">ODYSSEY</span>
          </div>
          <button 
            onClick={() => navigate("/login")}
            className="px-6 py-2 text-indigo-600 hover:text-indigo-700 font-medium border border-indigo-200 rounded-full hover:bg-indigo-50 transition-all duration-300"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-light text-indigo-950 mb-6 leading-tight">
            Your Academic Journey <span className="italic text-indigo-600">Starts Here</span>
          </h1>
          <p className="text-xl text-indigo-800/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Navigate your educational path with intelligent tools and personalized guidance
          </p>
          <button 
            onClick={() => navigate("/login")}
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-indigo-200"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/50"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-indigo-950 mb-4">
                  {feature.title}
                </h3>
                <p className="text-indigo-800/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;