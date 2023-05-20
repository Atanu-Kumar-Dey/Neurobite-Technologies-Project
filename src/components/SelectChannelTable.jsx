import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdditionalContent from "./AdditionalContent";
import { useSelector } from "react-redux";
import SelectRows from "./SelectRow";

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
  {
    id: "action",
    label: " ",
  },
];

export default function TableContent() {
  const { channels } = useSelector((state) => state.data);
  
  return (
    <>
      <Paper sx={{ width: "95%", mx: "auto", overflow: "hidden", mb: "10px" }}>
        <TableContainer sx={{ height: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    bgcolor: "rgba(229, 243, 255, 1)",
                    fontWeight: "600",
                    fontSize: "14px",
                  },
                }}>
                {listHead.map((item) => (
                  <TableCell
                    key={item.id}
                    sx={{
                      fontWeight: "600",
                      fontSize: "14px",
                    }}>
                    {item.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{ bgcolor: "white" }}>
              {channels.map((item) => (
               
                <SelectRows  name={item} />
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <AdditionalContent />
    </>
  );
}
