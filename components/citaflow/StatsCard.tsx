/* 
Mostrar
Cuantas citas tiene
Que estan pendientes
donde dehe poner atención

Metricas
scheduled < Citas agendadas
pendingConfirmation < Confirmación pendiente
newPatients < Nuevos pacientes
followUps < Seguimientos

1. Label pequeño
    Citas agendadas
2. Numero grande
    12
3. Micro contexto (opcional)
    +3 esta semana o requieren atención
4. Icono pequeño (opcional)
    calendario
    check
    usuario
    reloj / alerta
5. Hover sutil

Qué debe hacer internamente:
    recibir el objeto stats
    renderizar 4 cards
    cada una con copy consistente
    usar Card de shadcn

type StatsCardsProps = {
  stats: DashboardStats;
};
*/
import { CalendarCheck2, Clock3, UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { DashboardStats } from "@/lib/types";

type StatsCardsProps = {
  stats: DashboardStats;
};

export default function StatsCards({ stats }: StatsCardsProps) {
  const cards = [
    {
      title: "Citas agendadas",
      value: stats.scheduled,
      helper: "agenda activa",
      icon: CalendarCheck2,
    },
    {
      title: "Pendientes de confirmar",
      value: stats.pendingConfirmation,
      helper: "requieren atención",
      icon: Clock3,
    },
    {
      title: "Nuevos pacientes",
      value: stats.newPatients,
      helper: "entradas recientes",
      icon: UserPlus,
    },
    {
      title: "Seguimientos pendientes",
      value: stats.followUps,
      helper: "por revisar hoy",
      icon: Users,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="rounded-2xl border bg-white shadow-sm"
          >
            <CardContent className="flex items-start justify-between p-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {card.title}
                </p>
                <h3 className="mt-3 text-4xl font-semibold tracking-tight">
                  {card.value}
                </h3>
                <p className="mt-2 text-xs font-medium text-muted-foreground">
                  {card.helper}
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-3">
                <Icon className="h-5 w-5 text-slate-700" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}