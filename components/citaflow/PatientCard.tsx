/*
Resumen profundo de un paciente

Cuando el usuario entra al detalle, necesita ver:

quién es
qué pidió
en qué estado va
qué se hizo
qué sigue

Encabezado:
nombre
estado
teléfono
próxima cita

Acciones:
confirmar
reagendar
marcar completado (opcional)

Resumen:
motivo
fecha deseada
hora deseada
notas
canal de entrada

type PatientCardProps = {
  patient: Patient;
};
*/
import { CalendarDays, MessageCircle, Phone, StickyNote, UserRound } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Patient } from "@/lib/types";
import StatusBadge from "@/components/citaflow/StatusBadge";

type PatientCardProps = {
  patient: Patient;
};

export default function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card className="rounded-3xl border bg-white shadow-sm">
      <CardHeader className="border-b pb-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-medium text-green-900">Paciente</p>
            <CardTitle className="mt-2 text-3xl tracking-tight">
              {patient.name}
            </CardTitle>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{patient.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                <span>{patient.nextAppointment}</span>
              </div>
            </div>
          </div>

          <StatusBadge status={patient.status} />
        </div>
      </CardHeader>

      <CardContent className="space-y-8 p-6">
        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="bg-green-900 hover:bg-green-950">
            Confirmar cita
          </Button>
          <Button variant="outline">Reagendar</Button>
          <Button variant="outline">Marcar completado</Button>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-2xl border bg-[#F8F7F4] p-5">
            <div className="mb-3 flex items-center gap-2">
              <UserRound className="h-4 w-4 text-slate-600" />
              <p className="text-sm font-semibold text-black">Motivo</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {patient.reason}
            </p>
          </div>

          <div className="rounded-2xl border bg-[#F8F7F4] p-5">
            <div className="mb-3 flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-slate-600" />
              <p className="text-sm font-semibold text-black">
                Fecha y hora deseada
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {patient.desiredDate} — {patient.desiredTime}
            </p>
          </div>

          <div className="rounded-2xl border bg-[#F8F7F4] p-5">
            <div className="mb-3 flex items-center gap-2">
              <StickyNote className="h-4 w-4 text-slate-600" />
              <p className="text-sm font-semibold text-black">Notas</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {patient.notes || "Sin notas registradas."}
            </p>
          </div>

          <div className="rounded-2xl border bg-[#F8F7F4] p-5">
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-slate-600" />
              <p className="text-sm font-semibold text-black">Canal de entrada</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {patient.source || "No especificado"}
            </p>
          </div>
        </div>

        {/* Last action */}
        <div className="rounded-2xl border border-green-700 bg-green-100/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-900">
            Última acción registrada
          </p>
          <p className="mt-2 text-sm text-black">{patient.lastAction}</p>
        </div>
      </CardContent>
    </Card>
  );
}