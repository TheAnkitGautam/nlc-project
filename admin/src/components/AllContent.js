import {
  Box,
  Button,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogActions,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { GetAllContent, DeletePost } from "../utils/API_CALLS";
import Loader from "./Loader";

const AllContent = () => {
  const [content, setContent] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [postId, setPostId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await GetAllContent();
      setContent(data);
    };
    fetchData();
    setLoading(false);
  }, [postId]);

  const handleDelete = () => {
    setOpenDialog(false);
    setLoading(true);
    DeletePost(postId);
    setContent(content.filter((item) => item._id !== postId));
    setPostId("");
    setLoading(false);
  };

  return (
    <Box>
      {loading && <Loader />}
      <TableContainer sx={{ maxHeight: "80vh", overflowY: "scroll" }}>
        <Table stickyHeader>
          <TableHead sx={{ background: "#" }}>
            <TableRow sx={{ textTransform: "uppercase" }}>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Link</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {content?.map((doc) => {
              return doc.postList.map((post) => {
                return (
                  <TableRow key={post._id} hover>
                    <TableCell sx={{ cursor: "pointer" }}>
                      <Link
                        href={post.instaUrl}
                        target="_blank"
                        underline="none"
                      >
                        <CardMedia
                          component="img"
                          sx={{ width: "40px", height: "40px" }}
                          image={post.imgUrl}
                          alt="Live from space album cover"
                        />
                      </Link>
                    </TableCell>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{doc.category}</TableCell>
                    <TableCell>
                      <Link
                        href={post.instaUrl}
                        target="_blank"
                        underline="none"
                      >
                        View
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Button
                        data-post-id={post._id}
                        onClick={(e) => {
                          setPostId(e.target.getAttribute("data-post-id"));
                          setOpenDialog(true);
                        }}
                        variant="contained"
                        color="error"
                      >
                        Delete
                      </Button>
                      <Dialog
                        open={openDialog}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Are you sure you want to delete?"}
                        </DialogTitle>
                        <DialogActions sx={{ pb: 3, pr: 3 }}>
                          <Button
                            onClick={handleDelete}
                            sx={{ mr: 2 }}
                            variant="contained"
                          >
                            Yes
                          </Button>
                          <Button
                            onClick={() => setOpenDialog(false)}
                            variant="outlined"
                            autoFocus
                          >
                            No
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                );
              });
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllContent;
