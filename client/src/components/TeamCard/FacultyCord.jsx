import CSS from './faculty.module.css';
import Dots from './../Dots';

const FacultyCord = () => {
    return (
        <>
            <div className={CSS.wrap}>
                <img className='coordinator-image' src="https://i.postimg.cc/PxZWWpTc/anuradha-nongmaithem.jpg" alt="" />
                <div className={CSS.details}>
                    <h3 className={CSS.name}>Dr. Anuradha Nongmaithem</h3>
                    <h5 className={CSS.post}>Faculty Coordinator</h5>
                    <div className={CSS.cardSm}>
                        <a href='fb.com'><i className="fab fa-instagram" /></a>
                        <a href='fb.com'><i className="fab fa-linkedin-in" /></a>
                    </div>
                    <p className={CSS.about}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
            <Dots />
        </>
    );
}

export default FacultyCord;