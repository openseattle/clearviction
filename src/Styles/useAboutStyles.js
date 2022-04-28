import { makeStyles } from "@material-ui/core";

export const useAboutStyles = makeStyles(theme => ({
    darkBlueBackground: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        padding: theme.spacing(9),
        marginBottom: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(9, 0),
        },
    },
    regularContainer: {
        padding: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
        },
    },
    headingStyle: {
        marginBottom: theme.spacing(6),
    },
    subheadingStyle: {
        marginBottom: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    },
    linkTextStyle: {
        marginRight: theme.spacing(1),
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    gridStyle: {
        padding: theme.spacing(8, 0),
    },
    gridItemStyle: {
        padding: theme.spacing(0.8),
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(3),
        },
    },
    boxShadow: {
        backgroundColor: "#fff",
        boxShadow: "0px 2px 1px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px",
        padding: theme.spacing(9),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(4),
        },
    },
    divider: {
        color: "grey",
        backgroundColor: "#d8d8d8",
        height: 1,
        width: "80%",
        margin: theme.spacing(22, "auto"),
        [theme.breakpoints.down("sm")]: {
            margin: theme.spacing(15, "auto"),
        },
    },
    buttonBoxStyle: {
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(8),
    },
    iconStyle: {
        width: "100%",
        padding: theme.spacing(2),
    },
    cardGridStyle: {
        padding: theme.spacing(1),
        // [theme.breakpoints.down("sm")]: {
        //   padding: theme.spacing(1)
        // },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1, 0),
        },
    },
    teamContainer: {
        width: "80%",
        minWidth: "90vw",
        margin: "0 auto",
    },
    theProblemIcon: {
        color: theme.palette.secondary.main,
        fontSize: "40px",
        margin: theme.spacing(4),
    },
    avatar: {
        width: "100%",
        height: "200px",
    },
    card: {
        width: "100%",
        maxWidth: "250px",
        height: "284px",
        borderRadius: "6px",
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
    },
    name: {
        marginTop: "-10px",
        fontSize: "20px",
        [theme.breakpoints.down("md")]: {
            fontSize: "16px",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "16px",
        },
    },
    role: {
        fontSize: "14px",
        lineHeight: "15px",
        marginTop: theme.spacing(0.5),
        [theme.breakpoints.down("md")]: {
            fontSize: "12px",
        },
    },
    listStyle: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    centerText: {
        textAlign: "center",
    },
    headingSpacing: {
        marginBottom: theme.spacing(4),
    },
    spaceAfter: {
        marginRight: theme.spacing(0),
    },
}));
