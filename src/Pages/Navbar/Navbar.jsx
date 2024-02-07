import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='bg-[#0000005c] lg:px-20 md:px-16 sm:12 px-8'>
            <div className="flex items-center justify-between">
                 <div>
                    <h2 className="text-xl font-bold text-[#fff]">MamonDots</h2>
                 </div>

                 <div className="lg:flex items-center space-x-8 hidden">
                      <ul className="flex items-center justify-center space-x-4 text-[#fff] capitalize">
                        <li className="hover:text-[#FED86E] duration-300"><a href="">home</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">about</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">services</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">transport</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">blogs</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">testimonial</a></li>
                        <li className="hover:text-[#FED86E] duration-300"><a href="">contact</a></li>
                      </ul>
                      <div className="px-4 py-4 bg-[#fff] text-[#091242] font-medium hover:bg-[#FED86E] cursor-pointer duration-300">
                           <button>Request Quote</button>
                      </div>
                 </div>

                 <div className="lg:hidden py-4">
                     <p className="py-2 px-2 border hover:border-transparent hover:text-[#262626]  hover:bg-[#FED86E] cursor-pointer duration-300 text-[#fff]"><IoMdMenu /></p>
                 </div>
            </div>
        </div>
    );
};

export default Navbar;