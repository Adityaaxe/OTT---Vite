// components/SplashScreen.jsx
import React from "react";
import { Loader2 } from "lucide-react"; // Optional spinner icon

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-12 w-12 animate-spin text-red-500" />
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}
