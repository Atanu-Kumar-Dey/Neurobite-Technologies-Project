import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SELECT_VALUE_KEY = "MySelectValue";

const options = [
  { id: "name1", label: "Channel1" },
  { id: "name2", label: "Channel2" },
  { id: "name3", label: "Channel3" },
  { id: "name4", label: "Channel4" },
  { id: "name5", label: "Channel5" },
  { id: "name6", label: "Channel6" },
  { id: "name7", label: "Channel7" },
];

export default function DropDown() {
  const [channel, setChannel] = React.useState("");
  const handleChange = (event) => {
    localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(event.target.value));
    setChannel(event.target.value);
  };
  useEffect(() => {
    const lastSelected = JSON.parse(
      localStorage.getItem(SELECT_VALUE_KEY) ?? "[]"
    );
    setChannel(lastSelected);
  }, []);

  return (
    <div>
      <FormControl sx={{ minWidth: "150px",textAlign:"center",my:1,bgcolor:"white" }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          Select channel
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={channel}
          onChange={handleChange}
          autoWidth
          label="channel">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
