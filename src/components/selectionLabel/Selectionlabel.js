import { Box, Typography } from "@mui/material";

export default function Selectionlabel() {
  return (
    <Box
      sx={{
        width: "90%",
        background: "#E5F3FF",
        height: "fit-content",
        padding: "1rem",

        margin: ".5rem",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          alignItems: "center",
          marginLeft: "4rem",
          color: "#0F0F0F",
          justifyContent: "space-around",
        }}
      >
        {" "}
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: "1rem",
            marginRight: "5rem",
          }}
        >
          Channel
        </Typography>
        <Typography
          sx={{
            fontWeight: "600", // Apply semibold font weight\
            marginRight: "4rem",
          }}
        >
          Primary Channel (default select)
        </Typography>
        <Typography
          sx={{
            fontWeight: "600", // Apply semibold font weight
            marginRight: "7rem",
          }}
        >
          Reference Channel (default N/A)
        </Typography>
      </Box>
    </Box>
  );
}
