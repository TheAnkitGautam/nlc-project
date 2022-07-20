import { Drawer, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'

const drawerWidth = 240

const AdminPage = () => {

    const drawer = (
        <>
            <List>
            <Typography variant="h5" color="initial">Admin</Typography>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Grid container sx={{
                backgroundColor: '#F4F5FA',
            }}
                minHeight='100vh'
            >
                <Drawer
                    variant="permanent"
                    onClose={() => { }}
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { backgroundColor: '#F4F5FA', boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Grid>
        </>
    )
}

export default AdminPage