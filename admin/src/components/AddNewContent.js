import { Typography, Paper, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import TitleIcon from "@mui/icons-material/Title";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import InstagramIcon from "@mui/icons-material/Instagram";
import CategoryIcon from "@mui/icons-material/Category";

const Validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
      errors.title = "Title is required"
  }

  if (!formValues.thumbnailUrl) {
    errors.thumbnailUrl = "Thumbnail URL is required"
  }

  if (!formValues.instaUrl) {
    errors.instaUrl = "Instagram URL is required"
  }

  if(!formValues.category){
    errors.category = "Select a category"
  }

  return errors;
}


const AddNewContent = () => {
  const [errors, setErrors] = useState({});
  const [formval,setFormval]=useState({
    title:'',
    thumbnailUrl:'',
    instaUrl:'',
    category:''
  });

  const handleClear = () => {
    setFormval({
      title:'',
      thumbnailUrl:'',
      instaUrl:'',
      category:''
    })
  };

  const handleChange = (e) => {
    setFormval({
      ...formval,
      [e.target.name]:e.target.value
    })
  };

  const handleSubmit = () =>{
    const errors = Validate(formval);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(formval);
    }
  }

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
          name="title"
          variant="outlined"
          size="small"
          label="Title"
          value={formval.title}
          sx={{ width: "350px" }}
          onChange={handleChange}
          error={Boolean(errors.title)}
          helperText={errors.title}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <RecentActorsIcon sx={{ mr: 2 }} />
        <TextField
          name="thumbnailUrl"
          variant="outlined"
          size="small"
          sx={{ width: "350px" }}
          label="Thumbnail URL"
          value={formval.thumbnailUrl}
          onChange={handleChange}
          error={Boolean(errors.thumbnailUrl)}
          helperText={errors.thumbnailUrl}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <InstagramIcon sx={{ mr: 2 }} />
        <TextField
          name="instaUrl"
          variant="outlined"
          size="small"
          sx={{ width: "350px" }}
          label="Instagram URL"
          value={formval.instaUrl}
          onChange={handleChange}
          error={Boolean(errors.instaUrl)}
          helperText={errors.instaUrl}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", px: 2, pt: 2 }}>
        <CategoryIcon sx={{ mr: 2 }} />
        <TextField
          fullWidth
          select
          labelId="demo-simple-select-label"
          id="select-category"
          value={formval.category}
          name="category"
          label="Category"
          onChange={handleChange}
          size="small"
          sx={{ width: "350px" }}
          error={Boolean(errors.category)}
          helperText={errors.category}
        >
          <MenuItem value={"3rd Angle"}>3rd Angle</MenuItem>
          <MenuItem value={"Fabula Forum"}>Fabula Forum</MenuItem>
        </TextField>
      </Box>
      <Box sx={{ float: "left", px: 2, pt: 3 }}>
        <Button variant="contained" color="success" onClick={handleSubmit}>
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
