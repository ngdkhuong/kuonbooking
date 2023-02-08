import './searchItem.css';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/356163265.webp?k=d10670d7858ae1d58372b0d99660372ac7f249e00884775720b47d85019b40a9&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Raon Dalat</h1>
                <span className="siDistance">2.2km from the center</span>
                <span className="siTaxiOp">Free airport taxi</span>
                <span className="siSubTitles">
                    Set in Da Lat, 1.9 km from Dalat Palace Golf Club, Raon Dalat offers accommodation with a garden,
                    free private parking, a shared lounge and a terrace.
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellence</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$123</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;
