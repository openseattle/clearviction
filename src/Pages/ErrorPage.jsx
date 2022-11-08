import { useEffect } from "react";
import { Typography, Container, Grid } from "@mui/material";
import { trackPageview } from "../trackingUtils";
import { useDocumentTitle } from "../Components/customHooks/useDocumentTitle";

/** MATERIAL UI IMPORTS */

const ErrorPage = () => {
    useEffect(() => trackPageview("Error"), []);
    useDocumentTitle("Error Page - ");

    return (
        <Container maxWidth="xs">
            <Grid container direction="column" justifyContent="center">
                <Grid item>
                    <Typography variant="h5" align="center" component="h1" style={{ marginTop: "4em" }}>
                        Oops, page not found!
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ErrorPage;
