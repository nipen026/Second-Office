import Header from "../../Common/Header";
import AccountingComparison from "../../Components/AccountingComparison";
import Banner from "../../Components/Banner";
import BannerWrapper from "../../Components/BannerWrapper";
import Footer from "../../Components/Footer";
import LatestInsights from "../../Components/LatestInsights";
import ServicesSection from "../../Components/ServicesSection";
import StressReliefSection from "../../Components/StressReliefSection";

const HomePage = () =>{
    return (
        <>
        <Header/>
        <Banner/>
        {/* <BannerWrapper/> */}
        <AccountingComparison/>
        <ServicesSection/>
        <StressReliefSection/>
        <LatestInsights/>
        <Footer/>
        </>
    )
}

export default HomePage;