import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function StoryPage() {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/stories/${id}`
        );
        setStory(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStory();
    const fetchChapters = async () => {
        try {
            const { data } = await axios.get(
            `http://localhost:5000/api/chapters/story/${id}`
            );
            setChapters(data);
        } catch (error) {
            console.log(error);
        }
        };
        fetchChapters();
  }, [id]);
  if (!story) return <h1>notworking...</h1>;
  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.description}</p>
      <small>By {story.author}</small>
      <h2>Chapters</h2>
        {chapters.map((chapter) => (
        <Link
            key={chapter._id}
            to={`/chapter/${chapter._id}`}
        >
            <div>
            <h3>
                Chapter {chapter.chapterNumber}:
                {chapter.title}
            </h3>
            </div>
        </Link>
        ))}
    </div>
  );
}

export default StoryPage;