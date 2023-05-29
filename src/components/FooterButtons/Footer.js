import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { ChannelDataState } from "../../States/ChannelDataState";

export default function Footer() {
  const { handleBack, handleNext, nextButton, activeState } =
    useContext(ChannelDataState);

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        margin: "auto",
        height: "5rem",
        zIndex: "10000",
        padding: "3rem",
        marginTop: "1rem",
        position: "sticky",
        bottom: "0",
        opacity: "1",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Back button */}
        <Button
          onClick={handleBack}
          disabled={activeState === 0}
          sx={{
            flexDirection: "row",
            textTransform: "none",
            background: "#FFFFFF",
            border: "solid gray 1px",
            borderRadius: ".3rem",
            color: "gray",
            padding: ".7rem 3rem",
          }}
          variant="contained"
        >
          Back
        </Button>

        {/* Cancel Montage button */}
        <a style={{ textDecoration: "none" }} href="#">
          <Typography
            sx={{
              color: "#6D6D6D",
              padding: "1rem",
              fontSize: "1.1rem",
            }}
          >
            Cancel Montage
          </Typography>
        </a>
      </div>

      {/* Next button */}
      <Button
        onClick={handleNext}
        sx={{
          flexDirection: "row",
          textTransform: "none",
          background: "#2F7EC7",
          border: "solid transparent 1px",
          borderRadius: ".3rem",
          ...(activeState >= 2 && {
            background: "#10a44b",
            "&:hover": {
              backgroundColor: "#10a44b",
            },
          }),
          padding: ".8rem 3rem",
        }}
        variant="contained"
      >
        {nextButton}
      </Button>
    </div>
  );
}
