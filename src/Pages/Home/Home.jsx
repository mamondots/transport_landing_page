import About from "../About/About";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Member from "../Member/Member";
import Services from "../Services/Services";
import Testimonal from "../Testimonal/Testimonal";
import Transport from "../Transport/Transport";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Transport></Transport>
            <Testimonal></Testimonal>
            <Choose></Choose>
            <Member></Member>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;