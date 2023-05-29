import { Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function SuccessMessage() {
  const [display, setDisplay] = useState(true);

  setTimeout(() => setDisplay(false), 3000);

  return (
    <>
      {display && (
        <Box
          sx={{
            position: "absolute",
            top: "0",
            display: "flex",
            padding: "3rem",
            justifyContent: "space-evenly",
            background: "#F1FFF7",
            boxShadow: "0px 3px 20px 4px rgba(0, 0, 0, 0.04)",
            borderRadius: "0px 0px 4px 4px",
            alignItems: "center",
            zIndex: "111111",
          }}
        >
          <CheckCircleIcon style={{ color: "#10A44B" }} />
          <Box sx={{ margin: ".4rem" }}>
            <h5 style={{ textShadow: "0 4% #0000000A", color: "#10A44B" }}>
              Channels Configured
            </h5>
            <p
              style={{ color: "#6D6D6D", lineHeight: "1.3", fontSize: ".9rem" }}
            >
              Channels configured successfully
            </p>
          </Box>
          <ClearIcon onClick={() => setDisplay(false)} />
        </Box>
      )}
    </>
  );
}
