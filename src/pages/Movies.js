import React, { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { Link } from 'react-router-dom';
import DisplayComponent from '../DisplayComponent';
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
import Footer from '../components/Footer';
import './Movies.css';
import Navbar from '../components/Navbar';

const Movies = () => {
  const[inputValue,setInputValue]=useState("")
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    const moviesAfterFilter=movies.filter((oneMovie)=>{
      return  oneMovie.title.toLowerCase().includes(inputValue.toLowerCase())
    })
    setMovies(moviesAfterFilter)
    },[inputValue])
  useEffect(() => {
    const unsubscribe = projectFirestore
      .collection('netflixsos')
      .onSnapshot((snapshot) => {
        console.log(snapshot.docs);
        if (snapshot.empty) {
          // handle empty snapshot
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setMovies(result);
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section className='movies-box'>
      <Navbar onInputChange={setInputValue}/>
      <DisplayComponent inputValue={setInputValue}/>
      <div className='all-movies'>
        {movies.map((movie) => {
          const { id, image} = movie;

          return (
            <div key={id} className='one-movie'>
              <Link className='box' to={`/one-movie/${id}`}>
                <img src={image} alt='' />
              </Link>
            </div>
          );
        })}
      </div>
      <Footer/>
    </section>
  );
};

export default Movies;