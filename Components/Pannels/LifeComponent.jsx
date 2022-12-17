import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Stack,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import GroupsIcon from "@mui/icons-material/Groups";
import theme from "../theme";
import { useGlobalCtxt } from "../GlobalContext";
import { gsap } from "gsap";
import { useRef } from "react";

function LifeComponent({ currentOptions }) {
  const iconBtnStyles = {
    color: "white",
    border: "3px solid rgba(255, 255, 255, 0.1)",
    paddingInline: "0.8em",
    margin: "0.5em",
    background: theme.palette.primary.main,
    margin: "1rem",
    "&:hover": {
      color: "white",
      background: theme.palette.primary.main,
      border: `3px solid ${theme.palette.customProgress.main}`,
    },
    "&:disabled": {
      transform: "scale(0.8)",
      opacity: 0.6,
      color: "white",
    },
  };

  const {
    setCurrentTime,
    currentTime,
    setisGroupActive,

    setDisable,
    value,
    optionButton,
    selectedRandom,
    setSelectedRandom,
    incorrectOptions,
  } = useGlobalCtxt();

  // const [currentTime, setCurrentTime] = useState(false);
  const [disableCall, setDisableCall] = useState(false);
  const [disableGroup, setDisableGroup] = useState(false);
  const [disableChance, setDisableChance] = useState(false);

  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ms);
      }, ms);
    });
  }

  const first = useRef();

  async function handleChance(event) {
    setDisableChance(true);
    setCurrentTime(false);
    console.log(currentTime);
    setSelectedRandom(randomFunction(incorrectOptions), ...selectedRandom);
    await sleep(5000);
    setCurrentTime(true);
  }
  // console.log(selectedRandom);
  const randomFunction = (x) => {
    let randomArray = [...x]
      .sort(() => (Math.random() > 0.5 ? 1 : -1))
      .slice(0, 2);

    return randomArray;
  };

  async function handleCall(event) {
    setDisableCall(true);

    setCurrentTime(false);
    await sleep(5000);
    setCurrentTime(true);
  }

  async function handleGroup(event) {
    setDisableGroup(true);
    setisGroupActive(true);
    setCurrentTime(false);
    await sleep(5000);
    setCurrentTime(true);
    setisGroupActive(false);
  }

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ background: "", padding: "1rem" }}
    >
      <Box className="lifeBtn">
        <IconButton
          onClick={handleCall}
          disabled={disableCall}
          aria-label="call a friend"
          size="large"
          sx={{ ...iconBtnStyles }}
        >
          <LocalPhoneIcon fontSize="large" color="customWhite" />
        </IconButton>
      </Box>
      <Box className="lifeBtn">
        <IconButton
          disabled={disableGroup}
          onClick={handleGroup}
          sx={{ ...iconBtnStyles }}
          aria-label="ask the audience"
          size="large"
        >
          <GroupsIcon fontSize="large" color="customWhite" />
        </IconButton>
      </Box>
      <Box className="lifeBtn">
        <Button
          disabled={disableChance}
          onClick={handleChance}
          sx={{
            ...iconBtnStyles,
            borderRadius: "50%",
            fontSize: "1.2rem",
            paddingInline: "1em",
            paddingBlock: "0.6em",
          }}
          aria-label="ask the audience"
          size="large"
        >
          50/50
        </Button>
      </Box>
    </Stack>
  );
}

export default LifeComponent;
