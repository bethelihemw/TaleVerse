import { useState } from "react";
import axios from "axios";

function RegisterPage() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          username,
          email,
          password,
        }
      );

      console.log(data);

      alert("User registered!");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <div>

      <h1>Register</h1>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />

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
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;