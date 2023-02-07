import './home.css';
import Navbar from '../../components/navbar/Navbar';
import Header from './../../components/header/Header';
import Featured from './../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from './../../components/featuredProperties/FeaturedProperties';
import Mail from './../../components/mail/Mail';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Explore Vietnam</h1>
                <PropertyList />
                <h1 className="homeTitle">Accommodation that guests love</h1>
                <FeaturedProperties />
                <Mail />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
