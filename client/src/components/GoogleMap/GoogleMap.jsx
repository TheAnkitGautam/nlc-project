import { Zoom } from "react-reveal";

const GoogleMap = () => {
    return (
        <Zoom >
            <div className="map" style={{ color: "#333", display: "grid", placeItems: "center", marginTop: "2rem", marginBottom: "8rem" }}>
                <h1 style={{ color: "#DB5D4D", fontFamily: "'Roboto',sans-serif", margin: "2rem 0", fontSize: "2.25rem" }}>DIRECTIONS</h1>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.688580701148!2d91.42051177692225!3d23.840734608789088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec23301be199%3A0x4daf26d9525f38ee!2sStudents%20Activity%20Center!5e0!3m2!1sen!2sin!4v1641292403154!5m2!1sen!2sin" width="90%" height="500" style={{
                    border: "3px solid #FFF9F9", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }} loading="eager"></iframe>
            </div>
        </Zoom>
    )
}

export default GoogleMap;

