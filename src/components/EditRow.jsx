import React, { useState } from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Table,
  TableBody,
} from "@mui/material";
import DropDown from "./DropDown";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import Button from "@mui/material/Button";
import { FcMinus } from "react-icons/fc";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { setArray } from "../store/arraySlice";

const EditRow = ({ name }) => {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  async function addChannelHandler() {
   
    setArr([...arr, {0:null,1:null}]);
  dispatch(setArray(arr));
    console.log(arr);
  }
  const editChannelHandler = () => {
    dispatch(decrement());
    console.log("Edit Channel");
  };
  async function deleteHandler(idx) {
    console.log(arr+"Before Delete");
    arr.pop();

    setArr([...arr]);
    dispatch(setArray(arr));  
    console.log(arr+"After Delete");

  }
  const [open, setOpen] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell component="th" scope="row">
          {name}
        </TableCell>
        <TableCell align="center"><DropDown/></TableCell>
        <TableCell align="center"><DropDown/></TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? (
              <Button
                sx={{
                  color: "rgba(47, 126, 199, 1)",
                  fontSize: "9px",
                  border: 1,
                  borderColor: "rgba(47, 126, 199, 1)",
                }}>
                <FcMinus /> &nbsp;Hide backup channel
              </Button>
            ) : (
              <Button
                sx={{
                  color: "rgba(47, 126, 199, 1)",
                  fontSize: "9px",
                  border: 1,
                  borderColor: "rgba(47, 126, 199, 1)",
                }}>
                {arr.length > 0 ? (
                  `View backup channels(${arr.length})`
                ) : (
                  <p onClick={editChannelHandler}>
                    <BsPlusLg /> &nbsp;Edit Channels
                  </p>
                )}
              </Button>
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow sx={{ bgcolor: "rgba(246, 246, 246, 1)", width: "100%" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {arr.map((item) => (
                    <>
                      <TableRow key={item}>
                        <TableCell sx={{ width: "25%" }} align="center">
                          <DropDown />
                        </TableCell>
                        <TableCell  sx={{ width: "30%"}} align="left">
                          <DropDown />
                        </TableCell>
                  
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default EditRow;
