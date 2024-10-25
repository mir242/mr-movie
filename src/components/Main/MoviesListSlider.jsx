import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../Movies/MovieCard';


export default function MoviesListSlider({ movies }) {
  return (
    <Swiper
      breakpoints={{
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
      autoplay={{ delay: 3000 }}
      centeredSlides
      loop
    >
      {movies.map((img) => (

        <SwiperSlide key={img}>
          <MovieCard img={img} />
        </SwiperSlide>

      ))}


    </Swiper>

  );
}