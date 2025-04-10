import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/assets/CSS/style.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk publishable key. Check your .env file.");
}

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={clerkPubKey}>
    <StrictMode>
      <App />
    </StrictMode>
  </ClerkProvider>
);
