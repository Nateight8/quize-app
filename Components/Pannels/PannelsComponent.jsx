import { Box, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useGlobalCtxt } from "../GlobalContext";
import AudiencePick from "./AudiencePick";
import AudienceStats from "./AudienceStats";
import CounterComponent from "./CounterComponent";
import LevelsComponent from "./LevelsComponent";
import LifeComponent from "./LifeComponent";

function PannelsComponent({ currentOptions }) {
  const { isGroupActive, setisGroupActive } = useGlobalCtxt();
  // console.log(isGroupActive);
  return (
    <Container>
      <Grid container sx={{ height: "69vh" }}>
        <Grid
          item
          xs={3}
          sx={{ background: "", width: "100%", padding: "0.8em" }}
        >
          {/* rendering optional */}
          {
            <Box sx={isGroupActive === false ? { scale: 0 } : { scale: 1 }}>
              <AudiencePick currentOptions={currentOptions} />
            </Box>
          }
        </Grid>

        <Grid item xs={6} sx={{ padding: "0.8em" }}>
          <Stack
            sx={{ height: "100%" }}
            justifyContent="center"
            alignItems="center"
          >
            <LifeComponent currentOptions={currentOptions} />
            <CounterComponent />
          </Stack>
        </Grid>
        <Grid item xs={3} sx={{ background: "", padding: "0.8em" }}>
          <LevelsComponent />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PannelsComponent;
