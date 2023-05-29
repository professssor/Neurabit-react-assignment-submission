import React, { useContext } from "react";
import {
  Box,
  Step,
  StepIcon,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import stepperCss from "./stepper.module.css";
import { ChannelDataState } from "../../States/ChannelDataState";

export default function ProgressStepper() {
  const { steps, activeState } = useContext(ChannelDataState);

  return (
    <Box sx={{ marginTop: { xs: "1rem" } }} className={stepperCss.container}>
      <Stepper
        activeStep={activeState}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          // Step Icon styles
          "& .MuiStepIcon-root": {
            fontSize: "2rem",
            position: "relative",
            zIndex: "2",
            fill: "white",
            borderRadius: "50%",
            border: "solid 2px #959595",
          },
          "& .MuiStepIcon-root.Mui-active": {
            borderRadius: "50%",
            border: "solid 2px #10A44B",
            fill: "white",
          },
          "& .MuiStepIcon-text": {
            fill: "#959595",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            fill: "#10A44B",
            border: "none",
          },

          // Step connector line styles
          "& .MuiStepConnector-line": {
            display: { xs: "none", md: "inline-block", lg: "inline-block" },
            position: "relative",
            bottom: "2rem",
            border: "solid #959595 .1rem",
            left: "49%",
            transform: "translateX(-50%)",
            width: "152%",
            minWidth: { sm: "400%", md: "250%", lg: "152%" },
          },
          "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
            borderColor: "#10A44B",
          },
          "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
            borderColor: "#10A44B",
          },
        }}
      >
        {steps.map((step) => (
          <Step
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: ".5rem",
            }}
            key={step}
          >
            <StepLabel></StepLabel>
            <Typography
              sx={{
                marginY: "1rem",
                color: "#10a44b",
              }}
            >
              <p>{step}</p>
            </Typography>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
