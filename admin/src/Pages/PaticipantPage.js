import React from "react";
import TextField from "@mui/material/TextField";
import { Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import userprofiles from "../JSON_Data/userprofiles.json";
import { ExpandableTableRow } from "./ExpandableTableRow";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function PaticipantPage() {
  const [event, setEvent] = useState("");
  const [searchval, setSearchval] = useState("");
  const handleChange = (event) => {
    setEvent(event.target.value);
  };

  const handleClear = () => {
    setEvent("");
    setSearchval("");
  };

  return (
    <>
      <Box
        sx={{ p: 2, display: "flex", alignItems: "center", m: 1 }}
        component={Paper}
      >
        <FormControl sx={{ width: "20%", mr: 1 }}>
          <InputLabel id="demo-simple-select-label" sx={{ height: "30px" }}>
            Events
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={event}
            label="Event"
            onChange={handleChange}
          >
            <MenuItem value={"Ten"}>Ten</MenuItem>
            <MenuItem value={"Twenty"}>Twenty</MenuItem>
            <MenuItem value={"Thirty"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          sx={{ width: "30%" }}
          label="Search Bar"
          variant="outlined"
          value={searchval}
          onChange={(event) => {
            setSearchval(event.target.value);
          }}
        />
        <Stack direction="row" spacing={2} sx={{ display: "inline", ml: 2 }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<CheckIcon />}
          >
            Apply
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="large"
            startIcon={<ClearIcon />}
            onClick={handleClear}
          >
            Clear
          </Button>
        </Stack>
        <Button
          sx={{ ml: "auto" }}
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DownloadIcon />}
        >
          Download CSV
        </Button>
      </Box>
      <Box sx={{ m: 1 }} component={Paper} square>
        <TableContainer sx={{ maxHeight: "80vh", overflowY: "scroll" }}>
          <Table stickyHeader>
            <TableHead sx={{ background: "#" }}>
              <TableRow sx={{ textTransform: "uppercase" }}>
                <TableCell padding="checkbox" />
                <TableCell style={{ width: "25%" }}>Email</TableCell>
                <TableCell style={{ width: "25%" }}>Name</TableCell>
                <TableCell>Events Registered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userprofiles?.map((profile, index) => {
                return (
                  <ExpandableTableRow
                    key={index}
                    expandComponent={
                      <TableCell colSpan="5">
                        <p>
                          <h4 style={{ display: "inline" }}>Email: </h4>
                          {profile.email}
                        </p>
                        <p>
                          <h4 style={{ display: "inline" }}>Instagram URL: </h4>
                          <a
                            href={profile.instaUrl}
                            target="__blank"
                            rel="noreferer"
                            style={{ color: "gray" }}
                          >
                            {profile.instaUrl}
                          </a>
                        </p>
                        <p>
                          <h4 style={{ display: "inline" }}>
                            Whatsapp Number:{" "}
                          </h4>
                          {profile.whatsappNumber}
                        </p>
                        <p>
                          <h4 style={{ display: "inline" }}>
                            Institute Name:{" "}
                          </h4>
                          {profile.instituteName}
                        </p>
                      </TableCell>
                    }
                  >
                    <TableCell>{profile.email}</TableCell>
                    <TableCell>{profile.fullName}</TableCell>
                    <TableCell>{profile.eventList.join(", ")}</TableCell>
                  </ExpandableTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
