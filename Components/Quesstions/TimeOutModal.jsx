import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalCtxt } from "../GlobalContext";

function TimeOutModal() {
  const {
    // questionNmbr,
    // incorrectOptions,
    count,
    setQuestionNmbr,
    // setCurrentTime,
  } = useGlobalCtxt();

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
    location.reload();
  };

  return (
    <>
      {count}
      <Modal
        hideBackdrop
        open={count === 0 ? open : false}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography variant="h5">Time Out</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            "I'm sorry, time is up. The correct answer is..."
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button color="secondary">Try Again</Button>
            <Button onClick={handleClose} color="secondary">
              Exit
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default TimeOutModal;
