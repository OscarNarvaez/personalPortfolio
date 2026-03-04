import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

export default function AboutPage() {
    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center fade-in-from-top">
                            <h1 className="h2">03 : About me</h1>
                        </div>

                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 fade-in-from-top about-content">
                                        <h2 style={{ fontSize: "15px", fontWeight: "700" }}>1. Personal Introduction</h2>
                                        <p>
                                            Hi, I&apos;m Oscar Narvaez, a web developer passionate about backend,
                                            especially skilled in React and Nodejs. I have 3 years of experience in
                                            these technologies and I love learning new things.
                                        </p>

                                        <br />

                                        <h2 style={{ fontSize: "15px", fontWeight: "700" }}>2. Skills</h2>
                                        <h4>Languages:</h4>
                                        <p>Java | Python</p>
                                        <h4>Frameworks:</h4>
                                        <p>React | Nodejs | Django</p>

                                        <br />

                                        <h2 style={{ fontSize: "15px", fontWeight: "700" }}>3. Passion and Motivation</h2>
                                        <p>
                                            Passion for creating innovative solutions... programming is not just a job,
                                            it&apos;s a form of creative expression and a constant intellectual challenge.
                                            Technology is constantly evolving, driving the need to stay up-to-date with
                                            the latest trends and advancements in the field.
                                        </p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <Image
                                            src={withBasePath("/images/miyo.jpeg")}
                                            className="img-responsive img-bordered fade-in-from-top profile-image"
                                            alt="Oscar Narvaez portrait"
                                            width={700}
                                            height={700}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
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
