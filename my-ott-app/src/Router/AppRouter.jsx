import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";
import Home from "../Pages/HomePage";
import PlayerPage from "../Pages/PlayerPage";
import CountryPage from "../Pages/CountryPage";
import LandingPage from "../Pages/LandingPage";
import AdminPage from "../Pages/AdminPage";

function ProtectedRoute({ children }) {
  const { isSignedIn, isLoaded } = useAuth();
  if (!isLoaded) {
    return <SplashScreen />;
  }
  return isSignedIn ? children : <Navigate to="/" replace />;
}

function PublicOnlyRoute({ children }) {
  const { isSignedIn } = useAuth();
  return !isSignedIn ? children : <Navigate to="/home" replace />;
}

function AppRouter() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
        <Navbar />
        <Routes>
          {/* Public Route - Landing Page */}
          <Route path="/" element={
            <PublicOnlyRoute>
              <LandingPage />
            </PublicOnlyRoute>
          } />

          {/* Protected Routes */}
          <Route path="/home" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path="/watch/:id" element={
            <ProtectedRoute>
              <PlayerPage />
            </ProtectedRoute>
          } />
          <Route path="/country/:countryName" element={
            <ProtectedRoute>
              <CountryPage />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
