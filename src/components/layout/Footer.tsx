export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/60 text-sm">
          © {new Date().getFullYear()} Zoan Thi Bang. All rights reserved.
        </p>
      </div>
    </footer>
  );
}