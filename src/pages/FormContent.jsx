import React from "react";
import UploadDocument from "../formContent/UploadDocument";
import MapChannels from "./../formContent/MapChannels";
import PreviewSave from "./../formContent/PreviewSave";
import DropDown from "./../components/DropDown";

function formStep(step) {
  switch (step) {
    case 0:
      return <UploadDocument />;
      break;
    case 1:
      return <MapChannels />;
      break;
      case 2:
        return <DropDown />;
        break;
    default:
      break;
  }
}

const FormContent = ({ activeStep }) => {
  return formStep(activeStep);
};

export default FormContent;
