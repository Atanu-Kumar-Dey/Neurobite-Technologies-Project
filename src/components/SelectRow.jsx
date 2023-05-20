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

const Rows = ({ name }) => {
  const [arr, setArr] = useState([]);
  
  const dispatch=useDispatch();
  async function addChannelHandler() {
   
    setArr([...arr, {0:null,1:null}]);
  dispatch(setArray(arr));
    console.log(arr);
  }
  async function deleteHandler(idx) {
    console.log(arr+"Before Delete");
    arr.pop();

    setArr([...arr]);
    dispatch(setArray(arr));  
    console.log(arr+"After Delete");

  }
  const [open, setOpen] = React.useState(false);
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
                <FcMinus /> &nbsp;Hide backup channel{" "}
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
                  <p onClick={addChannelHandler}>
                    <BsPlusLg /> &nbsp;Add backup channel
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
                        <TableCell sx={{ width: "42%" }} align="right">
                          <DropDown />
                        </TableCell>
                        <TableCell  sx={{ width: "40%" }} align="center">
                          <DropDown />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            sx={{
                              fontSize: "12px",
                              color: "rgba(224, 58, 58, 1)",
                            }}>
                            <RiDeleteBin6Line />
                            <p onClick={() => deleteHandler(item)}>
                              &nbsp; Delete Channel
                            </p>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
              {arr.length===0 && <p style={{textAlign:"center",fontSize:"16px"}}>No backup channel added</p>}
              <IconButton
                aria-label="expand row"
                size="small"
                sx={{
                  fontSize: "14px",
                  color: "rgba(47, 126, 199, 1)",
                  textAlign: "center",
                  width: "50%",
                }}
                onClick={addChannelHandler}>
                <BsPlusLg />
                Add backup channel
              </IconButton>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default Rows;
