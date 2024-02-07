import Navbar from '../Navbar/Navbar';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner_bg'>
                <Navbar></Navbar>

                <div className='lg:px-20 md:px-16 sm:12 px-8 py-20'>
                    <p className='text-[#fff] bg-[#053667] text-sm border-l-4 rounded inline-block border-l-[#FFB82B] px-2 my-2'>Logistics & Supply Chain Solutions</p>
                    <h2 className='py-2 lg:text-5xl md:text-4xl sm:text-3xl text-3xl font-bold text-[#fff] lg:w-[80vh] md:w-[100vh] title_head'>Your Gateway
                        to any Destination
                        in the World
                    </h2>
                    <p className='text-[#dadada] lg:w-[50%]'>
                        In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus.
                    </p>
                    <button className='my-4 px-6 py-2 bg-[#FED86E] text-[#262626] font-medium cursor-pointer hover:bg-[#fff] duration-300'>Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;