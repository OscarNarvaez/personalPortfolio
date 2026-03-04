import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { defaultProjects } from "@/lib/portfolio-data";

export async function GET() {
    if (!process.env.DATABASE_URL) {
        return NextResponse.json({ projects: defaultProjects });
    }

    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ projects });
    } catch {
        return NextResponse.json({ projects: defaultProjects });
    }
}
