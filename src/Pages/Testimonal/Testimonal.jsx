
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import tstimonal from '../../../public/testimonal.json'
import img from '../../assets/img/quote.png'
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
const Testimonal = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className='lg:px-20 md:px-16 sm:12 px-8 lg:py-12'>
            <div >
                <p className="px-2 border-l-4 border-l-[#FFD96F]">Testimonial</p>
                <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl text-[#091242] font-bold">What Our Customer Say</h2>
            </div>

            <div className="mt-4">
                <Slider {...settings}>
                    {
                        tstimonal.map((data,index) => <div key={index}>
                            <div className="mx-2 px-6 bg-[#F4F4F4]">
                                <div className="flex justify-between ">
                                    <div className="flex items-center space-x-3 py-2">
                                        <img src={data.img} alt="" />
                                        <div>
                                             <h2 className="text-xl font-medium">{data.name}</h2>
                                             <p className="text-[#656565]">{data.title}</p>
                                        </div>
                                    </div>

                                    <div className="hidden lg:black">
                                         <img src={img} alt="" />
                                    </div>
                                </div>

                                <div>
                                     <p className="text-[#656565] py-2">{data.feedback}</p>
                                     <div className="py-1">
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            value={data.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonal;