import { SvgIcon, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    mainText: {
        minWidth: 150,
        fontSize: 16,
        paddingTop: 5,
    },
    icons: {
        color: theme.palette.secondary.main,
        fontSize: "64px",
        margin: theme.spacing(2),
    },
    gridItemStyle: {
        paddingBottom: theme.spacing(5),
    },
}));

export const IconWithHeaderAndText = props => {
    const classes = useStyles();
    const { icon, header, text } = props;
    const textItems = text.map((t, idx) => (
        <Typography className={classes.mainText} key={idx} variant="body1" align="left">
            {t}
        </Typography>
    ));

    return (
        <Grid container justifyContent="center">
            <Grid item>
                <SvgIcon component={icon} className={classes.icons} />
            </Grid>
            <Grid className={classes.gridItemStyle} item xs={12} sm={10} md={10} lg={10} xl={10}>
                <Grid container alignItems="flex-start">
                    <Typography variant="h4">{header}</Typography>
                    {textItems}
                </Grid>
            </Grid>
        </Grid>
    );
};
