import React from "react";
import UploadDocument from "../formContent/UploadDocument";
import MapChannels from "./../formContent/MapChannels";
import PreviewSave from "./../formContent/PreviewSave";
import FinalPage from "./../formContent/FinalPage";
import { useSelector } from "react-redux";

function formStep(value) {
  switch (value) {
    case 0:
      return <UploadDocument />;
      break;
    case 1:
      return <MapChannels />;
      break;
    case 2:
      return <PreviewSave />;
      break;
    case 3:
      return <FinalPage />;
      break;
    default:
      break;
  }
}

const FormContent = () => {
  const { value } = useSelector((state) => state.counter);
  return formStep(value);
};

export default FormContent;
