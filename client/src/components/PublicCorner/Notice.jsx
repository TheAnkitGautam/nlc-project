import { Link } from 'react-router-dom';
import CSS from './public_corner.module.css';

const Notice = () => {
    return (
        <div className={CSS.noticeBox} >
            <h2 className={CSS.title}><span>----------</span> Upcoming Events <span>----------</span></h2>

            <div className={CSS.notice}>
                <div className={CSS.startDate}>
                    <div className={CSS.dateTitle}>starts on</div>
                    <div className={CSS.date}>
                        <div className={CSS.day}>20</div>
                        <div className={CSS.month}>January</div>
                    </div>
                </div>
                <div className={CSS.center} >
                    <h3 className={CSS.noticeTitle}>Spill the Ink 3.0 - Debate Competition</h3>
                    <p className={CSS.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa sequi consequatur cupiditate repudiandae quod.</p>
                    <div className={CSS.btnBox}>
                        <Link to="rules" className={CSS.regBtn}>Register here&nbsp;
                            <i className="fas fa-angle-right" />
                            <i className="fas fa-angle-right" />
                        </Link>
                    </div>
                </div>
                <div className={CSS.endDate}>
                    <div className={CSS.dateTitle}>ends on</div>
                    <div className={CSS.date}>
                        <div className={CSS.day}>14</div>
                        <div className={CSS.month}>February</div>
                    </div>
                </div>
            </div>
            <div className={CSS.notice}>
                <div className={CSS.startDate}>
                    <div className={CSS.dateTitle}>starts on</div>
                    <div className={CSS.date}>
                        <div className={CSS.day}>20</div>
                        <div className={CSS.month}>January</div>
                    </div>
                </div>
                <div className={CSS.center} >
                    <h3 className={CSS.noticeTitle}>Winter Debate</h3>
                    <p className={CSS.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa sequi consequatur cupiditate repudiandae quod.</p>
                    <div className={CSS.btnBox}>
                        <Link to="rules" className={CSS.regBtn}>Register here&nbsp;
                            <i className="fas fa-angle-right" />
                            <i className="fas fa-angle-right" />
                        </Link>
                    </div>
                </div>
                <div className={CSS.endDate}>
                    <div className={CSS.dateTitle}>ends on</div>
                    <div className={CSS.date}>
                        <div className={CSS.day}>14</div>
                        <div className={CSS.month}>February</div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Notice
