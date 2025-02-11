import { useState, useEffect } from "react";

export default function App() {
  const [messgae, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const fechData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/data`);
      const data = await response.json();

      setMessage(JSON.stringify(data));
    } catch (error) {}
  };

  const loginForm = async (e) => {
    e.preventDeaults();
    const submission = { email, password };

    try {
      const response = await fetch(`http://localhost:8000`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          body: "We Add Something Here",
        },
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
    } catch (error) {}
  };

  //webform for the file
  const fileUpload = async (e) => {
    e.preventDeault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`http://localhost:8000/fileform`, {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setMessage(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {messgae}

      <button onClick={fechData}>Click me for Data</button>

      <form onSubmit={loginForm}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <form onSubmit={fileUpload}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
        <button type="submit">Upload file</button>
      </form>
    </div>
  );
}
