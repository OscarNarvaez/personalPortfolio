import Image from "next/image";
import { prisma } from "@/lib/db";
import { defaultProjects } from "@/lib/portfolio-data";

type ProjectCard = {
    title: string;
    description: string;
    url: string;
    image: string | null;
};

async function getProjects(): Promise<ProjectCard[]> {
    if (!process.env.DATABASE_URL) {
        return defaultProjects.map((project: ProjectCard) => ({
            title: project.title,
            description: project.description,
            url: project.url,
            image: project.image,
        }));
    }

    try {
        const projects = await prisma.project.findMany({
            orderBy: { createdAt: "desc" },
        });

        return projects.map((project: ProjectCard) => ({
            title: project.title,
            description: project.description,
            url: project.url,
            image: project.image,
        }));
    } catch {
        return defaultProjects.map((project: ProjectCard) => ({
            title: project.title,
            description: project.description,
            url: project.url,
            image: project.image,
        }));
    }
}

export default async function WorksPage() {
    const projects = await getProjects();

    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 section-container-spacer fade-in-from-top">
                        <div className="text-center">
                            <h1 className="h2">02 : Works</h1>
                            <p>
                                Here are the links to the repositories of some of the projects I have worked on
                                individually or with a colleague.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div id="myCarousel" className="carousel slide projects-carousel fade-in-from-top">
                            <div className="carousel-inner">
                                <div className="item active">
                                    <div className="row">
                                        {projects.map((project, index) => (
                                            <div className="col-sm-4" key={project.title + index}>
                                                <a title="Project preview" className="black-image-project-hover">
                                                    {project.image ? (
                                                        <Image
                                                            src={project.image}
                                                            alt={`${project.title} project preview`}
                                                            width={500}
                                                            height={320}
                                                            className="img-responsive"
                                                            loading="lazy"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        />
                                                    ) : null}
                                                </a>
                                                <div className="card-container card-container-lg">
                                                    <h4>{String(index + 1).padStart(3, "0")}/003</h4>
                                                    <h3>{project.title}</h3>
                                                    <p>{project.description}</p>
                                                    <a
                                                        href={project.url}
                                                        title="Open project"
                                                        className="btn btn-default"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Discover
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
