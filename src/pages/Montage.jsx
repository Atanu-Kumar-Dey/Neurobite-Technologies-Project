import React, { useState } from "react";
import HeaderSection from "./../components/HeaderSection";
import ProgressBar from "./../components/ProgressBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

import Stack from "@mui/material/Stack";
import FormContent from "./FormContent";

const Montage = () => {
    const [activeState, setActiveState] = useState(0);
    const previousState = () => {
      setActiveState((prevState) => prevState - 1);
    };
    const resetState = () => {
      setActiveState(0);
    };
    const nextState = () => {
      setActiveState((prevState) => prevState + 1);
    };
  return (
    <div>
      <HeaderSection />
      <ProgressBar activeState={activeState}/>
      <FormContent activeStep={activeState}/>
      {activeState == 3 ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert onClose={() => {}}>
            This is a success alert — check it out!
          </Alert>
        </Stack>
      ) : (
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              px: 2,
              py: 1,
              mb:1,
              bgcolor: "background.paper",
              
            }}>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                variant="outlined"
                disabled={activeState === 0}
                onClick={previousState}>
                Back
              </Button>
            </Box>
            <Box>
              <Button
                disabled={activeState < 2}
                sx={{ textTransform: "lowercase", fontSize: "13" }}
                onClick={resetState}>
                Cancel montage
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#2F7EC7", ml: 3 }}
                onClick={nextState}>
                {activeState === 2 ? "Finish" : "Next"}
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Montage;
