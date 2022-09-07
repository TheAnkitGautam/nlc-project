import { Fade } from 'react-reveal';
import CSS from './Timeline.module.css';
import TimelineData from './TimelineData';

const Timeline = () => {
    return (
        <section className={CSS.wrapper} >
            <div className={CSS.timeline}>
                <div className={CSS.timelineItems}>
                    {
                        TimelineData.map((data) => {
                            return (
                                <div key={data.id} className={CSS.timelineItem}>
                                    <Fade delay={1000} top><div className={CSS.dot}></div></Fade>
                                    <Fade delay={800} left><div className={CSS.date}>{data.date}</div></Fade>
                                    <Fade duration={1500} right>
                                        <div className={CSS.content}>
                                            <h3 className={CSS.itemTitle}>{data.title}</h3>
                                            <p className={CSS.text}>{data.text} </p>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}


export default Timeline;