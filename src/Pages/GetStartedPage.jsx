import { Box, Container, Divider, Grid, Typography } from "@mui/material"; // removed Link and Paper
import { AccountBalance, DateRange, History } from "@mui/icons-material";

import chart from "../Assets/chart.svg";
import StepsIconGroup from "../Components/StepsIconGroup";
import quickstart from "../Assets/quickstart.svg";
import FactIconGroup from "../Components/FactIconGroup";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import useGetInvolvedStyles from "../Styles/useGetInvolvedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import FactCard from "../Components/FactCard";
import EligibilityFormsFactGroup from "../Subpages/GetStarted/EligibilityFormsFactGroup";
import LegalAidServices from "../Subpages/GetStarted/LegalAidServices";
import FinancialAidServices from "../Subpages/GetStarted/FinancialAidServices";
import { ExternalLink } from "../ui-kit/ExternalLink";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";
import RecordInformation from "../Subpages/GetStarted/RecordInformation";

const factsProps = {
    style: { fontSize: 54 },
    color: "primary",
};

const eligibilityFacts = [
    {
        id: "fact0",
        icon: <DateRange {...factsProps} />,
        text: "The date & violation of your misdemeanor conviction",
    },
    {
        id: "fact1",
        icon: <History {...factsProps} />,
        text: "If and when you completed the terms of your sentence",
    },
    {
        id: "fact2",
        icon: <AccountBalance {...factsProps} />,
        text: "Pending or new criminal charges & any court orders against you",
    },
];

const GetStartedPage = () => {
    const classes = useGetInvolvedStyles();
    useDocumentTitle("Get Started - ");

    return (
        <>
            <RedesignHeroPanel title="Get Started">
                <Grid container className={classes.heroPanel}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography className={classes.volunteerTextStyle} variant="subtitle1" component="p">
                            Vacate your conviction in the state of Washington by following these 4 steps!
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box component="img" style={{ width: "100%", padding: 16 }} src={chart} alt="" />
                    </Grid>
                    <Grid container className={classes.steps}>
                        <StepsIconGroup />
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Container
                id="read-more"
                className={`${classes.regularContainerStyle} ${classes.centerText}`}
                maxwidth="sm"
            >
                <ResponsiveJumpButtonGroup
                    links={[
                        { url: "documents", linkName: "documents" },
                        { url: "eligibility", linkName: "eligibility" },
                        { url: "court-filing", linkName: "court filing" },
                        { url: "hearing", linkName: "hearing" },
                    ]}
                />
            </Container>
            <Container id="documents" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Step 1: Documents
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    First let’s gather the documents you will need to determine your eligibility. Before using the
                    calculator, gather all the documentation you have regarding your conviction.{" "}
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    <b>You’ll need to know:</b>
                </Typography>
                <FactIconGroup facts={eligibilityFacts} />
                <Typography className={classes.headingStyle} variant="h3">
                    CHRI (Recommended)
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    A copy of your <b>Criminal History Record Information (CHRI)</b> would be very helpful in the
                    vacation process and might be required in some cases.
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1" fontWeight="bold">
                    To get a copy of your CHRI, you have two options:
                </Typography>
                <Grid>
                    <RecordInformation />
                </Grid>
                {/* <Paper className={classes.paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <img src={humanProfile} alt="" width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box display="flex">
                                <Typography className={classes.volunteerTextStyle}>
                                    Get an{" "}
                                    <Link
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        href="https://watch.wsp.wa.gov/WATCH/Home/Notice?ReturnPage=%2FHome%2FIndex"
                                        underline="hover"
                                    >
                                        “unofficial” copy through WATCH
                                    </Link>{" "}
                                    for a $11.00 fee. This report is not always accurate so you should ask the
                                    prosecutor.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classes.paperStyle}>
                    <Grid container>
                        <Grid item xs={12} sm={8}>
                            <Typography>
                                If the WATCH printout is not good enough, go to your local police or sheriff’s office
                                for an official “record review/challenge” fingerprint card.
                            </Typography>
                            <Typography className={classes.volunteerTextStyle}>
                                Next, write WSP a letter asking them to send an official copy of your complete CHRI.
                                Include the fingerprint card and a $12 money order. A copy of your CHRI will be returned
                                to the address on the fingerprint card. Send everything to:
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography className={classes.volunteerTextStyle} align="right">
                                Washington State Patrol <br />
                                Identification and <br />
                                Background Section <br />
                                PO Box 42633 <br />
                                Olympia WA 98504-2633 <br />
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper> */}
            </Container>
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>
            <Container id="eligibility" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Step 2: Eligibility
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    Once you have your records and forms gathered, use our eligibilty calculator to determine whether
                    you are eligible to vacate your misdemeanor conviction. It is expected to take 10-30 minutes.
                </Typography>
                <Box className={classes.centerImageBox}>
                    <Box className={classes.centeredImage} component="img" alt="" src={quickstart} />
                </Box>
            </Container>
            <Box justifyContent="center" display="flex">
                <RedesignButtonPrimary href="/calculator/landing-0">Access Calculator</RedesignButtonPrimary>
            </Box>
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>
            <Container id="court-filing" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Step 3: File with Court
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    Next, submit a request to have your conviction vacated (refer to{" "}
                    <ExternalLink href="https://www.courts.wa.gov/court_dir/?fa=court_dir.county">
                        court directory
                    </ExternalLink>
                    ). Please note that the request to vacate is up to the discretion of the judge and may be denied for
                    a variety of reasons.
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    <b>Common reasons requests to vacate may be denied:</b>
                </Typography>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactCard
                            simpleCardContents="The court does not believe that vacating your conviction will be in the interest of society"
                            isSimpleCard
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactCard
                            simpleCardContents="There are inaccuracies in your court records and/or the application"
                            isSimpleCard
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactCard
                            simpleCardContents="You violated probation, have not paid off your fines or are otherwise not eligible to vacate that conviction"
                            isSimpleCard
                        />
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="md">
                <Divider className={classes.dividerStyle} />
            </Container>
            <Container id="hearing" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Step 4: Court Hearing
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    Last but not least, schedule a hearing with a judge! Below are resources for financial & legal aid.
                </Typography>
                <Typography className={classes.headingStyle} variant="h3">
                    Legal aid
                </Typography>
                <Typography variant="body1">
                    Many pro bono services are only available after being referred by CLEAR, a toll-free legal hotline:
                </Typography>
                <Typography component="ul" variant="body1" className={classes.basicListStyle}>
                    <li>Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm)</li>
                    <li>In King County: call 2-1-1 (weekdays 8am - 6pm)</li>
                    <li>
                        You can also apply online at{" "}
                        <ExternalLink href="https://nwjustice.org/apply-online">CLEAR*Online</ExternalLink>{" "}
                    </li>
                </Typography>

                <LegalAidServices />
                <Typography className={classes.headingStyle} variant="h3">
                    Financial aid
                </Typography>
                <FinancialAidServices />
                <Typography className={classes.headingStyle} variant="h3">
                    Eligibility-Related Forms
                </Typography>
                <EligibilityFormsFactGroup />
            </Container>
        </>
    );
};

export default GetStartedPage;
