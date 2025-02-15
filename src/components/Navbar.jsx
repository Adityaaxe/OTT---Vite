import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">Orbstar</h1>
      </div>

      {/* Center - Menu Links */}
      <ul className="flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/genres" className="hover:text-gray-400">Genres</Link></li>
        <li><Link to="/subscription" className="hover:text-gray-400">Subscription</Link></li>
      </ul>

      {/* Right Side - Search & Login */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
          <FaSearch className="text-gray-400" />
          <input type="text" placeholder="Search" className="bg-transparent outline-none text-white" />
        </div>
        <button 
          className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          <FaUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
