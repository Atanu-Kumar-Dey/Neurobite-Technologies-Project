import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const steps = ["Upload EDF's", "Map Channels", "Save & Preview"];

const ProgressBar = ({activeState}) => {
  
  return (
    <>
      <Box
        sx={{
          width: "95%",
          backgroundColor: "white",
          mx: "auto",
          p: 2,
          mb: 2,
          borderRadius: "8px",
        }}>
        <Stepper activeStep={activeState} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      
    </>
  );
};

export default ProgressBar;
