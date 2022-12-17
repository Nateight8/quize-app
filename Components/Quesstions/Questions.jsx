import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Options from "./Options";

function Questions({ currentOptions }) {
  const qStyles = {
    border: "1px solid white",
    width: "100%",
    padding: "1rem",
    paddingInline: "0.3em",
    marginBottom: "1rem",
    borderRadius: "6px",
  };

  // console.log(value);
  // console.log(currentOptions.answers);

  const [disableOption, setdisableOption] = useState(false);
  // useEffect(() => {}, []);

  return (
    <Container>
      <Stack>
        <>
          <Box sx={{ ...qStyles }}>
            <Typography
              sx={{ fontSize: "1.6rem", textAlign: "center" }}
              variant="h1"
            >
              {currentOptions.question}
            </Typography>
          </Box>
          <Grid container>
            {currentOptions.answers.map(({ answer, isCorrect }, index) => (
              <Options
                key={answer}
                option={answer}
                isCorrect={isCorrect}
                index={index}
                disableOption={disableOption}
              />
            ))}
          </Grid>
        </>
      </Stack>
    </Container>
  );
}

export default Questions;
