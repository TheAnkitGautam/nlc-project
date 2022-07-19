import CSS from './Rules.module.css';
import Rule from './Rule';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext'
import { RegisterForEvent } from '../../utils/API_Calls';
import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"

const rules = [
    {
        id: "1",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    },
    {
        id: "2",
        title: "Title",
        rules: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos quam eum ipsum optio reprehenderit maxime id sed voluptatibus molestiae.",
        ]
    }
]



const RulesPage = () => {

    const location = useLocation();
    const eventName = location.state?.from;

    const { profile } = useContext(AuthContext);
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

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
            <div className={CSS.wrapper}>

                <h2 className={CSS.title}>Rules / नियम - {eventName}</h2>

                {
                    rules.map((rule) => {
                        return <Rule key={rule.id} props={rule} />
                    })
                }

                <div className={CSS.buttons}>
                    <button className={CSS.reg_Btn} onClick={handleRegister}>
                        Register Now
                    </button>
                </div>
            </div>
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