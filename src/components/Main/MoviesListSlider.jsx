import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../Movies/MovieCard';
import { useEffect, useState } from 'react';
import { fench } from '../../services/fench';


export default function MoviesListSlider({ type, activTab }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await fench(`${type}/${activTab}`);


      setMovies(data.results)

    })();


  }, [type, activTab])




  return (

    <Swiper
      breakpoints={{

           // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2,
    },

        640: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay]}
      autoplay={{
        delay: 800, reverseDirection: type == 'tv'}}
      centeredSlides
      loop

    >
      {movies.map((movie) => (

        <SwiperSlide key={movie.id}>
          <MovieCard movie={movie} imgSize="w342" type={type} />
        </SwiperSlide>

      ))}


    </Swiper>

  );
}
