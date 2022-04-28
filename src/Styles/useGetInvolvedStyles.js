import { makeStyles } from "@material-ui/core";

export const useGetInvolvedStyles = makeStyles(theme => ({
    regularContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        scrollMarginTop: "4em",
    },
    CTAButtonContainerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        display: "flex",
        justifyContent: "center",
    },
    CTAButtonSpaceStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    headingStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    volunteerTextStyle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    dividerStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    donationImageStyle: {
        width: "100%",
    },
    partnerImageStyle: {
        width: "100%",
    },
    basicListStyle: {
        listStyleType: "disc",
        paddingLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    paperStyle: {
        padding: "3em",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
}));
