/*
Usuario entiende:

quién pidió cita
quién ya respondió
quién está pendiente
a quién hay que mover

Debe mostrar:

nombre
    María López
telefono
    +57 312 345 6789
Motivo de consulta
    Ansiedad
Estado
    <StatusBadge status={patient.status} />
Proxima cita
    2026-03-30 17:00
Ultima accion
    confirmo cita
Accion
     Bton de (ver detalle)

type PatientTableProps = {
  patients: Patient[];
};

*/
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import type { Patient } from "@/lib/types";
import StatusBadge from "@/components/citaflow/StatusBadge";

type PatientTableProps = {
  patients: Patient[];
};

export default function PatientTable({ patients }: PatientTableProps) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b px-6 py-5">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Pacientes</h2>
          <p className="text-sm text-muted-foreground">
            Solicitudes, confirmaciones y seguimiento en un solo lugar.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6">Paciente</TableHead>
              <TableHead>Contacto</TableHead>
              <TableHead>Motivo</TableHead>
              <TableHead className="filter">Estado</TableHead>
              <TableHead>Próxima cita</TableHead>
              <TableHead>Última acción</TableHead>
              <TableHead className="text-right pr-6">Acción</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.id} className="hover:bg-slate-50/70">
                <TableCell className="pl-6 font-medium">
                  <Link
                    href={`/patients/${patient.id}`}
                    className="transition hover:text-green-900"
                  >
                    {patient.name}
                  </Link>
                </TableCell>

                <TableCell className="text-sm text-muted-foreground">
                  {patient.phone}
                </TableCell>

                <TableCell className="max-w-[220px] text-sm text-muted-foreground">
                  <span className="line-clamp-2">{patient.reason}</span>
                </TableCell>

                <TableCell>
                  <StatusBadge status={patient.status} />
                </TableCell>

                <TableCell className="text-sm text-muted-foreground">
                  {patient.nextAppointment}
                </TableCell>

                <TableCell className="text-sm text-muted-foreground">
                  {patient.lastAction}
                </TableCell>

                <TableCell className="pr-6 text-right">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/patients/${patient.id}`}>Ver detalle</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}