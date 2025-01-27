const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative">
      <div className="max-w-md text-center flex flex-col items-center gap-8">
        {/* Logo Image Container */}
        <div className="animate-bounce w-full flex justify-center">
          <img 
            src="/logo.png" // Update this path to your logo's location
            alt="App Logo"
            className="w-48 h-48 object-contain" // Adjust size as needed
          />
        </div>
        
        {/* Text Content */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary">{title}</h2>
          <p className="text-lg text-base-content/80">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;