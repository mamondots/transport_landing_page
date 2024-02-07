import img from '../../assets/img/border.png'
import img2 from '../../assets/img/icon.png'
import { LuPackage2 } from "react-icons/lu";

const Choose = () => {
    return (
        <div className="py-8">
            <div className="grid lg:grid-cols-2 gap-20">
                <div className="bg-[#091242] relative">
                    <img className='p-12 lg:ml-[18vh]' src={img} alt="" />
                    <div className='lg:bottom-[8vh] bottom-0 lg:left-[20vh] absolute bg-[#FFBB2F] flex items-center mx-12 px-4 py-2 space-x-2'>
                        <img src={img2} alt="" />
                        <h2 className='font-medium'>Moving your products across borders</h2>
                    </div>
                </div>

                <div>
                    <div className='px-8 lg:mt-[9vh]'>
                        <p className="px-2 border-l-4 border-l-[#FFD96F]">Why Choose</p>
                        <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl text-[#091242] font-bold">We create opportunity to reach potential</h2>
                        <p>
                            Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.
                        </p>

                        <div className='py-4 flex items-center gap-12 flex-wrap'>
                            <div className='space-y-2'>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>Safe Package</span>
                                </p>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>Global Tracking</span>
                                </p>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>In Time Delivery</span>
                                </p>
                            </div>

                            <div className='space-y-2'>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>Ship Everyware</span>
                                </p>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>24/7 Support</span>
                                </p>
                                <p className='flex items-center space-x-2 font-medium text-[#4d4d4d]'>
                                    <span className='py-2 px-2 bg-[#FFD96F] text-[#262626] inline-block'><LuPackage2 /></span>
                                    <span>Transparant Pricing</span>
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;