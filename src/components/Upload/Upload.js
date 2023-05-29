import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PictureAsPdf as PictureAsPdfIcon } from "@mui/icons-material";

const Upload = () => {
  return (
    // outer main UPload container
    <Box
      sx={{
        background: "white",
        display: "flex",
        justifyContent: "center",
        height: "47vh",
        width: "90%",
        marginTop: "3rem",
        position: "relative",
        bottom: "2rem",
        alignItems: "center",
        borderRadius: ".5rem",
      }}
    >
      {/* inner upload icons container */}
      <Box
        sx={{
          background: "#F8F8F8",
          border: "dashed gray 1.5px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "96%",
          height: "93%",
        }}
      >
        <PictureAsPdfIcon
          sx={{ fontSize: "3.5rem", color: "#2F7EC7", marginY: ".2rem" }}
        />
        <Button
          sx={{
            marginY: ".2rem",
            textTransform: "none",
            color: "#6D6D6D",
            background: "transparent",
            border: "solid 1px black",
          }}
        >
          <Typography variant="inherit">Browse Files</Typography>
        </Button>
        <Typography sx={{ marginY: ".rem" }}>or drop files here</Typography>
        {/* Add additional components here */}
      </Box>
    </Box>
  );
};

export default Upload;
