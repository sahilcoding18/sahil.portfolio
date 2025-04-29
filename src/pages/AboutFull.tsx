import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function AboutFull() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 px-6 md:px-12 lg:px-32">
        <div className="max-w-3xl mx-auto glassmorphism p-10 rounded-2xl mt-24">
          <h1 className="gradient-text text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl mb-8 text-white/80">
            <span className="text-white font-bold text-2xl">Hi, I'm Sahil Shaik</span><br /><br />

            I'm currently working as a Senior Product Analyst at FactSet (since September 2024), where I'm into product management, working with engineers and cross functional teams to design scalable data pipelines, uncovering insights, and collaborating across teams to turn complex data into meaningful solutions.<br /><br />

            I graduated from CMR College of Engineering and Technology, where I pursued a degree with a minor in Artificial Intelligence & Machine Learning. During my time there, I served as the Student Council Board Head, leading various student-driven initiatives and campus events that helped shape a vibrant, collaborative environment.<br /><br />

            As a proud cadet in the National Cadet Corps (NCC), I successfully completed my C Certificate, gaining invaluable discipline, leadership, and teamwork experience.<br /><br />

            Outside of work, you'll find me chasing sunsets, exploring beaches and mountains, and cooking up a good Hyderabadi biryani.

            Languages I speak: English, Telugu, Hindi
          </p>
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
