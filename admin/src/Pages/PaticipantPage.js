import { useEffect } from "react";
import moment from "moment";
import TextField from "@mui/material/TextField";
import { Chip, Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import ClearIcon from "@mui/icons-material/Clear";
import DownloadIcon from "@mui/icons-material/Download";
import { useState } from "react";
import { ExpandableTableRow } from "./ExpandableTableRow";
import { CSVLink } from "react-csv";
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
import { GetUserProfiles } from "../utils/API_CALLS";
import Loader from "../components/Loader";

export default function PaticipantPage() {
  const [eventVal, setEventVal] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Headers for the csv file
  const headers = [
    { label: "fullName", key: "fullName" },
    { label: "email", key: "email" },
    { label: "eventList", key: "eventList" },
    { label: "whatsappNumber", key: "whatsappNumber" },
    { label: "instituteName", key: "instituteName" },
  ];

  useEffect(() => {
    const fetchProfiles = async () => {
      const profiles = await GetUserProfiles();
      setProfiles(profiles.filter((profile) => profile.eventList.length !== 0));
    };
    fetchProfiles();
    setLoading(false);
  }, []);

  const handleChange = (event) => {
    setEventVal(event.target.value);
  };

  const handleEventFilter = (profiles) => {
    if (eventVal === "") {
      return profiles;
    } else {
      return profiles.filter((profile) => profile.eventList.includes(eventVal));
    }
  };

  const handleSearch = (profiles = []) => {
    if (searchVal === "") {
      return profiles.filter((profile) => profile.eventList.length);
    }
    return profiles.filter((profile) => {
      return (
        profile.fullName.toLowerCase().includes(searchVal.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchVal.toLowerCase()) ||
        profile.whatsappNumber
          .toLowerCase()
          .includes(searchVal.toLowerCase()) ||
        profile.instituteName.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
  };

  const handleClear = () => {
    setEventVal("");
    setSearchVal("");
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
            value={eventVal}
            label="Event"
            onChange={handleChange}
          >
            <MenuItem value={"Debate Competition"}>Debate Competition</MenuItem>
            <MenuItem value={"Poetry"}>Poetry</MenuItem>
            <MenuItem value={"Singing"}>Singing</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          sx={{ width: "30%" }}
          label="Search Bar"
          variant="outlined"
          value={searchVal}
          onChange={(event) => {
            setSearchVal(event.target.value);
          }}
        />
        <Stack direction="row" spacing={2} sx={{ display: "inline", ml: 2 }}>
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
          <CSVLink
            headers={headers}
            data={handleSearch(handleEventFilter(profiles))}
            filename="Participants"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Export Data
          </CSVLink>
        </Button>
      </Box>
      <Box sx={{ m: 1 }} component={Paper} square>
        {loading && <Loader />}
        <TableContainer sx={{ maxHeight: "80vh", overflowY: "scroll" }}>
          <Table stickyHeader>
            <TableHead sx={{ background: "#" }}>
              <TableRow sx={{ textTransform: "uppercase" }}>
                <TableCell padding="checkbox" />
                <TableCell style={{ width: "25%" }}>Email</TableCell>
                <TableCell style={{ width: "25%" }}>Name</TableCell>
                <TableCell>Registered for</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {handleSearch(handleEventFilter(profiles))?.map(
                (profile, index) => {
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
                            <h4 style={{ display: "inline" }}>
                              Instagram URL:{" "}
                            </h4>
                            <a
                              href={profile.instaUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{ color: "#0000FF" }}
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
                          <p>
                            <h4 style={{ display: "inline" }}>
                              Date of Registration:{"  "}
                            </h4>
                            {moment(profile.updatedAt).format(
                              "DD MMM YY, hh:mm a"
                            )}
                          </p>
                        </TableCell>
                      }
                    >
                      <TableCell>{profile.email}</TableCell>
                      <TableCell>{profile.fullName}</TableCell>
                      <TableCell>
                        {profile.eventList.map((event) => {
                          return (
                            <Chip
                              sx={{
                                ml: 1,
                                color: "white",
                                backgroundColor: "#5186ba",
                              }}
                              label={event}
                            />
                          );
                        })}
                      </TableCell>
                    </ExpandableTableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
