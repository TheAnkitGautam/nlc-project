import { Zoom } from "react-reveal";

const GoogleMap = () => {
    return (
        <Zoom >
            <div className="map" style={{ color: "#333", display: "grid", placeItems: "center", marginTop: "2rem", marginBottom: "8rem" }}>
                <h1 style={{ color: "#DB5D4D", fontFamily: "'Roboto',sans-serif", margin: "2rem 0", fontSize: "2.25rem" }}>DIRECTIONS</h1>
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1095.460697688518!2d91.42116744802635!3d23.840871242318617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ec19aaa69b0d%3A0xf1c683a298e69e7b!2sNational%20Institute%20of%20Technology%20(N.I.T)%2C%20Agartala%2C%20Tripura!5e0!3m2!1sen!2sin!4v1641116200811!5m2!1sen!2sin" width="90%" height="500" style={{
                    border: "3px solid #FFF9F9", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                }} loading="eager"></iframe>
            </div>
        </Zoom>
    )
}

export default GoogleMap;

