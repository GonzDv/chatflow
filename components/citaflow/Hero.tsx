import { Button } from "../ui/button";
import { ArrowRightIcon, ArrowUpIcon, Dot } from "lucide-react";

const patients = [
  {
    name: "Juan Perez",
    typeConsultation: "Psicología",
    time: "10:00 AM",
    status: "Confirmada",
  },
  {
    name: "Maria Lopez",
    typeConsultation: "Ansiedad",
    time: "11:00 AM",
    status: "Agendada",
  },
  {
    name: "Carlos Gomez",
    typeConsultation: "Depresión",
    time: "12:00 PM",
    status: "Reagendar",
  },
] as const;

const statusColor = {
  Confirmada: "text-green-700 bg-green-100",
  Agendada: "text-blue-700 bg-blue-100",
  Reagendar: "text-orange-700 bg-orange-100",
} as const;

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
          {/* Tag */}
          <div className="mb-8 flex w-fit items-center rounded-full border border-green-700 bg-green-100/60 pr-3 pl-1 py-1">
            <Dot size={22} className="text-green-900" />
            <span className="text-sm font-semibold text-green-900">
              Para psicólogos, terapeutas y consultorios
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-light leading-tight tracking-tight text-black md:text-6xl xl:text-7xl">
            Organiza citas y <br />
            seguimiento sin <br />
            perder <span className="italic text-green-900">pacientes</span>
          </h1>

          {/* Subtitle */}
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-500">
            CitaFlow convierte el caos de WhatsApp en un proceso claro,
            profesional y más fácil de seguir. Un panel simple para
            profesionales que trabajan por cita.
          </p>

          {/* Buttons */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row">
            <Button className="h-11 bg-green-900 px-6 hover:bg-green-950">
              Solicitar cita demo
              <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-11 px-6">
              Ver panel
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center">
              <div className="relative z-10 -mr-2 rounded-full border-2 border-white bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-900">
                VM
              </div>
              <div className="relative z-20 -mr-2 rounded-full border-2 border-white bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-900">
                AF
              </div>
              <div className="relative z-30 rounded-full border-2 border-white bg-green-100 px-2 py-1 text-[10px] font-semibold text-green-900">
                LC
              </div>
            </div>

            <p className="text-sm text-gray-500">
              <span className="font-semibold text-black">
                +120 profesionales
              </span>{" "}
              ya organizan sus citas{" "}
              <span className="font-semibold text-green-900">con CitaFlow</span>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-center  px-6 py-16 lg:px-12">
          <div className="w-full max-w-xl space-y-5 bg-[#F5F2EE] rounded-3xl p-10">
            {/* Top stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex h-36 flex-col justify-center rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Citas de hoy
                </span>
                <span className="mt-3 text-4xl font-semibold">12</span>
                <div className="mt-3 flex items-center gap-2">
                  <ArrowUpIcon size={12} className="text-green-900" />
                  <p className="text-xs font-semibold text-green-900">
                    confirmadas
                  </p>
                </div>
              </div>

              <div className="flex h-36 flex-col justify-center rounded-2xl bg-white p-5 shadow-sm">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Seguimientos
                </span>
                <span className="mt-3 text-4xl font-semibold">3</span>
                <p className="mt-3 text-xs font-semibold text-orange-700">
                  pendientes
                </p>
              </div>
            </div>

            {/* Mini patient list */}
            <div className="space-y-4">
              {patients.map((patient) => (
                <div
                  key={patient.name}
                  className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
                >
                  <div
                    className={`${statusColor[patient.status]} flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold`}
                  >
                    {getInitials(patient.name)}
                  </div>

                  <div className="flex-1">
                    <span className="block text-sm font-semibold text-black">
                      {patient.name}
                    </span>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                      <p>{patient.typeConsultation}</p>
                      <span>•</span>
                      <p>{patient.time}</p>
                    </div>
                  </div>

                  <p
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide ${
                      patient.status === "Reagendar"
                        ? "bg-red-100 text-red-700"
                        : statusColor[patient.status]
                    }`}
                  >
                    {patient.status}
                  </p>
                </div>
              ))}
            </div>

            {/* Automation example */}
            <div className="rounded-2xl border border-green-700 bg-green-100/60 p-5 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-green-900">
                Siguiente acción
              </span>
              <p className="mt-2 text-sm leading-relaxed text-black">
                Enviar recordatorio a Juan Perez — sin respuesta desde hace 45h
              </p>
              <Button className="mt-4 w-full bg-green-900 hover:bg-green-950">
                Enviar ahora
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}