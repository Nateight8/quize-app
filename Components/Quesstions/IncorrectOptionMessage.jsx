import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalCtxt } from "../GlobalContext";

function IncorrectOptionMessage() {
  const { openWrong, setQuestionNmbr, setCurrentTime } = useGlobalCtxt();
  const [open, setOpen] = useState(true);
  const popupStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    background: "rgba(40, 47, 64, 0.4)",
    backdropFilter: "blur(8.5px)",
    p: 4,
  };

  const handleClose = () => {
    setOpen(false);
    setQuestionNmbr(0);
    setCurrentTime(true);
    location.reload();
  };

  const resp = ["I'm sorry, that is not the correct answer."];

  return (
    <>
      <Modal
        hideBackdrop
        open={openWrong ? open : false}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography variant="h5">Opsss...</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            "I'm sorry, that is not the correct answer.",
          </Typography>
          <Box sx={{ mt: 2 }}>
            {/* <Button color="secondary">Try Again</Button> */}
            <Button onClick={handleClose} color="secondary">
              Try Again
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default IncorrectOptionMessage;
