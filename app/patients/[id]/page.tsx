import { notFound } from "next/navigation";
import Navbar from "@/components/citaflow/Navbar";
import PatientCard from "@/components/citaflow/PatientCard";
import { patientTimelines, patients } from "@/lib/mock-data";

type PatientDetailPageProps = {
  params: {
    id: string;
  };
};

export default function PatientDetailPage({ params }: PatientDetailPageProps) {
  const patient = patients.find((p) => p.id === params.id);

  if (!patient) {
    notFound();
  }

  const timeline = patientTimelines[patient.id] || [];

  return (
    <main className="min-h-screen bg-[#F8F7F4]">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <p className="text-sm font-medium text-green-900">Detalle</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-black">
            Seguimiento del paciente
          </h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Consulta el estado, historial de contacto y próximos pasos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.5fr_0.9fr]">
          <PatientCard patient={patient} />

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold tracking-tight">
                Historial de seguimiento
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Eventos importantes del proceso del paciente.
              </p>
            </div>

            <div className="mt-6 space-y-5">
              {timeline.length > 0 ? (
                timeline.map((event, index) => (
                  <div key={event.id} className="relative pl-6">
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-[7px] top-6 h-full w-px bg-slate-200" />
                    )}

                    <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-white bg-green-900 shadow" />

                    <div className="rounded-2xl border bg-[#F8F7F4] p-4">
                      <p className="text-sm font-semibold text-black">
                        {event.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {event.description}
                      </p>
                      <p className="mt-3 text-xs font-medium text-slate-500">
                        {event.date}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border bg-[#F8F7F4] p-4">
                  <p className="text-sm text-muted-foreground">
                    No hay eventos registrados todavía para este paciente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}