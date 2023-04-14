import React from 'react';
import { useParams } from 'react-router-dom';
import { projectFirestore } from '../firebase/config';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./OneMovie.css"

const OneMovie = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    projectFirestore
      .collection('netflixsos')
      .doc(movieId)
      .get()
      .then((document) => {
        console.log(document);

        if (document.exists) {
          setData(document.data());
        } else {
          setError('Nenašli jsme tento film');
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [movieId]);

  return (
    <section  className="one-movie-section">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>{data.title}</h1>
      <p>{data.age}+</p>
      <img className="image-sui" src={data.image} alt="" />
      <p>{data.cast}</p>
      <p>{data.Cast}</p>
      <p>{data.time} minut</p>
      <p>{data.description}</p>
      <Link exact to="/Movies"  style={{ color: 'white' }}>
        Zpět na seznam filmů
      </Link>
    </section>
  );
};

export default OneMovie;