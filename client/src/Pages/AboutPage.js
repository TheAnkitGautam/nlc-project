import AboutHero from "../components/AboutHero/AboutHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";

const AboutPage = () => {
    return (
        <div div style={{ background: "linear-gradient(180deg, rgba(245, 107, 47, 0.5) -4.96%, rgba(245, 107, 47, 0.20) -4.95%, rgba(255, 255, 255, 0.15) 95.04%), #FFFFFF", transform: " translateY(70px)", }}>
            <AboutHero />
            <GoogleMap />
        </div>
    );
}

export default AboutPage;