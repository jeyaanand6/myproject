// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [data, setData] = useState({
//     username: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const register = async () => {
//     const res = await axios.post("http://localhost:5000/register", data);
//     alert(res.data.message);
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Register</h2>

//       <input name="username" placeholder="Username" onChange={handleChange} /><br/>
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} /><br/>
//       <input name="confirmPassword" type="password" placeholder="Re-enter Password" onChange={handleChange} /><br/>

//       <button onClick={register}>Register</button>
//       <br /><br />
//       <a href="/">Login</a>
//     </div>
//   );
// }

// export default Register;

import { useState } from "react";
import axios from "axios";

function Register() {
  const [data, setData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const register = async () => {
    const res = await axios.post("http://localhost:5000/register", data);
    alert(res.data.message);
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
      <h2>Register</h2>

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

      <input
        name="confirmPassword"
        type="password"
        placeholder="Re-enter Password"
        onChange={handleChange}
        style={inputStyle}
      /><br/>

      <button onClick={register} style={buttonStyle}>
        Register
      </button>

      <br /><br />
      <a href="/">Login</a>
    </div>
  );
}

export default Register;