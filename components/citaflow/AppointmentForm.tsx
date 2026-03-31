/*
Simula cómo entraría una solicitud real de cita.

debe mostrar:
Inputs:
nombre completo
WhatsApp
motivo de consulta
fecha deseada
hora deseada
notas opcionales

CTA
Solicitar cita

debe hacer internamente:

Ahorita, como demo, basta con:

tener estado local (useState)
vaciar el formulario al enviar
lanzar un toast tipo:

"Solicitud enviada. Te contactaremos pronto."

type AppointmentFormProps = {};
*/
"use client";

import { useState } from "react";
import { CalendarDays, Clock3, MessageSquare, Phone, User2, Clock, Heart, Lightbulb } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
    name: string;
    phone: string;
    reason: string;
    date: string;
    time: string;
    notes: string;
};

const initialState: FormState = {
    name: "",
    phone: "",
    reason: "",
    date: "",
    time: "",
    notes: "",
};

export default function AppointmentForm() {
    const [form, setForm] = useState<FormState>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 900));

        toast.success("Solicitud enviada correctamente", {
            description: "La cita demo fue registrada en CitaFlow.",
        });

        setForm(initialState);
        setIsSubmitting(false);
    }

    return (
        <section className="bg-[#F8F7F4] py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                    {/* Left copy */}
                    <div className="flex flex-col justify-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-green-900">
                            Solicitud de cita
                        </p>

                        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black md:text-5xl">
                            Así se vería la entrada real de un paciente
                        </h2>

                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                            Convierte mensajes dispersos en solicitudes claras con nombre,
                            contacto, motivo de consulta y horario deseado.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-2 rounded-2xl border bg-white p-4 shadow-sm">
                                <div className="rounded-lg bg-green-800/20 p-3">
                                    <Lightbulb className="h-5 w-5 text-green-800" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-black">
                                        Más claridad desde el primer contacto
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Recibe solicitudes organizadas en lugar de conversaciones
                                        desordenadas por WhatsApp.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-2xl border bg-white p-4 shadow-sm">
                                <div className="rounded-xl bg-green-800/20 p-3">
                                    <Clock className="h-5 w-5 text-green-800" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-black">
                                        Menos tiempo perdido
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Ten la información clave antes de responder y confirma más
                                        rápido.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-2xl border bg-white p-4 shadow-sm">
                                <div className="rounded-xl bg-green-800/20 p-3">
                                    <Heart className="h-5 w-5 text-green-800" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-black">
                                        Mejor experiencia para el paciente
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Un proceso más simple, más claro y más profesional desde el
                                        inicio.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right form */}
                    <Card className="rounded-3xl border bg-white shadow-sm">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-2xl tracking-tight">
                                Solicitar cita
                            </CardTitle>
                            <CardDescription>
                                Completa este formulario como si fueras un paciente real.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="pt-4">
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre completo</Label>
                                    <div className="relative">
                                        <User2 className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Ej. María López"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">WhatsApp</Label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            name="phone"
                                            placeholder="Ej. 4421234567"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reason">Motivo de consulta</Label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="reason"
                                            name="reason"
                                            placeholder="Ej. Ansiedad, estrés, terapia de pareja..."
                                            value={form.reason}
                                            onChange={handleChange}
                                            className="pl-10"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="date">Fecha deseada</Label>
                                        <div className="relative">
                                            <CalendarDays className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="date"
                                                name="date"
                                                type="date"
                                                value={form.date}
                                                onChange={handleChange}
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="time">Hora deseada</Label>
                                        <div className="relative">
                                            <Clock3 className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" />
                                            <Input
                                                id="time"
                                                name="time"
                                                type="time"
                                                value={form.time}
                                                onChange={handleChange}
                                                className="pl-10"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notas opcionales</Label>
                                    <Textarea
                                        id="notes"
                                        name="notes"
                                        placeholder="Ej. Preferencia de horario, primera sesión, dudas previas..."
                                        value={form.notes}
                                        onChange={handleChange}
                                        rows={4}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="h-11 w-full bg-green-900 hover:bg-green-950"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Enviando..." : "Solicitar cita"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}