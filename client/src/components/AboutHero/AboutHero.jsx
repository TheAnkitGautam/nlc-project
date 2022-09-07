import CSS from './AboutHero.module.css';
import heroImg from './aboutHero.png';
import Dots from '../Dots';


const AboutHero = () => {
    return (
        <>
            <h1 className={CSS.mainTitle} style={{ paddingTop: "90px" }}>
                <span className={CSS.aboutWord}>About </span>Us
            </h1>
            <p className={CSS.heroText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ut commodi vitae pariatur non ducimus maiores, libero beatae totam, illo dolor quos dolores cupiditate obcaecati. Sunt dolores, ipsum deserunt esse optio qui voluptatem repellat maxime similique suscipit. Fugiat dolorum, esse praesentium magnam corporis voluptates enim eos molestiae facilis blanditiis id?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sed.
            </p>
            <div className={`${CSS.img_box} imgAnim`}>
                <img className={CSS.heroImg} src={heroImg} alt="" />
            </div>
            <Dots />
        </>
    );
}

export default AboutHero;