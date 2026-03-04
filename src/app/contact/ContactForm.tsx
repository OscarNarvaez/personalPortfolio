"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        setStatus("sending");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            }),
        });

        if (!response.ok) {
            setStatus("error");
            return;
        }

        form.reset();
        setStatus("success");
    }

    return (
        <form onSubmit={onSubmit} className="contact-form">
            <h3>Send message</h3>
            <input
                name="name"
                placeholder="Nombre"
                required
                className="form-control"
            />
            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="form-control"
            />
            <textarea
                name="message"
                placeholder="Mensaje"
                rows={5}
                required
                className="form-control"
            />
            <button
                type="submit"
                disabled={status === "sending"}
                className="btn btn-default"
            >
                {status === "sending" ? "Enviando..." : "Enviar"}
            </button>
            {status === "success" ? <p style={{ color: "#4ad991", marginTop: "10px" }}>Mensaje enviado correctamente.</p> : null}
            {status === "error" ? <p style={{ color: "#ff6b6b", marginTop: "10px" }}>No se pudo enviar el mensaje.</p> : null}
        </form>
    );
}
