const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src="./images/dublin1.jpeg" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>213 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="./images/Amsterdam1.png" className="featuredImg"></img>
                <div className="featuredTitles"> 
                    <h1>Amsterdam</h1>
                    <h2>482 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="./images/Moscow.png" className="featuredImg"></img>
                <div className="featuredTitles">
                    <h1>Moscow</h1>
                    <h2>648 properties</h2>
                </div>
            </div>
        </div>
    )
} 

export default Featured