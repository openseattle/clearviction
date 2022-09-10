import { Grid, Typography } from "@material-ui/core";
import PrimaryButton from "../../ui-kit/PrimaryButton";
import { MainBranchTitleStyles } from "./MainBranchTitleStyles";
import { BackButton } from "../../ui-kit/BackButton";
import ProgressBar from "../../Components/ProgressBar";

const MainBranchTitle = props => {
    const classes = MainBranchTitleStyles();
    return (
        <Grid container className={classes.grid}>
            {props.progressBar && <ProgressBar currentSectionName={props.progressBar.currentSectionName} />}

            {props.backButton && (
                <Grid container className={classes.backButton}>
                    <BackButton />
                </Grid>
            )}

            <Typography variant="h4" component="h1" className={classes.header}>
                {props.header}
            </Typography>

            {props.body &&
                props.body.map((bodyElement, index) => (
                    <Typography key={index} variant="body1" className={classes.body}>
                        {bodyElement.text}
                    </Typography>
                ))}
            <PrimaryButton className={classes.button} text={props.buttonText} href={props.buttonHref} />
        </Grid>
    );
};

export default MainBranchTitle;
