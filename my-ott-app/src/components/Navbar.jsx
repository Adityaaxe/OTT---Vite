import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"; // Clerk auth imports

const Navbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle search input change
  const handleSearch = async (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.length > 2) { // Only search if input is at least 3 characters
      try {
        const response = await axios.get(`http://localhost:5000/api/search?query=${query}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  // Clear search bar
  const clearSearch = () => {
    setSearchTerm("");
    setSearchResults([]);
  };

  // Handle selecting a search result
  const handleSelectResult = (result) => {
    navigate(`/watch/${result.id}`); // Example navigation
    clearSearch();
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center relative">
      {/* Left Side - Logo */}
      <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate("/home")}>
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">UniCon</h1>
      </div>

      {/* Right Side - Search & Auth */}
      <div className="flex items-center gap-2">
        {/* Search Bar */}
        <div className="relative flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-white w-48"
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && (
            <IoClose className="text-gray-400 cursor-pointer" onClick={clearSearch} />
          )}
        </div>

        {/* Clerk Authentication */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-black px-4 py-2 rounded-full flex items-center cursor-pointer">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      {/* Search Results Dropdown */}
      {searchResults.length > 0 && (
      <div className="absolute top-full right-14 w-66 bg-gray-800 rounded-lg shadow-md overflow-hidden z-50 search-dropdown">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-700 cursor-pointer flex items-center gap-2"
              onClick={() => handleSelectResult(result)}
            >
              <img
                src={result.img}
                alt={result.title}
                className="w-10 h-10 rounded-md object-cover"
              />
              <div>
                <h3 className="text-white text-sm font-semibold">{result.title}</h3>
                <p className="text-gray-400 text-xs">{result.genre}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
