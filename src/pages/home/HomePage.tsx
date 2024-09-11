import React from 'react'
import Navbar from '../../components/navbarSection/Navbar';
import ContactUs from '../../components/contactSection/ContactUs';
import Footer from '../../components/footer/Footer';
import AboutUsSection from '../../components/aboutSection/AboutUsSection';
import HeroSection from '../../components/heroSection/HeroSection';
import ProductsSection from '../../components/productsSection/ProductsSection';

const HomePage: React.FC  = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUsSection />
            <ProductsSection />
            <ContactUs />
            <Footer />
        </>
    )
}

export default HomePage;
