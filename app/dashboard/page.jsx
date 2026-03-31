/*
Componentes
StatsCards
StatisBadge
PatientTable
*/

import Navbar from "@/components/citaflow/Navbar";
import StatsCards from "../../components/citaflow/StatsCard";
import PatientTable from "@/components/citaflow/PatientTable";
import { dashboardStats, patients } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-medium text-green-900">Dashboard</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">
            Controla solicitudes, citas y seguimiento
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Visualiza pacientes, solicitudes y estados del proceso en un solo
            lugar.
          </p>
        </div>

        <div className="space-y-8">
          <StatsCards stats={dashboardStats} />
          <PatientTable patients={patients} />
        </div>
      </section>
    </main>
  );
}