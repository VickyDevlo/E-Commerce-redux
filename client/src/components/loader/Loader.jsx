const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes wave {
            0% { height: 8px; }
            50% { height: 40px; }
            100% { height: 8px; }
          }
          .animate-wave {
            animation: wave 1s ease-in-out infinite;
          }
        `}
      </style>

      <div className="flex justify-center h-24 w-72">
        <div className="flex space-x-2">
          <span className="w-5 h-2 bg-blue-500 rounded-md animate-wave"></span>
          <span className="w-5 h-2 bg-blue-500 rounded-md animate-wave" style={{ animationDelay: "0.1s" }}></span>
          <span className="w-5 h-2 bg-blue-500 rounded-md animate-wave" style={{ animationDelay: "0.2s" }}></span>
          <span className="w-5 h-2 bg-blue-500 rounded-md animate-wave" style={{ animationDelay: "0.3s" }}></span>
        </div>
      </div>
    </>
  );
};

export default Loader;
