import styles from './public_corner.module.css'
import { Box, Paper, MenuItem, TextField, Avatar, Container, styled, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import eventPoster from './eventPoster.jpg';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Save_User_Profile } from '../../utils/API_Calls';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const StyledBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '90%'
    },
}))

const Validate = (formValues) => {
    const errors = {};
    const NameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const WhatsappRegex = /^[6-9]\d{9}$/;

    if (!formValues.fullName) {
        errors.fullName = "Name is required"
    } else if (!NameRegex.test(formValues.fullName.trim())) {
        errors.fullName = "Name can't have numbers and special characters"
    }

    if (formValues.gender === "") {
        errors.gender = "Please select your gender"
    }

    if (!formValues.whatsappNumber) {
        errors.whatsappNumber = "WhatsApp number is required"
    } else if (!WhatsappRegex.test(formValues.whatsappNumber.trim())) {
        errors.whatsappNumber = "Invalid whatsapp number"
    }

    if (!formValues.instituteName) {
        errors.instituteName = "Enter the name of institute / organization"
    }

    return errors;
}

// const eventName = localStorage.getItem('eventName')

export default function Profile() {

    const { user } = useContext(AuthContext)
    const [createdProfile, setCreatedProfile] = useState(false)

    const [errors, setErrors] = useState({})
    const [formValues, setFormValues] = useState({
        fullName: "",
        gender: "",
        whatsappNumber: "",
        instaUrl: "",
        instituteName: ""
    })

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async () => {
        const errors = Validate(formValues);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                await Save_User_Profile({
                    googleId: user.user.googleId,
                    fullName: formValues.fullName,
                    email: user.user.email,
                    profilePic: user.user.profilePic,
                    gender: formValues.gender,
                    whatsappNumber: formValues.whatsappNumber,
                    instaUrl: formValues.instaUrl,
                    instituteName: formValues.instituteName
                });
            } catch (err) {
                console.log(err);
            }
        }
    }

    useEffect(() => {
        axios.post('/user/findprofile', { googleId: user.user.googleId })
            .then(res => res.data)
            .then(data =>
                data.isProfileCreated ? setCreatedProfile(true) : setCreatedProfile(false)
            )
    }, [])

    return (
        <>
            <section className='pageLoadAnim' >
                <div className={styles.imgBox}>
                    <img src={eventPoster} alt="" className={styles.eventImg} />
                </div>
                <Box sx={{ my: 10 }}>
                    <h2 className={styles.title}><span>----------</span> Upcoming Events <span>----------</span></h2>
                    {
                        !createdProfile ? (
                            <Container sx={{ display: 'flex', justifyContent: "center" }} component={Paper} maxWidth="sm">
                                <StyledBox sx={{ height: '100%', width: '68%', padding: '2rem 0' }}>
                                    <Box sx={{ display: 'flex', justifyContent: "center" }}>
                                        <Avatar
                                            alt={user !== null ? user.user.fullName : ''}
                                            src={user !== null ? user.user.profilePic : ''}
                                            sx={{ mb: 1, width: 56, height: 56 }}
                                        />
                                    </Box>
                                    <Typography sx={{ mb: 5 }} color="gray" align='center' variant="subtitle1" >
                                        {user !== null ? user.user.fullName : ''}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <PersonOutlineIcon sx={{ mr: 2 }} />
                                        <TextField
                                            name='fullName'
                                            variant='outlined'
                                            size='small'
                                            type='text'
                                            label='Full Name'
                                            value={formValues.fullName}
                                            onChange={handleChange}
                                            error={Boolean(errors.fullName)}
                                            helperText={errors.fullName}
                                            fullWidth
                                        />
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                        <PeopleAltOutlinedIcon sx={{ mr: 2 }} />
                                        <TextField
                                            fullWidth
                                            select
                                            size='small'
                                            name='gender'
                                            value={formValues.gender}
                                            label="Gender"
                                            onChange={handleChange}
                                            error={Boolean(errors.gender)}
                                            helperText={errors.gender}
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
                                            value={formValues.whatsappNumber}
                                            onChange={handleChange}
                                            label='WhatsApp Number'
                                            error={Boolean(errors.whatsappNumber)}
                                            helperText={errors.whatsappNumber}
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
                                            label='Instagram URL (optional)'
                                            value={formValues.instaUrl}
                                            onChange={handleChange}
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
                                            value={formValues.instituteName}
                                            onChange={handleChange}
                                            label='Institute Name'
                                            error={Boolean(errors.instituteName)}
                                            helperText={errors.instituteName}
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
                                                loading={false}
                                                variant="contained"
                                                fullWidth
                                            >
                                                Submit
                                            </LoadingButton>
                                        </Box>
                                    </Box>
                                </StyledBox>
                            </Container>
                        ) : (
                            <Typography align='center' variant="h3" color="initial">Profile Already Exists!</Typography>
                        )
                    }
                </Box>
            </section >

        </>
    )
}