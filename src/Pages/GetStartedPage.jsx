import { Box, Container, Divider, Grid, Link, Paper, Typography } from "@material-ui/core";
import { AccountBalance, DateRange, History } from "@material-ui/icons";

import teamBuilding from "../Assets/team_building.svg";
import humanProfile from "../Assets/human.svg";
import FactIconGroup from "../Components/FactIconGroup";
import RedesignHeroPanel from "../Components/RedesignHeroPanel";
import ResponsiveJumpButtonGroup from "../Components/ResponsiveJumpButtonGroup";
import { useGetInvolvedStyles } from "../Styles/useGetInvolvedStyles";
import { RedesignButtonPrimary } from "../ui-kit/RedesignButtonPrimary";
import FactSimpleCard from "../Components/FactSimpleCard";
import CourtFormsFactGroup from "../Subpages/GetStarted/CourtFormsFactGroup";
import LegalAidServices from "../Subpages/GetStarted/LegalAidServices";
import FinancialAidServices from "../Subpages/GetStarted/FinancialAidServices";
import { ExternalLink } from "../ui-kit/ExternalLink";

const factsProps = {
    style: { fontSize: 54 },
    color: "secondary",
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
    return (
        <>
            <RedesignHeroPanel title="Get Started">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography className={classes.volunteerTextStyle} variant="subtitle1" component="p">
                            Vacate your conviction in the state of Washington by following these 4 steps!
                        </Typography>
                        <Box marginTop="8em" marginBottom="8em">
                            <RedesignButtonPrimary href="#read-more">read more</RedesignButtonPrimary>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            component="img"
                            style={{ width: "100%", padding: 16 }}
                            src={teamBuilding}
                            alt="Teamwork solves a puzzle."
                        />
                    </Grid>
                </Grid>
            </RedesignHeroPanel>
            <Container id="read-more" className={classes.regularContainerStyle} maxwidth="sm">
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
                    Gathering documents is the first step in the process. This includes any forms or records that
                    pertain to your conviction. Please gather all relevant court forms and get a copy of your Criminal
                    History Record Information (CHRI).{" "}
                </Typography>
                <Typography className={classes.headingStyle} variant="h3">
                    Court Forms
                </Typography>
                <CourtFormsFactGroup />
                <Typography className={classes.headingStyle} variant="h3">
                    Criminal History Record Information (CHRI)
                </Typography>
                <Typography className={classes.volunteerTextStyle} variant="body1">
                    You might need a copy of your Criminal History Record Information (CHRI) to vacate your record.
                    There are two options:
                </Typography>
                <Paper className={classes.paperStyle}>
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
                </Paper>
            </Container>
            <Divider className={classes.dividerStyle} />

            <Container id="eligibility" component="section" className={classes.regularContainerStyle} maxWidth="md">
                <Typography className={classes.headingStyle} variant="h2">
                    Step 2: Eligibility
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    Once you have your records and forms gathered, use our eligibilty calculator to determine whether
                    you are eligible to vacate your misdemeanor conviction. It is expected to take 10-30 minutes.
                </Typography>
                <Typography className={classes.volunteerTextStyle}>
                    <b>You’ll need to know to answer our questions:</b>
                </Typography>
                <FactIconGroup facts={eligibilityFacts} />
            </Container>
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
                    </ExternalLink>{" "}
                    ). Please note that the request to vacate is up to the discretion of the judge and may be denied for
                    a variety of reasons.
                </Typography>
                <Typography className={classes.volunteerTextStyle}>Your request to vacate may be denied if:</Typography>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactSimpleCard>
                            The court does not believe that vacating your conviction will be in the interest of society
                        </FactSimpleCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactSimpleCard>
                            There are inaccuracies in your court records and/or the application
                        </FactSimpleCard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <FactSimpleCard>
                            You violated probation, have not paid off your fines or are otherwise not eligible to vacate
                            that conviction
                        </FactSimpleCard>
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
                    Many pro bono services are only available after being refered by CLEAR, a toll-free legal hotline:
                </Typography>
                <Typography component="ul" variant="body1" className={classes.basicListStyle}>
                    <li>Outside of King County: call 1-888-201-1014 (weekdays 9.15am - 12.15pm)</li>
                    <li>In King County: call 2-1-1 (weekdays 8am - 6pm)</li>
                    <li>You can also apply online at CLEAR*Online</li>
                </Typography>

                <LegalAidServices />
                <Typography className={classes.headingStyle} variant="h3">
                    Financial aid
                </Typography>
                <FinancialAidServices />
            </Container>
        </>
    );
};

export default GetStartedPage;
