// import { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [data, setData] = useState({
//     username: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const login = async () => {
//     const res = await axios.post("http://localhost:5000/login", data);

//     if (res.data.success) {
//       window.location.href = "/home";
//     } else {
//       alert("Invalid login");
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Login</h2>

//       <input name="username" placeholder="Username" onChange={handleChange} /><br/>
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>

//       <button onClick={login}>Login</button>
//       <br /><br />
//       <a href="/register">Register</a>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const res = await axios.post("http://localhost:5000/login", data);

    if (res.data.success) {
      window.location.href = "/home";
    } else {
      alert("Invalid login");
    }
  };

  // ✅ Inline CSS styles
  const containerStyle = {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial"
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px",
    width: "250px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h2>Login</h2>

      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        style={inputStyle}
      /><br/>

      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
        style={inputStyle}
      /><br/>

      <button onClick={login} style={buttonStyle}>
        Login
      </button>

      <br /><br />
      <a href="/register">Register</a>
    </div>
  );
}

export default Login;