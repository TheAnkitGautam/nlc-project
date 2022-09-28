import { Zoom } from "react-reveal";

const GoogleMap = () => {
    return (
        <Zoom >
            <div className="map" style={{ color: "#333", display: "grid", placeItems: "center", marginTop: "2rem", marginBottom: "2rem" }}>
                <h1 style={{
                    padding: '1.5rem 0',
                    textAlign: 'center',
                    fontSize: '2.5rem',
                    fontFamily: `'Merriweather', sans-serif`
                }}>
                    Directions
                </h1>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.688580701148!2d91.42051177692225!3d23.840734608789088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec23301be199%3A0x4daf26d9525f38ee!2sStudents%20Activity%20Center!5e0!3m2!1sen!2sin!4v1641292403154!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{
                        border: "1px solid #FFF9F9"
                    }}
                    loading="eager"
                />
            </div>
        </Zoom >
    )
}

export default GoogleMap;

