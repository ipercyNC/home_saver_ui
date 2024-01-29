import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Product(props: any) {
    console.log(props)
    return (
        <>
        <Box sx={{minWidth: 275 }}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.product.name}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {props.product.brand}
                    </Typography>
                    <Typography variant="body2" component="div">
                        {props.product.modelNumber}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
        </>
    )
}

export default Product