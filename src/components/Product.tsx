import { Box, Card, CardContent, Typography } from '@mui/material';

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