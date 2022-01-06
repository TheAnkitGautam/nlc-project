import AboutHero from "../components/AboutHero/AboutHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Timeline from "../components/Timeline/Timeline";

const AboutPage = () => {
    return (
        <div className="pageLoadAnim" style={{ background: "linear-gradient(180deg, rgba(245, 107, 47, 0.5) -4.96%, rgba(245, 107, 47, 0.20) -4.95%, rgba(255, 255, 255, 0.15) 95.04%), #FFFFFF" }}>
            <AboutHero />
            <Timeline />
            <GoogleMap />
        </div>
    );
}

export default AboutPage;
