import {
  Box,
  Button,
  CircularProgress,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useGlobalCtxt } from "../GlobalContext";
import TimeOutModal from "../Quesstions/TimeOutModal";
import theme from "../theme";

function CounterComponent() {
  const circularStyles = {
    background: theme.palette.primary.main,
    boxShadow: "0px 0px 5px 1px #1D2532",
    backdropFilter: "blur(12.5px)",
    borderRadius: "50%",
    color: theme.palette.customProgress.main,
    strokeLinecap: "round",
  };

  const { count, setCount, currentTime, setCurrentTime } = useGlobalCtxt();

  const [timerID, setTimerID] = useState(0);

  useEffect(() => {
    let timer = null;

    if (currentTime) {
      timer = setInterval(() => {
        setCount((e) => (e !== -1 ? e - 1 : 30));
      }, 1000);
      setTimerID(timer);
    } else {
      clearInterval(timerID);
    }

    return () => clearInterval(timer);
  }, [currentTime]);
  // console.log(count);
  return (
    <>
      <Stack
        sx={{
          height: "18rem",
          position: "relative",
        }}
        color="primary"
      >
        <CircularProgress
          className="circle"
          variant="determinate"
          value={count * 3.33}
          size={260}
          thickness={1}
          sx={{ ...circularStyles }}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" ccolor="text.secondary">
            {count === 0 ? (setCurrentTime(false), count) : count}
          </Typography>
        </Box>
      </Stack>
    </>
  );
}

export default CounterComponent;
