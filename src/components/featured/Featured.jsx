import './featured.css';

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img
                    src="https://r-xx.bstatic.com/xdata/images/city/300x240/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Da Lat</h1>
                    <h2>2,146 pro3erties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://q-xx.bstatic.com/xdata/images/city/300x240/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Vung Tau</h1>
                    <h2>2,146 prope3ties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://q-xx.bstatic.com/xdata/images/city/300x240/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>City. Ho Chi Minh</h1>
                    <h2>2,146 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://r-xx.bstatic.com/xdata/images/city/300x240/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Da Nang</h1>
                    <h2>2,146 properties</h2>
                </div>
            </div>
        </div>
    );
};

export default Featured;
