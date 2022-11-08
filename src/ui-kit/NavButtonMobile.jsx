import { Typography, ListItem, Button, Collapse } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";

const NavButtonMobile = ({ page, classes }) => {
    const [expandSubMenu, setExpandSubMenu] = useState(false);

    const handleExpandClick = () => {
        setExpandSubMenu(!expandSubMenu);
    };
    return (
        <>
            {!page.subpages && (
                <ListItem>
                    <Button href={page.url} fullWidth aria-label={page.name}>
                        <Typography className={classes.menuButton} align="center">
                            {page.name}
                        </Typography>
                    </Button>
                </ListItem>
            )}
            {page.subpages && (
                <>
                    <ListItem
                        component={Button}
                        onClick={handleExpandClick}
                        aria-expanded={expandSubMenu}
                        aria-label="show more"
                    >
                        <Typography className={classes.menuButton}>{page.name}</Typography>
                        <ExpandMore className={classes.expandIconStyle} fontSize="medium" />
                    </ListItem>
                    <Collapse in={expandSubMenu} timeout="auto" unmountOnExit>
                        {page.subpages.map((subpage, idx) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Button key={idx} href={subpage.url} fullwidth>
                                <Typography className={classes.subMenuButton}>{subpage.name}</Typography>
                            </Button>
                        ))}
                    </Collapse>
                </>
            )}
        </>
    );
};

export default NavButtonMobile;
