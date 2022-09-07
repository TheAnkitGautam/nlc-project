import { Typography, Paper, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import TitleIcon from "@mui/icons-material/Title";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import InstagramIcon from "@mui/icons-material/Instagram";
import CategoryIcon from "@mui/icons-material/Category";

const AddNewContent = () => {
  const [title, setTitle] = useState("");
  const [thumbnailurl, setThumbnailurl] = useState("");
  const [instaurl, setInstaurl] = useState("");
  const [category, setCategory] = useState("");

  const handleClear = () => {
    setInstaurl("");
    setThumbnailurl("");
    setTitle("");
    setCategory("");
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container
      elevation={4}
      component={Paper}
      sx={{ width: "500px", pt: 5, pb: 10 }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" color="initial">
          Add New Post
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <TitleIcon sx={{ mr: 2 }} />
        <TextField
          name="Title"
          variant="outlined"
          size="small"
          label="Title"
          value={title}
          sx={{ width: "350px" }}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <RecentActorsIcon sx={{ mr: 2 }} />
        <TextField
          name="Thumbnail URL"
          variant="outlined"
          size="small"
          sx={{ width: "350px" }}
          label="Thumbnail URL"
          value={thumbnailurl}
          onChange={(event) => setThumbnailurl(event.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <InstagramIcon sx={{ mr: 2 }} />
        <TextField
          name="Instagram URL"
          variant="outlined"
          size="small"
          sx={{ width: "350px" }}
          label="Instagram URL"
          value={instaurl}
          onChange={(event) => setInstaurl(event.target.value)}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <CategoryIcon sx={{ mr: 2 }} />
        <TextField
          fullWidth
          select
          labelId="demo-simple-select-label"
          id="select-category"
          value={category}
          name="category"
          label="Category"
          onChange={handleChange}
          size="small"
          sx={{ width: "350px" }}
        >
          <MenuItem value={"3rd Angle"}>3rd Angle</MenuItem>
          <MenuItem value={"Fabula Forum"}>Fabula Forum</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ float: "left", px: 2, pt: 3 }}>
        <Button variant="contained" color="success">
          Submit
        </Button>
        <Button
          variant="outlined"
          sx={{ marginLeft: "20px" }}
          onClick={handleClear}
        >
          Clear
        </Button>
      </Box>
    </Container>
  );
};

export default AddNewContent;
