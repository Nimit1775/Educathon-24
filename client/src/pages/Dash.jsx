import { UserCircle, MessageCircle, GraduationCap, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const services = [
  {
    name: 'Chatbot',
    description: 'Get instant assistance with our intelligent chatbot.',
    icon: <MessageCircle className="h-6 w-6 text-zinc-500" />,
    route: '/chat', // Add the route for this service
  },
  {
    name: 'University Recommendation',
    description: 'Find the best universities based on your profile.',
    icon: <GraduationCap className="h-6 w-6 text-zinc-500" />,
    route: '/recommend', // Add the route for this service
  },
  {
    name: 'Financial Calculator',
    description: 'Easily calculate and manage your finances.',
    icon: <Calculator className="h-6 w-6 text-zinc-500" />,
    route: '/finance', // Add the route for this service
  },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm border-b border-zinc-200 p-4 flex items-center justify-between">
        {/* App Logo and Name */}
        <div className="flex items-center space-x-3">
          <img 
            src="/logo.jpg" 
            alt="Odyssey Logo" 
            className="h-10 w-10 object-contain" // Increased from h-8 w-8 to h-10 w-10
          />
          <span className="text-xl font-light italic tracking-wider text-zinc-800">ODYSSEY</span>
        </div>
        {/* Profile Icon */}
        <UserCircle className="h-8 w-8 text-zinc-600 hover:text-zinc-800 transition-colors duration-200 cursor-pointer" />
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-light text-zinc-800 mb-6 tracking-wide">Available Services</h1>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.route} key={index}> {/* Wrap each service card with a Link */}
              <div
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 hover:shadow-md transition-all duration-300 flex flex-col items-start"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-zinc-50 rounded-full mb-4">
                  {service.icon}
                </div>
                <h2 className="text-lg font-medium text-zinc-800 mb-2">{service.name}</h2>
                <p className="text-zinc-600 text-sm">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
