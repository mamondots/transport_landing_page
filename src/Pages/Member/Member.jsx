import './Member.css'
import team from '../../../public/team.json'
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";

const Member = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:12 px-8 py-8'>
            <div className='text-center flex items-center justify-center flex-col'>
                <p className="px-2 border-l-4 border-l-[#FFD96F]">The Transporters</p>
                <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl text-[#091242] font-bold">Meet Expert Team</h2>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2 py-4 lg:px-12'>
                 {
                    team.map((data,index) => <div key={index}>
                            <div className='group cursor-pointer'>
                                <div className='relative overflow-hidden'>
                                     <img className='group-hover:scale-105 duration-500 w-full' src={data.img} alt="" />
                                     <div className='flex items-center space-x-2 bg-[#FFD968] py-3 px-4 absolute right-[-13vh] group-hover:right-0 duration-300 cursor-pointer bottom-[0vh]'>
                                          <p><FaFacebookF /></p>
                                          <p>< FaInstagram/></p>
                                          <p><FaTwitter /></p>
                                          <p><FaLinkedinIn /></p>
                                     </div>
                                </div>
                                <div className='bg-[#1C1F35] text-[#fff] px-4 py-4'>
                                    <h2 className='text-xl font-bold'>{data.name}</h2>
                                    <p className='text-[#bfbfbf]'>{data.title}</p>
                                </div>
                            </div>
                    </div>)
                 }
            </div>
        </div>
    );
};

export default Member;