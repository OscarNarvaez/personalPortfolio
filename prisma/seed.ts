import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const projects = [
        {
            title: "Web Senador: Gustavo Garcia",
            description: "Sitio web político",
            url: "https://gustavogarciafigueroa.com/",
            image: "/images/work01-hover.jpg",
        },
        {
            title: "Diseño de Interiores",
            description: "Website para venta de servicios",
            url: "https://oscarnarvaez.github.io/CreacionDeInteriores/",
            image: "/images/work02-hover.jpg",
        },
        {
            title: "SPA Center",
            description: "Website para venta de servicios",
            url: "https://oscarnarvaez.github.io/Spa-Belleza/",
            image: "/images/work03-hover.jpg",
        },
    ];

    for (const project of projects) {
        await prisma.project.upsert({
            where: { url: project.url },
            create: project,
            update: project,
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    });
