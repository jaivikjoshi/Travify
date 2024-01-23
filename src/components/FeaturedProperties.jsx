const FeaturedProperties = () => {
    return (
        <div className="fp">
            <div className="fpItem">
                <img src="/images/jp.jpeg" className="fpImg"></img>
                <span className="fpName">Rambagh Palace</span>
                <span className="fpCity">Jaipur, India</span>
                <span className="fpPrice">Starting from $650</span>
                <span className="fpRating">
                    <button>9.7</button>
                    <span>Excellent</span>
                </span>
            </div>
            <div className="fpItem">
                <img src="/images/Lagoon.jpg" className="fpImg"></img>
                <span className="fpName">Lagoon Resort</span>
                <span className="fpCity">French Polynesia</span>
                <span className="fpPrice">Starting from $1200</span>
                <span className="fpRating">
                    <button>9.0</button>
                    <span>Excellent</span>
                </span>
            </div>
            <div className="fpItem">
                <img src="/images/DrakesHouse.jpg" className="fpImg"></img>
                <span className="fpName">Drake's House</span>
                <span className="fpCity">Toronto, Canada</span>
                <span className="fpPrice">Starting at $44500</span>
                <span className="fpRating">
                    <button>10.0</button>
                    <span>Excellent</span>
                </span>
            </div>

        </div>
    )
}

export default FeaturedProperties