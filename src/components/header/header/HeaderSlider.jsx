import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



export default function HeaderSlider({ setBg }) {

  function getImage(Number) {
    return `src/components/image/ask${Number}.jpg`
  }

  return (

    <div className="mt-10 gap-9 ">
      <Swiper modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 1600 }}
        loop >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((Number) =>
          <SwiperSlide key={Number}>

            <img
              onMouseOver={(e) => setBg(getImage(Number))}
              className=' rounded-xl shadow-lg shadow-cyan-200/30 w-full '
              src={getImage(Number)} />


          </SwiperSlide>

        )}

      </Swiper>
    </div>

  );
}
