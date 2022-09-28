import { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Paper, Box } from '@mui/material'
import AllContent from '../components/AllContent';
import AddBlog from '../components/AddBlog';
import AppsIcon from '@mui/icons-material/Apps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddNewContent from '../components/AddNewContent';
import BookIcon from '@mui/icons-material/Book';

const ManageContent = () => {
    const [selectedTab, setSelectedTab] = useState('1');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <>
            <TabContext value={selectedTab}>
                <Box sx={{ m: 1 }} component={Paper} square>
                    <TabList onChange={handleChange} sx={{ height: '60px' }}>
                        <Tab icon={<AppsIcon />} iconPosition="start" label="All Content" value="1"/>
                        <Tab icon={<AddCircleOutlineIcon />} iconPosition="start" label="Add New" value="2" />
                        <Tab icon={<BookIcon />} iconPosition="start" label="Add Blog" value="3" />
                    </TabList>
                </Box>

                <Box sx={{ m: 1, minHeight: "100vh" }} component={Paper} square>
                    <TabPanel value="1">
                        <AllContent />
                    </TabPanel>
                    <TabPanel value="2">
                        <AddNewContent />
                    </TabPanel>
                    <TabPanel value="3">
                        <AddBlog />
                    </TabPanel>
                </Box>
            </TabContext>
        </>
    )
}

export default ManageContent;