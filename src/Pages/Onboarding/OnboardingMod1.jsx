import { useEffect } from 'react';
import Header from '../../Components/Onboarding/Header';
import ModuleContent from '../../Components/Onboarding/ModuleContent';
import Footer from '../../Components/Onboarding/Footer';

import { Box, Grid } from '@material-ui/core';
import { useModuleContentStyles } from '../../Styles/Onboarding/useModuleContentStyles';

import arrowRight from '../../Assets/Onboarding/arrowRight.svg';
import exclamation from '../../Assets/Onboarding/exclamation.svg';
import circleArrow from '../../Assets/Onboarding/circleArrow.svg';

const headerText = {
    title: "Module 1",
    description: "About Clearviction",
};

const mission = {
    title: "Our Mission",
    paragraph1: "ClearViction aims to reduce barriers faced by formerly incarcerated individuals by streamlining the process of vacating eligible convictions in Washington state.",
}

const story = {
    title: "Our Story",
    linkIcon: "doc",
    linkTitle: "Clearviction Story",
    modalTitle: "Our Story",
    modalParagraph1: "Committed to helping people with convictions to improve their quality of life, a group of volunteers decided to create a tool that could simplify the conviction vacation process. While the project started in Seattle, we now have volunteers all across the country (and the world!) contributing to building, maintaining, and improving this product.",
}

const problem = {
    title: "The Problem",
    linkIcon: "doc",
    linkTitle: "The Problem",
    modalTitle: "The problem",
    modalParagraph1: "1 in 4 Washingtonians have been involved in the criminal justice system.",
    modalParagraph2: "People with a criminal record face significant barriers to their day to day life after completing their prison terms. Some challenges include: Finding housing and employment. Earning professional credentials. Getting involved in their community.",
    modalParagraph3: "In 2019, Washington State passed the New Hope Act making it easier for people with past criminal records to have their convictions vacated. Despite the act, the system is slow, inefficient, and difficult for non-legal experts to navigate. It requires multiple steps such as: Gathering documents. Determining eligibility. Filing motions with the court. Scheduling hearings with a judge.",
}

const button1 = {
    link: "/onboarding",
    text: "previous"
}

const button2 = {
    link: "/onboarding-mod2",
    text: "next module"
}

function OnboardingMod1() {
    const classes = useModuleContentStyles();
    return (
        <>
            <Header text={headerText} />
            <Box >
                <Grid container justifyContent="center" className={classes.moduleContentCard} >
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={circleArrow} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9}>
                        <ModuleContent content={mission} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={arrowRight} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={story} />
                    </Grid>
                    <Grid item xs={2} className={classes.cardIcon} >
                        <img src={exclamation} alt="" className={classes.icon} />
                    </Grid>
                    <Grid item xs={9} >
                        <ModuleContent content={problem} />
                    </Grid>
                </Grid>
            </Box>
            <Footer button1={button1} button2={button2} />
        </>
    );
}

export default OnboardingMod1;