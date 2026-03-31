import type {
  AutomationFlow,
  DashboardStats,
  Patient,
  TimelineEvent,
} from "@/lib/types";

export const patients: Patient[] = [
  {
    id: "juan-perez",
    name: "Juan Perez",
    phone: "4421234567",
    reason: "Psicología clínica",
    desiredDate: "2026-04-03",
    desiredTime: "10:00 AM",
    nextAppointment: "2026-04-03 10:00 AM",
    status: "Confirmado",
    lastAction: "Confirmó cita",
    notes: "Paciente nuevo. Prefiere atención por la mañana.",
    source: "Formulario web",
  },
  {
    id: "maria-lopez",
    name: "Maria Lopez",
    phone: "4425551122",
    reason: "Ansiedad y manejo de estrés",
    desiredDate: "2026-04-03",
    desiredTime: "11:00 AM",
    nextAppointment: "2026-04-03 11:00 AM",
    status: "Cita agendada",
    lastAction: "Se envió recordatorio",
    notes: "Pidió primera valoración.",
    source: "WhatsApp",
  },
  {
    id: "carlos-gomez",
    name: "Carlos Gomez",
    phone: "4429987766",
    reason: "Depresión",
    desiredDate: "2026-04-03",
    desiredTime: "12:00 PM",
    nextAppointment: "Pendiente",
    status: "Reagendar",
    lastAction: "No respondió al recordatorio",
    notes: "No contestó desde hace 45h.",
    source: "Formulario web",
  },
  {
    id: "ana-flores",
    name: "Ana Flores",
    phone: "4423332244",
    reason: "Terapia de pareja",
    desiredDate: "2026-04-04",
    desiredTime: "05:00 PM",
    nextAppointment: "2026-04-04 05:00 PM",
    status: "Nuevo",
    lastAction: "Solicitud recibida",
    notes: "Quiere agendar en horario vespertino.",
    source: "Instagram",
  },
  {
    id: "luis-castro",
    name: "Luis Castro",
    phone: "4427778811",
    reason: "Seguimiento emocional",
    desiredDate: "2026-04-05",
    desiredTime: "09:00 AM",
    nextAppointment: "2026-04-05 09:00 AM",
    status: "Contactado",
    lastAction: "Se respondió por WhatsApp",
    notes: "Paciente recurrente.",
    source: "WhatsApp",
  },
  {
    id: "valeria-mendez",
    name: "Valeria Mendez",
    phone: "4426655443",
    reason: "Control de seguimiento",
    desiredDate: "2026-04-02",
    desiredTime: "04:00 PM",
    nextAppointment: "2026-04-02 04:00 PM",
    status: "Completado",
    lastAction: "Cita realizada",
    notes: "Seguimiento mensual.",
    source: "Formulario web",
  },
];

export const dashboardStats: DashboardStats = {
  scheduled: 12,
  pendingConfirmation: 3,
  newPatients: 5,
  followUps: 4,
};

export const automations: AutomationFlow[] = [
  {
    id: "automation-1",
    title: "Confirmación de solicitud",
    trigger: "Cuando un paciente llena el formulario",
    messagePreview:
      "Hola, recibimos tu solicitud de cita. En breve te contactaremos para confirmar tu horario.",
    active: true,
  },
  {
    id: "automation-2",
    title: "Recordatorio de cita",
    trigger: "24 horas antes de la cita",
    messagePreview:
      "Te recordamos tu cita programada para mañana. Responde a este mensaje para confirmar.",
    active: true,
  },
  {
    id: "automation-3",
    title: "Seguimiento sin respuesta",
    trigger: "Si no responde en 24 horas",
    messagePreview:
      "Hola, seguimos atentos a tu solicitud. Si deseas reagendar o confirmar, puedes responder aquí.",
    active: true,
  },
  {
    id: "automation-4",
    title: "Mensaje post-cita",
    trigger: "Después de marcar la cita como completada",
    messagePreview:
      "Gracias por asistir a tu cita. Si deseas agendar seguimiento, estamos disponibles para ayudarte.",
    active: false,
  },
];

export const patientTimelines: Record<string, TimelineEvent[]> = {
  "juan-perez": [
    {
      id: "jp-1",
      title: "Solicitud recibida",
      description: "El paciente llenó el formulario de solicitud.",
      date: "2026-03-29 08:20 AM",
    },
    {
      id: "jp-2",
      title: "Contacto enviado",
      description: "Se envió mensaje inicial por WhatsApp.",
      date: "2026-03-29 08:35 AM",
    },
    {
      id: "jp-3",
      title: "Cita confirmada",
      description: "El paciente confirmó asistencia.",
      date: "2026-03-29 09:10 AM",
    },
  ],
  "maria-lopez": [
    {
      id: "ml-1",
      title: "Solicitud recibida",
      description: "Formulario enviado desde la landing.",
      date: "2026-03-29 11:05 AM",
    },
    {
      id: "ml-2",
      title: "Recordatorio enviado",
      description: "Se envió recordatorio de cita.",
      date: "2026-03-30 09:00 AM",
    },
  ],
  "carlos-gomez": [
    {
      id: "cg-1",
      title: "Solicitud recibida",
      description: "Paciente pidió valoración inicial.",
      date: "2026-03-28 03:10 PM",
    },
    {
      id: "cg-2",
      title: "Sin respuesta",
      description: "No respondió al mensaje de confirmación.",
      date: "2026-03-30 01:20 PM",
    },
  ],
};