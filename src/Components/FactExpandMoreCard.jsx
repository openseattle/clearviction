import { Card, CardActionArea, CardActions, CardContent, Collapse, makeStyles, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles(theme => ({
    rootStyle: {
        margin: 8,
    },
    contentStyle: {
        height: "8em",
    },
}));

const FactExpandMoreCard = ({ summary, content }) => {
    const [expanded, setExpanded] = useState();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const classes = useStyles();
    return (
        <Card className={classes.rootStyle}>
            <CardActionArea onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <CardActions>
                    <CardContent className={classes.contentStyle}>
                        <Typography variant="subtitle2" align="left">
                            {summary}
                        </Typography>
                    </CardContent>

                    <ExpandMore style={{ marginLeft: "auto", marginRight: "1em" }} />
                </CardActions>
            </CardActionArea>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>{content}</CardContent>
            </Collapse>
        </Card>
    );
};

export default FactExpandMoreCard;
