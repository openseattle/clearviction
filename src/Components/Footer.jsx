import { Grid, Box, Container, List, ListItem, Link, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import democracylabLogo from "../Assets/democracylab-logo.png";
import openseattleLogo from "../Assets/openseattle-logo.png";
import { footerPages } from "../data/siteMap.ts";
import LegalDisclaimer from "./LegalDisclaimer";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        paddingTop: theme.spacing(6),
        marginTop: "auto",
    },
    title: {
        margin: theme.spacing(1),
        textAlign: "left",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
        },
    },
    body: {
        margin: theme.spacing(1),
    },
    linkStyles: {
        lineHeight: 2.5,
        textDecoration: "none",
        color: "white",
        "&:hover": { color: "white" },
    },
    arrowIcon: {
        verticalAlign: "middle",
        position: "absolute",
        right: 65,
        top: 8,
        [theme.breakpoints.down("lg")]: {
            display: "none",
        },
    },
    subHeader: {
        fontSize: 11,
    },
    openSeattle: {
        width: 100,
        height: 80,
        [theme.breakpoints.down("sm")]: {
            width: 80,
            height: 60,
        },
    },
    democracyLab: {
        marginRight: theme.spacing(2),
        width: 120,
        height: 40,
        [theme.breakpoints.down("sm")]: {
            width: 100,
            height: 30,
        },
    },
    mobileCenter: {
        position: "relative",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "center",
        },
    },
    mobileHidden: {
        [theme.breakpoints.down("sm")]: {
            display: "none",
        },
    },
}));

const Footer = () => {
    const classes = useStyles();
    const { pathname } = useLocation();

    return (
        !pathname.includes("calculator") && (
            <Box data-testid="footer" className={classes.root} component="footer">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid className={classes.mobileHidden} item xs={12} sm={4} md={4}>
                            <Typography className={classes.title} variant="h5">
                                Welcome!
                            </Typography>
                            <List>
                                <ListItem>
                                    <Typography className={classes.subHeader} variant="body1" style={{ maxWidth: 250 }}>
                                        Clearviction is reducing barriers faced by formerly incarcerated individuals by
                                        streamlining the process of vacating eligible convictions in Washington state.
                                    </Typography>
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <Typography className={classes.title} variant="h5">
                                Explore
                            </Typography>
                            <List>
                                <Grid className={classes.body} container>
                                    {footerPages.map(page => (
                                        <Grid
                                            className={classes.mobileCenter}
                                            item
                                            key={page.name}
                                            xs={12}
                                            sm={12}
                                            md={6}
                                        >
                                            <Link
                                                data-testid="footer-link"
                                                className={classes.linkStyles}
                                                href={page.url}
                                                underline="hover"
                                            >
                                                {page.name}
                                                <ArrowRightIcon className={classes.arrowIcon} />
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </List>
                        </Grid>

                        <Grid item xs={12} sm={4} md={4}>
                            <Typography className={classes.title} variant="h5" style={{ borderRadius: "solid" }}>
                                Partnerships
                            </Typography>
                            <List>
                                <ListItem className={classes.mobileCenter}>
                                    <img
                                        className={classes.democracyLab}
                                        src={democracylabLogo}
                                        alt="Democracy Lab Logo"
                                    />
                                    <img
                                        className={classes.openSeattle}
                                        src={openseattleLogo}
                                        alt="Open Seattle Logo"
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Box sx={{ marginBottom: 6 }} />
                    <LegalDisclaimer text="The content on this website should not be treated as legal advice." />
                    <LegalDisclaimer text="Clearviction is a registered 501(c)3 nonprofit organization, EIN#88-3187952.  All donations are tax deductible in full or in part. " />
                    <Box sx={{ marginBottom: 7 }} />
                </Container>
            </Box>
        )
    );
};

export default Footer;
