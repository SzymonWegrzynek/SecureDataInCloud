import React, { useState } from 'react';
import axios from 'axios';

function Encrypt() {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState('');
  const [message, setMessage] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);

    try {
      const res = await axios.post('http://127.0.0.1:5001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(res.data);
    } catch (err) {
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Upload a file to cloud storage</h1>
      {message && <p>{message}</p>}
      <form onSubmit={onSubmit}>
        <div>
          <input type="file" onChange={onFileChange} />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter the filename"
            value={filename}
            onChange={onFilenameChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Encrypt;
