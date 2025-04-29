
export default function Footer() {
  return (
    <footer className="bg-black py-12 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-white/80 text-shadow mb-6">
            Crafted with code, curiosity, and a love for the horizon.
          </p>
          <p className="text-white/50">Made by Sahil Shaik</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </footer>
  );
}
