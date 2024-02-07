import footer from '../../assets/img/footer_bg.png'

const Footer = () => {
    return (
        <div>
            <div>
                <img src={footer} alt="" />
            </div>
            <div className='lg:px-20 md:px-16 sm:12 px-8 bg-[#091242] text-[#fff] py-8'>
                <footer className="footer p-10 text-[#fff]">
                    <aside>
                        <h2 className='texet-xl font-bold'>Mamondots</h2>
                        <p>MD. Industries Ltd.<br />Providing reliable tech since 2024</p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;