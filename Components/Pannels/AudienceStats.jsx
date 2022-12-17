// import { Box, LinearProgress, Stack, Typography } from "@mui/material";
// import React from "react";

// function AudienceStats({ option, percent }) {
//   const linearStyles = {
//     height: 12,
//     width: "100%",
//     borderRadius: 5,
//     background:
//       "linear-gradient(180deg, #181E2B 30%, rgba(26, 32, 44, 0.7) 99.99%, rgba(26, 32, 44, 0.7) 100%)",
//     ".MuiLinearProgress-bar": {
//       background: "linear-gradient(180deg, #10347B 0%, #131925 100%)",
//       borderRadius: 5,
//     },
//   };

//   return (
//     <Box marginBottom={2} sx={{ width: "100%" }}>
//       <Stack direction="row" justifyContent="space-between" paddingY={1}>
//         <Typography
//           sx={{ textTransform: "capitalize", background: "red" }}
//           variant="subtitle1"
//         >
//           {option} hello
//         </Typography>
//         <Typography sx={{ textTransform: "capitalize" }} variant="subtitle1">
//           {`${percent}%`}
//         </Typography>
//       </Stack>
//       <LinearProgress
//         variant="determinate"
//         value={percent}
//         valueBuffer={40}
//         sx={linearStyles}
//       />
//     </Box>
//   );
// }

// export default AudienceStats;
