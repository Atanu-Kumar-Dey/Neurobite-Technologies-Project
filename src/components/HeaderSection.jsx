import React from 'react'
import Box from "@mui/material/Box";
import { MdPersonPin } from "react-icons/md";
import { RiArrowDropDownFill } from "react-icons/ri";

const HeaderSection = () => {
  return (
    <Box display="flex" sx={{ p: 2, fontFamily: "DM Sans" }}>
        <Box flexGrow={1} sx={{ fontSize: "28px", fontWeight: "bold" }}>
          Test_Study
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <MdPersonPin sx={{ mt: "5px" }} color="#2CA9E3" size={24} />
          Atanu Kumar Dey
          <RiArrowDropDownFill size={20} />
        </Box>
      </Box>
  )
}

export default HeaderSection
