export type PatientStatus =
  | "Nuevo"
  | "Contactado"
  | "Cita agendada"
  | "Confirmado"
  | "Reagendar"
  | "Completado";

export type Patient = {
  id: string;
  name: string;
  phone: string;
  reason: string;
  desiredDate: string;
  desiredTime: string;
  nextAppointment: string;
  status: PatientStatus;
  lastAction: string;
  notes?: string;
  source?: string;
};

export type DashboardStats = {
  scheduled: number;
  pendingConfirmation: number;
  newPatients: number;
  followUps: number;
};

export type AutomationFlow = {
  id: string;
  title: string;
  trigger: string;
  messagePreview: string;
  active: boolean;
};

export type TimelineEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
};