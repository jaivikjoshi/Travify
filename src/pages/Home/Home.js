import Featured from "../../components/Featured"
import FeaturedProperties from "../../components/FeaturedProperties"
import Navbar from "../../components/Navbar"
import ProperyList from "../../components/PropertyList"


const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="home-container">
               <Featured/>
               <h1 className="homeTitle">Browse By Property Type</h1>
               <ProperyList/>
               <h1 className="homeTitle">Homes Guests Love</h1>
               <FeaturedProperties/>
            </div>
            
        </>
    )
}

export default Home