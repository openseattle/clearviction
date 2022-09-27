import { makeStyles } from '@mui/styles';

export const WhyVacateEmploymentStyles = makeStyles(theme => ({
    sectionSpaceStyle: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
    },
    containerStyles: {
        margin: theme.spacing(15),
        [theme.breakpoints.down('lg')]: {
            margin: theme.spacing(8),
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(5),
        },
    },
    containerStylesAlt: {
        margin: theme.spacing(15),
        [theme.breakpoints.down('lg')]: {
            margin: theme.spacing(8),
        },
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(5),
        },
    },
    title: {
        margin: theme.spacing(2),
    },
    contentText: {
        margin: theme.spacing(2),
    },
    lightBlueSectionBackground: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
    },
    darkBlueSectionBackground: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
    },
    spacer: {
        padding: theme.spacing(3),
    },
    emphasizedText: {
        color: theme.palette.secondary.main,
        fontFamily: "lora",
        margin: theme.spacing(4),
        textAlign: "center",
    },
    regularText: {
        margin: theme.spacing(2),
        textAlign: "center",
        fontSize: 18,
        lineHeight: 1.25,
    },
    citeText: {
        margin: theme.spacing(2),
        textAlign: "center",
        fontSize: 12,
    },
    linkStyle: {
        color: "white",
        textDecoration: "underline",
    },
}));
