import { HomeHeroEffects } from "@/components/HomeHeroEffects";

export default function HomePage() {
    return (
        <>
            <div
                className="hero-full-container background-image-container white-text-container fade-in-from-top"
                style={{ backgroundImage: "url('/images/space.jpg')" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="hero-full-wrapper">
                                <div className="text-content">
                                    <h1>
                                        Hello,
                                        <br />
                                        <span id="typed-strings" style={{ display: "none" }}>
                                            <span>I&apos;m Oscar Narvaez</span>
                                            <span>Colombian Designer</span>
                                            <span>Working as a Freelance</span>
                                        </span>
                                        <span id="typed" />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeHeroEffects />
        </>
    );
}
