import User from "./User"
import Product from "./Product"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Dwelling(props: any) {
    console.log(props)
    return (
        <>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {props.dwelling.dwellingType}
                        </Typography>
                        <Typography variant="body2" component="div">
                            {props.dwelling.address}
                        </Typography>
                        <Typography variant="body2" component="div">
                            {props.dwelling.products.map((p: any) => <Product product={p} />)}
                        </Typography>
                        <Typography variant="body2" component="div">
                            <User user={props.dwelling.user} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>

    )
}
export default Dwelling