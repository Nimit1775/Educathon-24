import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import Dash from './pages/Dash';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import Recommend from './pages/Recommend';
import Register from './pages/Register';
import Login from './pages/Login';
import Finan from './pages/Finan';
export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route   path= "/" element= {<Landing/>}  /> 
        <Route   path= "/dash" element= {<Dash/>}  /> 
        <Route   path= "/chat" element= {<Chatbot/>}  /> 
        <Route   path= "/profile" element= {<Profile/>}  /> 
        <Route   path= "/recommend" element= {<Recommend/>}  /> 
        <Route   path= "/register" element= {<Register/>}  /> 
        <Route   path= "/login" element= {<Login/>}  /> 
        <Route   path= "/finance" element= {<Finan/>}  /> 
        
      </Routes>
    </Router>
  );
}

