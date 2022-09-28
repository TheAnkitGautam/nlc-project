import { Box } from '@mui/material'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddBlog = () => {
  const [editorState, setEditorState] = useState('');

  const config = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['image'],
    ]
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link',
  ]

  return (
    <Box sx={{ zIndex: 999 }}>
      <ReactQuill
        style={{ height: '200px', width: '70%' }}
        placeholder={'Write something...'}
        theme="snow"
        value={editorState}
        modules={config}
        formats={formats}
        onChange={(value) => setEditorState(value)}
      />
      {editorState}
    </Box>
  )
}

export default AddBlog