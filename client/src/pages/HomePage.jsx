import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function HomePage(){
    const [stories, setStories] = useState([]);
    useEffect(() =>{
        const fetchStories = async ()=>{
            try{
                const {data} = await axios.get("http://localhost:5000/api/stories");
                setStories(data);
            }
            catch(error){
                console.log(error);
            }
        }
        fetchStories();
    }, [])

    return(
        <div>
            <h1>TaleVerse</h1>
            {stories.map((story) => (

            <Link
                key={story._id}
                to={`/story/${story._id}`}
            >
                <div>
                <h2>{story.title}</h2>
                <p>{story.description}</p>
                <small>By {story.author}</small>

                </div>
            </Link>
            ))}
        </div>
    )
}

export default HomePage