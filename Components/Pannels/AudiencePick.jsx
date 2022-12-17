import { Box, LinearProgress, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useGlobalCtxt } from "../GlobalContext";

function AudiencePick({ currentOptions }) {
  const linearStyles = {
    height: 12,
    width: "100%",
    borderRadius: 5,
    background:
      "linear-gradient(180deg, #181E2B 30%, rgba(26, 32, 44, 0.7) 99.99%, rgba(26, 32, 44, 0.7) 100%)",
    ".MuiLinearProgress-bar": {
      background: "linear-gradient(180deg, #10347B 0%, #131925 100%)",
      borderRadius: 5,
    },
  };

  const levelRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".MuiLinearProgress-bar", {
        // background: "blue",
        xPercent: 50,
        duration: 3,
      });
    }, levelRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      container
      sx={{
        padding: "0.5em",
        width: "100%",
        height: "100%",
        background: "",
      }}
    >
      {currentOptions.answers.map(({ answer, value }) => (
        <Box key={answer} marginBottom={2} sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="space-between" paddingY={1}>
            <Box
              sx={{
                // background: "red",
                width: "80%",
                overflowX: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <Typography
                sx={{
                  textTransform: "capitalize",
                  // background: "red",
                  whiteSpace: "nowrap",
                }}
                variant="subtitle1"
              >
                {answer}
              </Typography>
            </Box>
            <Typography
              sx={{ textTransform: "capitalize" }}
              variant="subtitle1"
            >
              {`${value} %`}
            </Typography>
          </Stack>
          <LinearProgress
            ref={levelRef}
            variant="determinate"
            value={value}
            valueBuffer={40}
            sx={linearStyles}
          />
        </Box>
      ))}
    </Stack>
  );
}

export default AudiencePick;
