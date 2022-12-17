import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useGlobalCtxt } from "../GlobalContext";
import Levels from "./Levels";

function LevelsComponent() {
  const { levels } = useGlobalCtxt();

  return (
    <List>
      {levels.map(({ level, prize }, idx) => (
        <Levels key={prize} level={level} prize={prize} idx={idx} />
      ))}
    </List>
  );
}

export default LevelsComponent;
