import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useGlobalCtxt } from "../GlobalContext";

function Options({ option, isCorrect }) {
  const aStyles = {
    color: "white",
    border: "1px solid white",
    fontSize: "1rem",
    textTransform: "capitalize",
    fontWeight: 300,
    "&:hover": {
      border: "1px solid white",
      fontSize: "1rem",
      textTransform: "capitalize",
      fontWeight: 300,
    },
  };

  const {
    questionNmbr,
    setQuestionNmbr,
    setCount,
    selectedRandom,
    openWrong,
    setOpenWrong,
    isRightAnswer,
    setisRightAnswer,
    setCurrentTime,
  } = useGlobalCtxt();

  const [value, setvalue] = useState("");

  const handleClick = (e) => {
    setvalue(e.target.value);

    if (isCorrect) {
      setQuestionNmbr(questionNmbr + 1);
      setCount(30);
      setisRightAnswer(true);
      setCurrentTime(false);
    } else {
      setCurrentTime(false);
      setOpenWrong(true);
    }
  };

  useEffect(() => {
    const btns = document.getElementsByClassName("btn");

    for (const btn of btns) {
      if ([...selectedRandom].includes(btn.value)) {
        btn.disabled = true;
        btn.style.opacity = 0.1;
      }
    }
  }, [selectedRandom]);

  return (
    <Grid item xs={6} sx={{ padding: "0.2em" }}>
      <Stack>
        <Button
          className="btn"
          // disabled={disable}
          value={option}
          onClick={handleClick}
          variant="outlined"
          sx={{ ...aStyles }}
        >
          {option}
        </Button>
      </Stack>
    </Grid>
  );
}

export default Options;
