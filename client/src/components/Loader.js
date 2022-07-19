import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const Loader = ({ loader }) => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 11 }}
            open={loader}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loader