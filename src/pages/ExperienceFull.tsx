
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";

export default function ExperienceFull() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="py-24 px-6 md:px-12 lg:px-32">
        <div className="max-w-3xl mx-auto glassmorphism p-10 rounded-2xl mt-24">
          <h1 className="gradient-text text-4xl font-bold mb-6">Experience</h1>
          <div className="mb-10">
            <h2 className="text-2xl font-bold gradient-text mb-2">FactSet <span className="text-lg font-normal text-white/70">(Senior Product Analyst)</span></h2>
            <ul className="list-disc pl-7 space-y-2 text-white/80">
              <li>Managed end-to-end data pipelines in dev, staging, and production.</li>
              <li>Worked with Snowflake, SQL Server, Airflow, PySpark, and AWS.</li>
              <li>Optimized query performance; implemented data quality monitoring.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold gradient-text mb-2">Coding Ninjas <span className="text-lg font-normal text-white/70">(Teaching Assistant)</span></h2>
            <ul className="list-disc pl-7 space-y-2 text-white/80">
              <li>Taught Java, Data Structures and Algorithms.</li>
              <li>Mentored peers and conducted doubt-solving sessions.</li>
              <li>Provided feedback, designed exercises and materials.</li>
            </ul>
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
