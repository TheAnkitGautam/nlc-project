import Fade from 'react-reveal/Fade'

const Dots = () => {
    return (
        <Fade top>
            <div className='dots_wrapper'>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </Fade >
    );
}

export default Dots;