import { useState } from "react";
import axios from "axios";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        }
      );

      // SAVE USER INFO + TOKEN
      localStorage.setItem(
        "userInfo",
        JSON.stringify(data)
      );

      alert("Login successful!");

      console.log(data);

    } catch (error) {

      console.log(error);

      alert("Invalid email or password");
    }
  };

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={submitHandler}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default LoginPage;