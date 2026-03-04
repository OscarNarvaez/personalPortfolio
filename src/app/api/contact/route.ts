import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    try {
        if (!process.env.DATABASE_URL) {
            return NextResponse.json(
                { error: "Base de datos no configurada" },
                { status: 503 }
            );
        }

        const body = await req.json();
        const name = String(body?.name ?? "").trim();
        const email = String(body?.email ?? "").trim();
        const message = String(body?.message ?? "").trim();

        if (!name || !email || !message) {
            return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
        }

        await prisma.contactMessage.create({
            data: { name, email, message },
        });

        return NextResponse.json({ ok: true }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Error interno" }, { status: 500 });
    }
}
