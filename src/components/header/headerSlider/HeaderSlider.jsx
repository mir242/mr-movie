import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MovieCard from '../../Movies/MovieCard';


export default function HeaderSlider({ setBg }) {

  function getImage(Number) {
    return `src/components/image/ask${Number}.jpg`
  }

  return (

    <div className="mt-10 gap-9 ">
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
        autoplay={{ delay: 1800 }}
        loop >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((Number) =>
          <SwiperSlide key={Number}>
<div onMouseOver={(e) => setBg(getImage(Number))}>
  <MovieCard img={getImage(Number)} />
</div>

          </SwiperSlide>

        )}

      </Swiper>
    </div>

  );
}
