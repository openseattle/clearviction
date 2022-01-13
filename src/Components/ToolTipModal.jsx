import { useState } from "react";
import { trackClick } from "../trackingUtils";
import { Modal, Box, Button, Typography } from "@material-ui/core";
import Text from "../ui-kit/Text";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
};

const ToolTipModal = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
    trackClick(props.text);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{ color: "black", textDecoration: "underline" }}
      >
        <Text text={props.text} variant={"h5"}></Text>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box style={style}>
          <Typography
            id="modal-modal-description"
            style={{ mt: 2, fontSize: "18px" }}
          >
            If you don't know the answer, you may check your criminal record{" "}
            <a
              target="_blank"
              href="https://www.wsp.wa.gov/crime/criminal-history"
              rel="noreferrer"
            >
              here
            </a>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ToolTipModal;
