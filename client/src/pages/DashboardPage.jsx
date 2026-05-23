import { useState } from "react";
import axios from "axios";

function DashboardPage() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");

  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      // GET USER INFO
      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/stories",
        {
          title,
          description,
          genre,
        },
        config
      );

      console.log(data);

      alert("Story created!");

      // CLEAR FORM
      setTitle("");
      setDescription("");
      setGenre("");

    } catch (error) {

      console.log(error);

      alert("Failed to create story");
    }
  };

  return (
    <div>

      <h1>Writer Dashboard</h1>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Story Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <textarea
          placeholder="Story Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <br />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <br />

        <button type="submit">
          Publish Story
        </button>

      </form>

    </div>
  );
}

export default DashboardPage;