
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function AchievementsFull() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 px-6 md:px-12 lg:px-32">
        <div className="max-w-2xl mx-auto glassmorphism p-10 rounded-2xl mt-24">
          <h1 className="gradient-text text-4xl font-bold mb-6">Achievements</h1>
          <ul className="list-disc pl-7 space-y-4 text-white/85">
            <li>Shortlisted – Hero Campus Challenge S8</li>
            <li>Participant/Finalist – CodeGoda, Flipkart Grid, Tata Imagination Challenge</li>
            <li>Winner – Pollution-Free Diwali Debate</li>
            <li>NCC C Certificate</li>
            <li>Parade Runner-up (University Level)</li>
          </ul>
          <a
            href="/"
            className="inline-flex items-center mt-6 text-foreground font-medium text-base transition hover:text-primary/80"
          >
            Back to Home <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
