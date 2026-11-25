import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-navy-950">
      <Navbar />
      <Hero />
    </div>
  );
}