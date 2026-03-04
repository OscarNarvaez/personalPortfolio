import { profile } from "@/lib/portfolio-data";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="section-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="section-container-spacer text-center fade-in-from-top centered-navbar">
                            <h1 className="h2">04 : Contact me</h1>
                        </div>

                        <div className="row fade-in-from-top contact-content">
                            <div className="col-xs-12 reveal-content">
                                <ul className="list-unstyled contact-list">
                                    <li>
                                        <h3>
                                            <span className="fa-icon">
                                                <i className="fa fa-phone" aria-hidden="true" />
                                            </span>
                                            {profile.phone}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <span className="fa-icon">
                                                <i className="fa fa-at" aria-hidden="true" />
                                            </span>
                                            {profile.email}
                                        </h3>
                                    </li>
                                    <li>
                                        <h3>
                                            <span className="fa-icon">
                                                <i className="fa fa-map-marker" aria-hidden="true" />
                                            </span>
                                            {profile.location} 📍
                                        </h3>
                                    </li>
                                </ul>

                                <div className="social-links">
                                    <a
                                        href="https://www.instagram.com/oscar_narvaezz/"
                                        title="Instagram profile"
                                        className="social-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-instagram" aria-hidden="true" />
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="https://github.com/OscarNarvaez"
                                        title="GitHub profile"
                                        className="social-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-github" aria-hidden="true" />
                                        <span>GitHub</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/oscar-julian-narvaez-5b144120b/"
                                        title="LinkedIn profile"
                                        className="social-button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fa fa-linkedin" aria-hidden="true" />
                                        <span>LinkedIn</span>
                                    </a>
                                </div>

                                <div className="contact-gif-wrap centered-navbar fade-in-from-top">
                                    <Image
                                        src="/images/programingV.gif"
                                        className="img-responsive"
                                        alt="Programming animation"
                                        width={600}
                                        height={400}
                                        sizes="(max-width: 768px) 100vw, 600px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
