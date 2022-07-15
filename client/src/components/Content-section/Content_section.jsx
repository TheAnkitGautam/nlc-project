import Carousal from './Carousal'

const Content_section = () => {
  return (
    <section style={{ }}>
      <div className="container">
        <h2 className="about-title"><span>Featured</span> Content</h2>
        <Carousal title='Weekly Digest'/>
        <Carousal title='3rd Angle'/>
        <Carousal title='Fabula Forum'/>
      </div>
    </section>
  )
}

export default Content_section