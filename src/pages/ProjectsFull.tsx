
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function ProjectsFull() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 px-6 md:px-12 lg:px-32">
        <div className="max-w-4xl mx-auto glassmorphism p-10 rounded-2xl mt-24">
          <h1 className="gradient-text text-4xl font-bold mb-8">Projects</h1>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Interview Tracker</h2>
            <p className="text-white/80 mb-2">A Flask application to split students for follow-up using input from Excel/Google Sheets, streamlining interview preparation and tracking.</p>
          </div>
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-2">Fashion Brand Data Pipeline</h2>
            <p className="text-white/80 mb-2">Comprehensive data pipeline using Airflow, AWS, Snowflake, and SQL Server, designed for high-volume data processing for insights in the fashion B2B2C sector.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">MDHS Maverick</h2>
            <p className="text-white/80">Internal assistant tool for the MDHS portal to explain usage and documentation, improving team efficiency and onboarding.</p>
          </div>
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
