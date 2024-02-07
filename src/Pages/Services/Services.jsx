import services from '../../../public/service.json'
const Services = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:12 px-8 py-12'>
            <div className="">

                <div>
                    <p className="px-2 border-l-4 border-l-[#FFD96F]">What We Do</p>
                    <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl text-[#091242] font-bold">Safe & Reliable Cargo <br></br>Solutions</h2>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
                        {
                           services.map((data,index) => <div key={index}>
                             <div className='flex group hover:bg-[#FFD96F] cursor-pointer duration-300 items-center justify-center border flex-col text-center px-4 py-6'>
                                  <div className='py-3 px-2  group-hover:bg-[#fff] duration-300 rounded-full'><img src={data.img} alt="" /></div>
                                  <div className='py-2'>
                                     <h2 className='text-xl font-medium text-[#091242]'>{data.title}</h2>
                                     <p className='py-2 text-[#091242b5]'>{data.service}</p>
                                  </div>
                             </div>
                           </div>) 
                        }
                </div>
            </div>
        </div>
    );
};

export default Services;