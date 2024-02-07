import './Transport.css'
import transports from '../../../public/transport.json'
const Transport = () => {
    return (
        <div className='py-12'>
            <h2 className='text-center py-4 font-bold lg:text-3xl text-2xl text-[#091242]'>Transporting Across The World</h2>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-2 lg:px-20 md:px-16 sm:12 px-8 relative z-10'>
                {
                    transports.map((data,index) => <div key={index}>
                        <div className='transport_img cursor-pointer hover:scale-95 duration-300 '>
                            <img className='w-full' src={data.img} alt="" />
                            <div className='z-10 absolute bottom-2 px-6 text-[#fff]'>
                                 <h2 className='font-medium'>{data.title}</h2>
                                 <p className='text-sm text-[#FFD96F]'>{data.packs}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className='bg-[#FFDA67] h-[40vh] w-full mt-[-12vh] flex items-center justify-center'>
                  <button className='bg-[#091242] px-8 py-3 text-[#fff] text-sm hover:bg-[#fff] hover:text-[#262626] cursor-pointer duration-300'>More Work</button>
            </div>
        </div>
    );
};

export default Transport;