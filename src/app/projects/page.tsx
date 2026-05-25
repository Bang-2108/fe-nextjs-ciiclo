export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center pt-24 text-center px-4">
      <div className="space-y-4">
        <div className="text-6xl mb-4">📁</div>
        <h1 className="text-4xl font-bold tracking-tight">
          My <span className="text-primary-accent">Projects</span>
        </h1>
        <p className="text-text-muted text-lg max-w-md mx-auto leading-relaxed">
          The project management section is currently being set up and will soon sync data from the Admin CMS.
        </p>
        <div className="pt-4">
          <a 
            href="/" 
            className="bg-primary-accent hover:bg-primary-hover text-black font-bold px-8 py-3 rounded-xl transition-all inline-block text-sm"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}