import axios from "axios";
import React, { useState } from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { MdChevronLeft, MdChevronRight} from "react-icons/md";
import { useEffect } from "react";
import { db } from "../../utils/firebase-config";
import { updateDoc,doc, arrayUnion } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();

  const movieId = doc(db,'users', `${user?.email}`);

  const saveShow = async (item) => {
      if(user?.email) {
        setLike(true)
        setSaved(true)
        await updateDoc(movieId, {
          savedShow: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path
          })
        })

      }
      else {
        alert('Please login to save the movie');
      }

  }

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, []);



  const slideLeft = () => {
    const slider = document.getElementById("slider");
    // slider.scrollLeft = scrollLeft - 500;
  }

  const slideRight = () => {
    const slider = document.getElementById("slider");
    // slider.scrollLeft = scrollLeft + 500;
  }

  return (
    <div className="p-4">
      <h1 className="text-white font-bold md:text-xl ">{title}</h1>
      <div className="relative flex items-center group">
      <MdChevronLeft
      onClick={slideLeft}
       className="absolute z-[10] opacity-50 hover:opacity-100 bg-white rounded-full cursor-pointer hidden group-hover:block" size={30} />

        <div id={"slider"} className="overflow-x-scroll w-full h-full scrollbar-hide whitespace-nowrap scroll-smooth">
       
          {movies.map((movie, id) => {
            return (
              <div
                key={id}
                className="w-[160px] inline-block cursor-pointer p-2 relative text-white"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <div className="w-full h-full absolute top-0 left-0 opacity-0 hover:bg-black/80 hover:opacity-100 flex justify-center items-center">
                  <p className="text-white whitespace-normal text-sm ">
                    {movie?.title.substring(0, 18)}
                  </p>
                  <div className="absolute top-[10px] left-[10px]" onClick={() => saveShow(movie)}>
                  {like? <FaHeart />: <FaRegHeart />}
                </div>
                </div>
               
              </div>
            );
          })}
        </div>
        <MdChevronRight
        onClick={slideRight}
        className="absolute opacity-50 hover:opacity-100 right-0 z-[10] bg-white rounded-full cursor-pointer hidden group-hover:block" size={30}/>

      </div>
    </div>
  );
};

export default Row;
