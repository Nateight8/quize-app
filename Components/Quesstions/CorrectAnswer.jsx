import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useGlobalCtxt } from "../GlobalContext";

function CorrectAnswer() {
  const { isRightAnswer, setCount, setCurrentTime, setisRightAnswer, levels } =
    useGlobalCtxt();
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
    setCount(30);
    setCurrentTime(true);
    // setQuestionNmbr(questionNmbr + 1);
    setisRightAnswer(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={isRightAnswer ? open : false}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography variant="h5">Yeeyyy!!!</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            "That is the correct answer! You can proceed to the next question "
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button color="secondary">Try Again</Button>
            <Button onClick={handleClose} color="secondary">
              Continue...
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default CorrectAnswer;
