import { LinearProgress, Stack } from "@mui/material"

const Loader = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <LinearProgress color="primary" />
        </Stack>
    )
}

export default Loader