import { Button, makeStyles, Snackbar } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  backButtonStyle: {
    fontWeight: "lighter",
  },
});

export const BackButton = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = () => {
    // added error to handle the failure condition as an alert where users are informed
    // about what is happening with a popup before they are redirected.
    try {
      if (document.referrer.includes("calculator")) {
        history.goBack();
      } else
        throw Error(
          "nonCalcReferrer: unable to verify referral by a calculator question. Restarting Calculator..."
        );
    } catch (error) {
      console.log(error);
      setOpen(true);
      sleep(4000).then(() => history.push("/calculator/landing-0"));
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button
        className={classes.backButtonStyle}
        onClick={handleClick}
        {...props}
      >
        <ArrowBackIos /> Previous Question{" "}
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          Unable to access previous questions. Restarting...
        </Alert>
      </Snackbar>
    </>
  );
};
