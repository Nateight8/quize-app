import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import { useGlobalCtxt } from "../GlobalContext";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

function Levels({ level, prize, idx }) {
  const { questionNmbr, setQuestionNmbr } = useGlobalCtxt();
  let current = questionNmbr + 1;

  const listTextStyles = {
    display: "flex",
    aligntItems: "center",
    // justifyContent: "space-between",
    padding: "0.5em",
    margin: 0,

    ".MuiListItemText-primary": {
      paddingRight: "1em",
      fontSize: "1.2rem",
      opacity: current === level ? 1 : 0.5,
      fontWeight: current === level ? 600 : null,
      textAlign: "left",
      color: current === level ? "#d97706" : "white",
    },
    ".MuiListItemText-secondary": {
      fontSize: "1.2rem",
      fontWeight: current === level ? 600 : null,
      color: current === level ? "#d97706" : "white",
    },
  };

  return (
    <ListItem disablePadding disableGutters>
      <ListItemText
        sx={{ ...listTextStyles }}
        primary={level}
        secondary={prize}
      />
    </ListItem>
  );
}

export default Levels;
