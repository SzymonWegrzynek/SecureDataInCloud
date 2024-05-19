import { useState } from "react";
import axios from "axios";

function Encrypt() {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);

  const handleUpload = () => {
    if (!file) {
      setMsg("No file selected");
      return;
    }

    const fd = new FormData();
    fd.append("file", file);
    console.log(fd);

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });

    axios
      .post("http://localhost:5001/upload", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: (progressEvent.loaded / progressEvent.total) * 100 };
          });
        },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setMsg("Upload successful");
        console.log(res.data);
      })
      .catch((err) => {
        setMsg("Upload failed");
        console.error(err);
      });
  };

  return (
    <div className="encrypt">
      <p>Upload a file to your Flask server</p>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      </div>
      <button onClick={handleUpload}>Upload</button>
      {progress.started && <progress max="100" value={progress.pc}></progress>}
      {msg && <span>{msg}</span>}
    </div>
  );
}

export default Encrypt;
