const TechBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default TechBackground;