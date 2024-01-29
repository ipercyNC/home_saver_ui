import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function User(props: any) {
    console.log(props)
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.user.email}
                        </Typography>
                        <Typography variant="body2" component="div">
                            {props.user.username}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}
export default User