import { Button } from "../components/ui/button";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import PageSetup from "../components/PageSetup";

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  // Redirect to home if logged in
  if (isSignedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <PageSetup>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="bg-white/5 bg-opacity-2 p-8 rounded-3xl text-center z-9 shadow-lg backdrop-blur-xl max-w-2xl top-15">
          <h1 className="text-4xl font-bold text-white">TaskEaze</h1>
          <p className="text-gray-400 mt-2">Your ultimate productivity companion</p>

          <div className="flex justify-center gap-4 my-6">
            
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <SignInButton>
              <Button className="bg-red-600 text-white px-6 py-2 rounded-full">
                Get Started
              </Button>
            </SignInButton>
            <Button variant="outline" className="border-red-600 text-red-400 px-6 py-2 rounded-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </PageSetup>
  );
}
