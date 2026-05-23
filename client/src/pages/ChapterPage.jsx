import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ChapterPage() {

  const { id } = useParams();

  const [chapter, setChapter] = useState(null);

  useEffect(() => {

    const fetchChapter = async () => {

      try {

        const { data } = await axios.get(
          `http://localhost:5000/api/chapters/${id}`
        );

        setChapter(data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchChapter();

  }, [id]);

  if (!chapter) return <h1>notworking...</h1>;

  return (
    <div>

      <h1>
        Chapter {chapter.chapterNumber}
      </h1>

      <h2>{chapter.title}</h2>

      <p>{chapter.content}</p>

    </div>
  );
}

export default ChapterPage;