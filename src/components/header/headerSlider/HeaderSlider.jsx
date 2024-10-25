import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../../Movies/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function HeaderSlider({setBg}) {
  const [movies, setMovies] = useState([]);

  async function loadMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=af4c9f1e80dff26c7cbecc443e535d19&language=en-US&page=1"
    );

    setMovies(data.results);
  }

  useEffect(() => {
    loadMovies();
  }, []);



  return (

    <div className="mt-8 rounded-2xl ">
      <Swiper
        breakpoints={{

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },


        }}



        modules={[Autoplay]}
        autoplay={{ delay: 1500 }}
        loop >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div
              onMouseOver={() =>
                setBg(`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`)}>
              <h1>{ }</h1>
              <MovieCard
            movie={movie}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
}
