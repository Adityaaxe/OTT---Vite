import { Button } from "../components/ui/button";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import PageSetup from "../components/PageSetup";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  // Redirect if already signed in
  if (isSignedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <PageSetup>
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black px-4">
        <div className="bg-white/5 bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl text-center shadow-2xl max-w-2xl w-full">
          <h1 className="text-5xl font-extrabold text-white tracking-tight">
            Welcome to <span className="text-red-600">Unicon</span>
          </h1>
          <p className="text-gray-300 mt-4 text-lg font-medium">
            <span className="text-red-500 font-semibold">United Content</span> – Dive into a universe of rich, diverse, and regional stories from across the globe.
          </p>

          {/* Optional badges or highlights */}
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <span className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full">Country-Specific Content</span>
            <span className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full">Genre-Rich Library</span>
            <span className="bg-gray-800 text-white text-sm px-4 py-2 rounded-full">Movies, Series, Anime</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <SignInButton>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all">
                Get Started
              </Button>
            </SignInButton>
            <Button
              variant="outline"
              className="border-red-600 text-red-400 px-6 py-2 rounded-full text-lg hover:bg-red-600 hover:text-white transition-all"
              onClick={() => alert("Unicon is the gateway to the world's content. Stay tuned!")}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </PageSetup>
  );
}
