
const Contact = () => {
    return (
        <div className='lg:px-20 md:px-16 sm:12 px-8 bg-[#091242] text-[#fff]'>
            <div className="text-center flex justify-center items-center flex-col py-12">
                <p className="px-2 border-l-4 border-l-[#FFD96F]">Contact</p>
                <h2 className="py-4 lg:text-4xl md:text-3xl text-2xl font-bold text-[#fff]">Get in touch with us</h2>
                <p className="lg:w-[50%] text-[#cac9c9]">
                    Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.
                </p>
            </div>

            <div className="lg:px-40">
                <form className="gap-4 space-y-4">
                     <div className="flex items-center gap-4 w-full">
                        <input className="py-2 px-2 border outline-none bg-transparent w-full" type="text" placeholder="Your name" />
                        <input className="py-2 px-2 border outline-none bg-transparent w-full" type="email" placeholder="Your email"/>
                     </div>
                     <div className="flex items-center gap-4 w-full">
                        <input className="py-2 px-2 border outline-none bg-transparent w-full" type="text" placeholder="Phone number" />
                        <input className="py-2 px-2 border outline-none bg-transparent w-full" type="text" placeholder="Designer"/>
                     </div>

                     <div className="flex items-center gap-4 w-full">
                        <textarea className="py-2 px-2 border outline-none bg-transparent w-full" cols="30" rows="8" placeholder="Your message"></textarea>
                     </div>

                     <div className="pb-12">
                        <button className="py-2 px-4 bg-[#FFBE32] text-[#262626] cursor-pointer texet-sm font-medium hover:bg-[#fff] duration-300">Submit Message</button>
                     </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;