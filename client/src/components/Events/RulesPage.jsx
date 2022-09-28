import CSS from './Rules.module.css';
import Rule from './Rule';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import { GetRules, RegisterForEvent } from '../../utils/API_Calls';
import { Alert, Snackbar } from "@mui/material"
import { useState, useEffect } from "react"
import Loader from '../Loader';

const RulesPage = () => {

    let { eventName } = useParams();
    const navigate = useNavigate();
    const { data } = useAuth();

    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [loader, setLoader] = useState(true)

    const [rulesData, setRulesData] = useState(null)

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchRules = async () => {
            const res = await GetRules(eventName);
            setRulesData(res);
        }
        fetchRules();
        setLoader(false);
    }, [eventName])


    const handleRegister = async () => {

        const newData = {
            _id: data?.profile._id,
            eventName: eventName
        }
        const msg = await RegisterForEvent(newData);
        setMsg(msg);
        setOpen(true)
        setTimeout(() => {
            navigate(`/events`)
        }, 2000)
    }

    return (
        <>
            <Loader loader={loader} />
            {
                rulesData ?
                    (
                        <div className={CSS.wrapper}>
                            <h2 className={CSS.title}>Rules / नियम - {rulesData?.eventName}</h2>
                            <Rule title={rulesData?.subTitle1} rules={rulesData?.englishRules} />
                            <Rule title={rulesData?.subTitle2} rules={rulesData?.hindiRules} />
                            <div className={CSS.buttons}>
                                <button className={CSS.reg_Btn} onClick={handleRegister}>
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div style={{
                            display: 'flex',
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "80vh",
                            fontSize: "1.5rem",
                            fontFamily: '"Roboto", serif',
                            padding: "0 2rem"
                        }}>
                            Registrations not open yet,
                            please try after sometime...
                        </div>
                    )
            }
            {
                msg !== "" && (
                    <Snackbar
                        open={open}
                        autoHideDuration={5000}
                        onClose={handleClose}
                    >
                        <Alert variant='filled'
                            elevation={6}
                            severity={msg?.type}
                            sx={{ width: '100%' }}
                            onClose={handleClose}
                        >
                            {msg?.text}
                        </Alert>
                    </Snackbar >
                )}
        </>
    )
}

export default RulesPage;