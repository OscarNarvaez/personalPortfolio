import Image from "next/image";
import { defaultProjects } from "@/lib/portfolio-data";
import { withBasePath } from "@/lib/base-path";

export default function WorksPage() {
    const projects = defaultProjects;
    const totalProjects = String(projects.length).padStart(3, "0");
    const projectRows = projects.reduce<typeof projects[number][][]>((rows, project, index) => {
        const rowIndex = Math.floor(index / 3);
        if (!rows[rowIndex]) {
            rows[rowIndex] = [];
        }
        rows[rowIndex].push(project);
        return rows;
    }, []);

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
                                    {projectRows.map((row, rowIndex) => (
                                        <div
                                            className="row"
                                            key={`row-${rowIndex}`}
                                            style={rowIndex > 0 ? { marginTop: "40px" } : undefined}
                                        >
                                            {row.map((project, itemIndex) => {
                                                const globalIndex = rowIndex * 3 + itemIndex;
                                                return (
                                                    <div className="col-sm-4" key={project.title + globalIndex}>
                                                        <a title="Project preview" className="black-image-project-hover">
                                                            {project.image ? (
                                                                <Image
                                                                    src={withBasePath(project.image)}
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
                                                            <h4>{String(globalIndex + 1).padStart(3, "0")}/{totalProjects}</h4>
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
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
