import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import useGetInvolvedStyles from "../Styles/useGetInvolvedStyles";
import gsStep1 from "../Assets/gsStep1.svg";
import gsStep2 from "../Assets/gsStep2.svg";
import gsStep3 from "../Assets/gsStep3.svg";
import gsStep4 from "../Assets/gsStep4.svg";

const StepsIconGroup = () => {
    const classes = useGetInvolvedStyles();

    const gettingStartedSteps = [
        {
            id: "step1",
            icon: gsStep1,
            text: "Gather Documents",
        },
        {
            id: "step2",
            icon: gsStep2,
            text: "Calculate Eligibility",
        },
        {
            id: "step3",
            icon: gsStep3,
            text: "File with Court",
        },
        {
            id: "step4",
            icon: gsStep4,
            text: "Schedule Hearing",
        },
    ];

    return (
        <>
            {gettingStartedSteps.map(step => (
                <Grid className={classes.stepIcon}>
                    <Box component="img" style={{ width: "70px" }} src={step.icon} alt="" key={step.id} />
                    <Typography className={classes.volunteerTextStyle} variant="subtitle1" component="p">
                        {step.text}
                    </Typography>
                </Grid>
            ))}
        </>
    );
};

export default StepsIconGroup;
