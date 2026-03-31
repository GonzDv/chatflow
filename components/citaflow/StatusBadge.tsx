/*
Usuario puede ver en 1 segundo donde esta cada paciente
Seguimiento
claridad
control

Debe mostrar:
el estado
el color correcto
una apariencia consistente
"Nuevo" -> azul o gris suave
"Contactado"-> morado o índigo suave
"Cita agendada" -> azul medio
"Confirmado" -> verde 
"Reagendar" -> naranja o rojo suave
"Completado" -> gris oscuro o verde apagado

props que recibe 
type StatusBadgeProps = {
  status: PatientStatus;
};

mapear estado → clases
renderizar <Badge /> o un span
ser reutilizable en:
PatientTable
PatientCard
cards futuras
*/
import { Badge } from "@/components/ui/badge";
import type { PatientStatus } from "@/lib/types";

type StatusBadgeProps = {
  status: PatientStatus;
};

const statusStyles: Record<PatientStatus, string> = {
  Nuevo: "bg-sky-100 text-sky-700 hover:bg-sky-100",
  Contactado: "bg-violet-100 text-violet-700 hover:bg-violet-100",
  "Cita agendada": "bg-blue-100 text-blue-700 hover:bg-blue-100",
  Confirmado: "bg-green-100 text-green-700 hover:bg-green-100",
  Reagendar: "bg-orange-100 text-orange-700 hover:bg-orange-100",
  Completado: "bg-slate-200 text-slate-700 hover:bg-slate-200",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      className={`rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide border-0 ${statusStyles[status]}`}
    >
      {status}
    </Badge>
  );
}