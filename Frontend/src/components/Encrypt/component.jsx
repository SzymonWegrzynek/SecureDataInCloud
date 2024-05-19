import "./style.scss";
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

    setMsg("Uploading...");
    setProgress((prevState) => {
      return { ...prevState, started: true };
    });

    axios
      .post("https://httpbin.org/post", fd, {
        onUploadProgress: (progressEvent) => {
          {
            setProgress((prevState) => {
              return { ...prevState, pc: progressEvent.progress * 100 };
            });
          }
        },
        headers: {
          "Content-Type": "value",
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
    <main className="encrypt">
      <p className="header">Upload a file to Google Cloud Storage</p>
      <section className="form">
        <input
          className="choose-file"
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button className="upload-file" onClick={handleUpload}>
          Upload
        </button>
      </section>
      <section className="progress-and-msg">
        {progress.started && (
          <progress max="100" value={progress.pc}></progress>
        )}
        {msg && <span>{msg}</span>}
      </section>
    </main>
  );
}

export default Encrypt;
