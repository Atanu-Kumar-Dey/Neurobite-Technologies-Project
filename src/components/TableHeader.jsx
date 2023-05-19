import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import TableHead from "@mui/material/TableHead";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import DropDown from "./../components/DropDown";
import Paper from "@mui/material/Paper";
import { BsPlusLg } from "react-icons/bs";
import { FcMinus } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}
const listHead = [
  {
    id: "channel",
    label: "Channel",
  },
  {
    id: "primary",
    label: "Primary Channel (default channel)",
  },
  {
    id: "reference",
    label: "Reference Channel (default channel N/A)",
  },
];

function Row(props) {
  const [arr, setArr] = useState([]);
  async function addChannelHandler() {
    setArr([...arr, arr.length + 1]);
  }
  async function deleteHandler(idx) {
    console.log(idx);

    arr.pop();
    setArr([...arr]);
    console.log(arr);
  }
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            sx={{ fontSize: "12px", color: "rgba(47, 126, 199, 1)" }}
            onClick={() => setOpen(!open)}>
            {open ? <FcMinus /> : <BsPlusLg />}
            {open ? (
              <p> &nbsp;Hide backup channel </p>
            ) : (
              <p onClick={addChannelHandler}>&nbsp;Add backup channel </p>
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* <button onClick={addChannelHandler}>Add Channel</button>
      {arr.map((a) => (
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            HI
          </TableCell>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <button onClick={() => deleteHandler(a)}>Delete</button>
          </TableCell>
        </TableRow>
      ))} */}

      <TableRow sx={{ bgcolor: "rgba(246, 246, 246, 1)" }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <>
                      <TableRow key={historyRow.date}>
                        <TableCell align="right">
                          <DropDown />
                        </TableCell>
                        <TableCell align="right">
                          <DropDown />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton
                            aria-label="expand row"
                            size="small"
                            sx={{
                              fontSize: "12px",
                              color: "rgba(224, 58, 58, 1)",
                            }}>
                            <RiDeleteBin6Line />
                            &nbsp; Delete Channel
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </>
                  ))}
                </TableBody>
              </Table>
              <IconButton
                aria-label="expand row"
                size="small"
                sx={{
                  fontSize: "14px",
                  color: "rgba(47, 126, 199, 1)",
                  textAlign: "center",
                  width: "50%",
                }}
                onClick={() => setOpen(!open)}>
                <BsPlusLg />Add backup channel
              </IconButton>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5),
];

export default function TableHeader() {
  return (
    <Paper sx={{ width: "95%", mx: "auto", overflow: "hidden", mb: "20px" }}>
      <TableContainer sx={{ height: 350 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead sx={{}}>
            <TableRow>
              {listHead.map((item) => (
                <TableCell
                  key={item.id}
                  sx={{
                    bgcolor: "rgba(229, 243, 255, 1)",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}>
                  {item.label}
                </TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody sx={{ bgcolor: "white" }}>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
