import { Alert, Snackbar } from "@mui/material"
import { useState } from "react"

const Notification = ({ msg }) => {
    const [open, setOpen] = useState(true)

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
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
    )
}


export default Notification