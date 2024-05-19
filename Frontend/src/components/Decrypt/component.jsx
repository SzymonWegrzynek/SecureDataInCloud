import "./style.scss";
import { useState } from "react";
import axios from "axios";

function Decrypt() {
  const [filename, setFilename] = useState("");
  const [message, setMessage] = useState("");

  const onFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const onDownload = async () => {
    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:5001/download', { filename }, {
        responseType: 'blob',
      });
=======
      const response = await axios.post(
        "http://127.0.0.1:5001/download",
        { filename },
        {
          responseType: "blob",
        }
      );
>>>>>>> 41d62df1365610b974ce57726dd307aabd288e57

      const fileUrl = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = fileUrl;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(fileUrl);

      setMessage("File downloaded successfully");
    } catch (error) {
      setMessage(
        `Error downloading file: ${
          error.response ? error.response.data.error : error.message
        }`
      );
    }
  };

  return (
    <div>
      <h1>Download a file from cloud storage</h1>
      {message && <p>{message}</p>}
      <input
        type="text"
        placeholder="Enter the filename"
        value={filename}
        onChange={onFilenameChange}
      />
      <button type="button" onClick={onDownload}>
        Download
      </button>
    </div>
  );
}

export default Decrypt;
