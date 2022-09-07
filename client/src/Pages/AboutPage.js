import AboutHero from "../components/AboutHero/AboutHero";
import GoogleMap from "../components/GoogleMap/GoogleMap";
import Timeline from "../components/Timeline/Timeline";

const AboutPage = () => {
    return (
        <div className="container pageLoadAnim">
            <AboutHero />
            <Timeline />
            <GoogleMap />
        </div>
    );
}

export default AboutPage;
