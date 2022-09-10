import { Box, Typography } from "@material-ui/core";

const Fact = ({ icon, text, }) => {
    return (
        <>
            <Box display={"flex"} justifyContent={"center"} padding={3}>
                {icon}
            </Box>
            <Typography style={{ padding: 3, }} variant="body1" align="center">
                {text}
            </Typography>
        </>
    );
};

export default Fact;
