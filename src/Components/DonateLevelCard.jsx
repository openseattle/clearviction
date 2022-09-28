import { Box, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    rootCardStyle: {
        height: 448,
        width: 300,
    },
    amountStyle: {
        padding: theme.spacing(3),
    },
    donationImageStyle: {
        width: 250,
        padding: theme.spacing(1),
    },
}));

const DonateLevelCard = ({ amount, image, text, alt }) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.rootCardStyle}>
                <Typography className={classes.amountStyle} variant="h3" align="center">
                    {amount}
                </Typography>
                <Box display="flex" justifyContent="center">
                    <Box className={classes.donationImageStyle} component="img" alt={alt} src={image} />
                </Box>
                <CardContent>
                    <Typography variant="subtitle2" align="center">
                        {text}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default DonateLevelCard;
