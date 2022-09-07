import { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Tab, Paper, Box } from '@mui/material'
import AllContent from '../components/AllContent';
import AppsIcon from '@mui/icons-material/Apps';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddNewContent from '../components/AddNewContent';

const ManageContent = () => {
    const [selectedTab, setSelectedTab] = useState('1');

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };
    
    return (
        <>
            <TabContext value={selectedTab}>
                <Box sx={{ m: 1 }} component={Paper} square>
                    <TabList onChange={handleChange} sx={{height:'60px'}}>
                        <Tab icon={<AppsIcon />} iconPosition="start" label="All Content" value="1"></Tab>
                        <Tab icon={<AddCircleOutlineIcon />} iconPosition="start" label="Add New" value="2" />
                    </TabList>
                </Box>

                <Box sx={{ m: 1, minHeight:"100vh"}} component={Paper} square>
                    <TabPanel value="1">
                        <AllContent />
                    </TabPanel>
                    <TabPanel value="2">
                        <AddNewContent />
                    </TabPanel>
                </Box>
            </TabContext>
        </>
    )
}

export default ManageContent;