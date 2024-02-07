import './About.css'
import { MdElectricMoped } from "react-icons/md";
import { FaMoneyBill1 } from "react-icons/fa6";
import aboutImg from '../../assets/img/about.png'

const About = () => {
    return (
        <div className='relative w-full'>
            <div className='about_bg'></div>
            <div className='lg:px-20 md:px-16 sm:12 px-8'>
                <div className='bg-[#fff] grid lg:grid-cols-2 gap-4 py-12 px-12 mt-[-20vh] '>
                    <div>
                        <p className="px-2 border-l-4 border-l-[#FFD96F]">Why Us</p>
                        <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl text-[#091242] font-bold">We provide full range global<br></br> logistics solution</h2>

                        <p className='text-[#494848]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                        </p>
                        <p className='py-2 text-[#494848]'>
                            Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
                        </p>

                        <div className='py-2 space-y-3'>
                            <p className='flex items-center font-medium space-x-2'>
                                <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] rounded-full'><MdElectricMoped /></span>
                                <span>Delivery on Time</span>
                            </p>

                            <p className='flex items-center font-medium space-x-2'>
                                <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] rounded-full'><FaMoneyBill1 /></span>
                                <span>Optimized Travel Cost</span>
                            </p>
                        </div>
                    </div>

                    <div className='lg:mt-[-8vh]'>
                        <img className='lg:p-8' src={aboutImg} alt="" />
                    </div>

                </div>

                <div className='flex items-center justify-center gap-4 flex-wrap pb-6'>
                    <div className='flex items-center border py-6 px-10 space-x-2'>
                        <h2 className='lg:text-4xl text-3xl font-extrabold'>1294</h2>
                        <p className='flex items-center space-x-1 text-sm font-medium text-[#838383]'><span className='bg-[#FFD96F] p-1 inline-block'></span> <span>Delivered Packages</span></p>
                    </div>

                    <div className='flex items-center border py-6 px-10 space-x-2'>
                        <h2 className='lg:text-4xl text-3xl font-extrabold'>3594</h2>
                        <p className='flex items-center space-x-1 text-sm font-medium text-[#838383]'><span className='bg-[#FFD96F] p-1 inline-block'> </span> <span >Satisfied Clients</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;