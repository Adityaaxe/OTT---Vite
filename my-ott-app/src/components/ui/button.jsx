// components/ui/button.jsx
export function Button({ children, className, variant = "solid", ...props }) {
    const baseStyles = "px-6 py-2 rounded-full font-medium transition";
    const variants = {
      solid: "bg-red-400 text-white hover:bg-red-500",
      outline: "border border-red-400 text-red-400 hover:bg-red-50",
    };
    
    return (
      <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  }
  