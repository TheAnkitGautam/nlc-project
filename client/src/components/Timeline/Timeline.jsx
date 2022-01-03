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
                                    <div className={CSS.dot}></div>
                                    <div className={CSS.date}>{data.date}</div>
                                    <div className={CSS.content}>
                                        <h3 className={CSS.itemTitle}>{data.title}</h3>
                                        <p className={CSS.text}>{data.text} </p>
                                    </div>
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