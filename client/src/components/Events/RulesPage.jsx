import CSS from './Rules.module.css';
import Rule from './Rule';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext'
import { GetRules, RegisterForEvent } from '../../utils/API_Calls';
import { Alert, Snackbar } from "@mui/material"
import { useState, useEffect } from "react"
import Loader from '../Loader';

const RulesPage = () => {

    const location = useLocation();
    const eventName = location.state?.from;
    const navigate = useNavigate()

    const { profile } = useContext(AuthContext);
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [loader, setLoader] = useState(true)

    const [rulesData, setRulesData] = useState(null)

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        if (!eventName) {
            navigate('/events')
        }
        const fetchRules = async () => {
            const res = await GetRules(eventName);
            setRulesData(res);
        }
        fetchRules();
        setLoader(false);
    }, [eventName, navigate])


    const handleRegister = async () => {

        const newData = {
            _id: profile._id,
            eventName: eventName
        }
        const msg = await RegisterForEvent(newData);
        setMsg(msg);
        setOpen(true)
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
                            minHeight: "100vh",
                            fontSize:"2rem"
                        }}>
                            No Data Found!
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