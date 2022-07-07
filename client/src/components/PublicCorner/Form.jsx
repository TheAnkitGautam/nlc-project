import CSS from './Form.module.css'
import axios from 'axios'
import { Box, Paper, MenuItem, TextField, Avatar, Container, styled, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { useEffect, useState } from 'react';


const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '90%'
    },
}))

export default function Form() {

    const eventName = localStorage.getItem('eventName')

    const [gender, setGender] = useState("")
    const [fullName, setFullName] = useState("")
    const [loading, setLoading] = useState(false);

    const [otherDetails, setOtherDetails] = useState({
        whatsappNumber: "",
        instaUrl: "",
        instituteName: ""
    })

    const handleOtherDetails = (e) => {
        setOtherDetails({
            ...otherDetails,
            [e.target.name]: e.target.value
        })
    }

    const [userData, setUserData] = useState({})

    useEffect(() => {
        axios.get('/auth/login/success', { withCredentials: true })
            .then(res => res.data.user)
            .then(user => {
                setUserData(user);
                setFullName(user?.fullName)
            })
    }, [])




    const handleSubmit = async () => {

        setLoading(true);

        const newEventList = userData.eventList;
        if (!newEventList.includes(eventName))
            newEventList.push(eventName)

        const newUserData = {
            id: userData._id,
            googleId: userData.googleId,
            fullName: fullName,
            email: userData.email,
            profilePic: userData.profilePic,
            eventList: newEventList,
            gender: gender,
            whatsappNumber: otherDetails.whatsappNumber,
            instaUrl: otherDetails.instaUrl,
            instituteName: otherDetails.instituteName
        }

        const res = await axios.post('/user/register', newUserData)
        console.log(res);

        setLoading(false);
    }


    return (
        <div>
            <h2 className={CSS.title}>Registration Form </h2>

            <Box sx={{ my: 10 }}>
                <Container sx={{ display: 'flex', justifyContent: "center" }} component={Paper} maxWidth="sm">
                    <StyledBox sx={{ height: '100%', width: '68%', padding: '2rem 0' }}>
                        <Box sx={{ display: 'flex', justifyContent: "center" }}>
                            <Avatar
                                alt={userData.fullName || ''}
                                src={userData.profilePic || ''}
                                sx={{ mb: 1, width: 56, height: 56 }}
                            />
                        </Box>
                        <Typography sx={{ mb: 5 }} color="gray" align='center' variant="subtitle1" >
                            {`Hi, ${userData.fullName}`}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <PersonOutlineIcon sx={{ mr: 2 }} />
                            <TextField
                                name='fullName'
                                variant='outlined'
                                size='small'
                                type='text'
                                label='Full Name'
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <PeopleAltOutlinedIcon sx={{ mr: 2 }} />
                            <TextField
                                fullWidth
                                select
                                size='small'
                                value={gender}
                                label="Gender"
                                onChange={e => setGender(e.target.value)}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="others">Others</MenuItem>
                            </TextField>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <WhatsappOutlinedIcon sx={{ mr: 2 }} />
                            <TextField
                                name='whatsappNumber'
                                variant='outlined'
                                size='small'
                                type='text'
                                value={otherDetails.whatsappNumber}
                                onChange={handleOtherDetails}
                                label='WhatsApp Number'
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <InstagramIcon sx={{ mr: 2 }} />
                            <TextField
                                name='instaUrl'
                                variant='outlined'
                                size='small'
                                type='url'
                                label='Instagram URL'
                                value={otherDetails.instaUrl}
                                onChange={handleOtherDetails}
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <SchoolOutlinedIcon sx={{ mr: 2 }} />
                            <TextField
                                name='instituteName'
                                variant='outlined'
                                size='small'
                                type='text'
                                value={otherDetails.instituteName}
                                onChange={handleOtherDetails}
                                label='Institute Name'
                                fullWidth
                            />
                        </Box>
                        <Box sx={{ mt: 8 }}>
                            <Box>
                                <LoadingButton
                                    sx={{
                                        background: "#ff6347",
                                        "&:hover": { background: "#f27f6b" }
                                    }}
                                    size="large"
                                    onClick={handleSubmit}
                                    loading={loading}
                                    variant="contained"
                                    fullWidth
                                >
                                    Submit
                                </LoadingButton>
                            </Box>
                        </Box>
                    </StyledBox>
                </Container>
            </Box>



        </div>
    )
}
