import axios from "axios";
import React, { useState } from "react";
interface User {
  username: string;
  email: string;
  password: string;
}
export default function Register() {
  const [inputValue, setInputValue] = useState<User>({
    username: "",
    email: "",
    password: "",
  });
  console.log(inputValue);
  const handleRegister = async () => {
    try {
      await axios.post(
        " http://localhost:3000/api/v1/auth/sign-up",
        inputValue
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="userName"
        onChange={(e) =>
          setInputValue({ ...inputValue, username: e.target.value })
        }
      />
      <br></br>
      <input
        type="email"
        placeholder="email"
        onChange={(e) =>
          setInputValue({ ...inputValue, email: e.target.value })
        }
      />
      <br></br>
      <input
        type="password"
        placeholder="password"
        onChange={(e) =>
          setInputValue({ ...inputValue, password: e.target.value })
        }
      />
      <br></br>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
