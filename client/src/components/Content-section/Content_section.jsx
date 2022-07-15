import Carousal from './Carousal'
import CSS from './content.module.css'

const Content_section = () => {
  return (
    <section className={CSS.content_section_bg}>
      <div className="container">
        <h2 className={CSS.content_title}><span>Featured</span> Content</h2>
        <Carousal title='Weekly Digest' />
        <Carousal title='3rd Angle' />
        <Carousal title='Fabula Forum' />
      </div>
    </section>
  )
}

export default Content_section