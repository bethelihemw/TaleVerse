import { useEffect, useState } from "react";
import axios from "axios";

function CreateChapterPage() {

  const [stories, setStories] = useState([]);

  const [selectedStory, setSelectedStory] = useState("");

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  const [chapterNumber, setChapterNumber] = useState("");

  // FETCH STORIES
  useEffect(() => {

    const fetchStories = async () => {

      try {

        const { data } = await axios.get(
          "http://localhost:5000/api/stories"
        );

        setStories(data);

      } catch (error) {

        console.log(error);
      }
    };

    fetchStories();

  }, []);

  // SUBMIT CHAPTER
  const submitHandler = async (e) => {

    e.preventDefault();

    try {

      const userInfo = JSON.parse(
        localStorage.getItem("userInfo")
      );

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/chapters",
        {
          title,
          content,
          story: selectedStory,
          chapterNumber,
        },
        config
      );

      console.log(data);

      alert("Chapter created!");

      // CLEAR FORM
      setTitle("");
      setContent("");
      setChapterNumber("");

    } catch (error) {

      console.log(error);

      alert("Failed to create chapter");
    }
  };

  return (
    <div>

      <h1>Create Chapter</h1>

      <form onSubmit={submitHandler}>

        {/* STORY SELECT */}
        <select
          value={selectedStory}
          onChange={(e) => setSelectedStory(e.target.value)}
        >

          <option value="">
            Select Story
          </option>

          {stories.map((story) => (
            <option
              key={story._id}
              value={story._id}
            >
              {story.title}
            </option>
          ))}

        </select>

        <br />

        {/* CHAPTER TITLE */}
        <input
          type="text"
          placeholder="Chapter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        {/* CHAPTER NUMBER */}
        <input
          type="number"
          placeholder="Chapter Number"
          value={chapterNumber}
          onChange={(e) =>
            setChapterNumber(e.target.value)
          }
        />

        <br />

        {/* CONTENT */}
        <textarea
          placeholder="Chapter Content"
          rows="10"
          cols="50"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <br />

        <button type="submit">
          Publish Chapter
        </button>

      </form>

    </div>
  );
}

export default CreateChapterPage;