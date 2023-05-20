import React, { useState } from "react";
import HeaderSection from "./../components/HeaderSection";
import ProgressBar from "./../components/ProgressBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";
import Stack from "@mui/material/Stack";
import { RxCross2 } from "react-icons/rx";
import FormContent from "./FormContent";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/stateSlice";

const Montage = () => {
  const { value } = useSelector((state) => state.counter);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const alertHandler = () => {
    setClicked(true);
  };

  
  const previousState = () => {
    dispatch(decrement());
  };
  const resetState = () => {
    dispatch(reset());
  };
  const nextState = () => {
    dispatch(increment());
  };
  return (
    <div>
      {value == 3 && !clicked ? (
        <Stack sx={{ width: "100" }} spacing={2}>
          <Alert
            severity="success"
            action={
              <Button
                color="inherit"
                sx={{ my: "auto" }}
                size="small"
                onClick={alertHandler}>
                <RxCross2 size={20} />
              </Button>
            }>
            <AlertTitle>Channels Configured</AlertTitle>
            Channels configured successfully.
          </Alert>
        </Stack>
      ) : (
        <HeaderSection />
      )}

      <ProgressBar />
      <FormContent />
      {value == 3 ? null : (
        <div style={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              px: 2,
              py: 1,
              mb: 1,
              bgcolor: "background.paper",
            }}>
            <Box sx={{ flexGrow: 1 }}>
              <Button
                variant="outlined"
                disabled={value === 0}
                onClick={previousState}>
                Back
              </Button>
            </Box>
            <Box>
              <Button
                disabled={value < 2}
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
                {value === 2 ? "Save" : "Next"}
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Montage;
