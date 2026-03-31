import Navbar from "@/components/citaflow/Navbar";
import Hero from "@/components/citaflow/Hero";
import AppointmentForm from "@/components/citaflow/AppointmentForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AppointmentForm />
    </main>
  );
}