import "./style.scss";
import { useState } from "react";

const Encrypt = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleEncrypt = async () => {
    if (!file) {
      setMessage("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    const payload = {
      path: file.name
    };

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage("Error: " + data.error);
      } 
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div className="encrypt">
      <h1>Encrypt</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleEncrypt}>Encrypt and Upload</button>
      <p>{message}</p>
    </div>
  );
};

export default Encrypt;
