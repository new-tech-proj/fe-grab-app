import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
const MyEmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
        <img src="https://fptshop.com.vn/Uploads/images/image001(109).jpg"/>
        </div>
        <div className="embla__slide">
        <img src="https://fptshop.com.vn/Uploads/images/image002(64).jpg"/>
        </div>
        <div className="embla__slide">
        <img src="https://fptshop.com.vn/Uploads/images/image003(79).jpg"/>
        </div>
      </div>
    </div>
  )
}
export default MyEmblaCarousel;