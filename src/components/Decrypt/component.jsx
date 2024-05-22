import "./style.scss";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";

function Decrypt() {
  const [filename, setFilename] = useState("");
  const [message, setMessage] = useState("");

  const onFilenameChange = (e) => {
    setFilename(e.target.value);
  };

  const onDownload = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/download",
        { filename },
        {
          responseType: "blob",
        }
      );

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
    <main className="decrypt">
      <NavLink className="home" to="/">
        <MdHomeFilled />
      </NavLink>
      <p className="header">Download a file from cloud storage</p>
      <section className="form">
        <input
          className="choose-file"
          type="text"
          placeholder="Enter the filename"
          value={filename}
          onChange={onFilenameChange}
        />
        <button className="upload-file" type="button" onClick={onDownload}>
          Download
        </button>
      </section>
      <section className="info">{message && <p>{message}</p>}</section>
    </main>
  );
}

export default Decrypt;
